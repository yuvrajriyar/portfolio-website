"""Export the reviewed Zillow vintage into static web data, without a database.

The join, metadata precedence, YoY lag and metrics reproduce the SQL mart.
Run with --sources DIRECTORY (zhvi.csv.gz and zori.csv), --forecasts CSV,
--evaluation CSV, and --output DIRECTORY. No credentials or private data.
"""
import argparse, csv, gzip, hashlib, json, math
from collections import defaultdict
from pathlib import Path
from statistics import median


def dump(path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, separators=(',', ':'), allow_nan=False))


def positive(s):
    if not s: return None
    v = float(s)
    if not math.isfinite(v) or v <= 0: raise ValueError('Non-positive source value')
    return round(v, 6)


def med(values):
    clean = [v for v in values if v is not None]
    return median(clean) if clean else None


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--sources', type=Path, required=True)
    p.add_argument('--forecasts', type=Path, required=True)
    p.add_argument('--evaluation', type=Path, required=True)
    p.add_argument('--output', type=Path, required=True)
    p.add_argument('--review-output', type=Path)
    a = p.parse_args()
    rents, seen = {}, set()
    with (a.sources / 'zori.csv').open() as f:
        r = csv.DictReader(f); months = [x for x in r.fieldnames if x[:4].isdigit()]
        for row in r:
            z = row['RegionName']
            assert len(z) == 5 and z.isdigit() and z not in rents
            rents[z] = {m: v for m in months if (v := positive(row[m])) is not None}
    start, end = months[0], months[-1]
    assert end == '2026-08-31', 'Export requires the reviewed August vintage'
    index = {m: i for i, m in enumerate(months)}
    states, latest, histories, allmonths = defaultdict(dict), [], {}, defaultdict(list)
    metadata = {}
    with gzip.open(a.sources / 'zhvi.csv.gz', 'rt') as f:
        r = csv.DictReader(f)
        for row in r:
            z = row['RegionName']
            if z not in rents: continue
            assert z not in seen; seen.add(z)
            # SQL intermediate layer uses ZHVI metadata, even when ZORI labels differ.
            metadata[z] = dict(zip=z, state=row['State'], city=row['City'], metro=row['Metro'], county=row['CountyName'])
            vals = []
            for m, rent in rents[z].items():
                home = positive(row.get(m))
                if home is not None:
                    vals.append([index[m], home, rent]); allmonths[index[m]].append([home, rent])
            if not vals: continue
            histories[z] = vals; states[row['State']][z] = vals
            bymonth = {v[0]: v[1:] for v in vals}
            if len(months)-1 in bymonth:
                h, r = bymonth[len(months)-1]; prev = bymonth.get(len(months)-13)
                latest.append({**metadata[z], 'home':h, 'rent':r, 'homeYoy':((h/prev[0]-1)*100) if prev else None, 'rentYoy':((r/prev[1]-1)*100) if prev else None})
    latest.sort(key=lambda x:x['zip'])
    total = sum(map(len, histories.values()))
    assert (total, len(histories), len(latest)) == (462410,8424,8421), (total,len(histories),len(latest))
    forecasts = defaultdict(list)
    with a.forecasts.open() as f:
        for row in csv.DictReader(f):
            assert row['as_of_month'] == end
            assert row['zip_code'] in histories
            forecasts[row['zip_code']].append(dict(metric='home' if row['metric']=='zhvi_usd' else 'rent', horizon=int(row['horizon_months']), month=row['forecast_month'], model=row['model'], estimate=float(row['estimate_usd']), lower80=float(row['lower_80_usd']), upper80=float(row['upper_80_usd']), lower95=float(row['lower_95_usd']), upper95=float(row['upper_95_usd'])))
    assert sum(map(len, forecasts.values())) == 31566
    for z, rows in forecasts.items():
        assert len(rows)==6 and len({(r['metric'],r['horizon']) for r in rows})==6
        observed = histories[z][-1]
        for r in rows:
            assert r['lower95'] <= r['lower80'] <= r['estimate'] <= r['upper80'] <= r['upper95']
            if r['model']=='flat': assert abs(r['estimate']-observed[1 if r['metric']=='home' else 2]) <= .011
    with a.evaluation.open() as f: evaluation=list(csv.DictReader(f))
    national = [[i,med(v[0] for v in rows),med(v[1] for v in rows),len(rows)] for i,rows in sorted(allmonths.items())]
    source = {'commit':'0ad3beb719aac81c7ebe5969d83225eb7ff63aa0','retrieved':'2026-10-01','zhviSha256':hashlib.sha256(gzip.decompress((a.sources/'zhvi.csv.gz').read_bytes())).hexdigest(),'zoriSha256':hashlib.sha256((a.sources/'zori.csv').read_bytes()).hexdigest(),'files':['data/raw/Zip_zhvi_uc_sfrcondo_tier_0.33_0.67_sm_sa_month.csv.gz','data/raw/Zip_zori_uc_sfrcondomfr_sm_month.csv'],'method':'Inner join on ZIP and month, ZHVI geography, positive observed values, exact 12-month lag. Medians calculated across ZIPs, not medians of groups.'}
    assert source['zhviSha256']=='9dcd2793d97e5f60727bfc10563acdebe8461e48f8af83e09c333512a00521d9'
    assert source['zoriSha256']=='a60963f429dbacf97e4371a8e4f9146322a09073d76031fc1fe477ca65183933'
    data = dict(asOf=end, months=months, latest=latest, national=national, recordCount=total, historicalZipCount=len(histories), forecastZipCount=len(forecasts), forecastCount=31566, source=source, evaluation=evaluation)
    dump(a.output/'summary.json',data)
    for st, h in states.items(): dump(a.output/'history'/f'{st}.json',h)
    for st in states:
        dump(a.output/'forecasts'/f'{st}.json',{z:rs for z,rs in forecasts.items() if metadata[z]['state']==st})
    # A standalone review file may embed the exact same snapshot.
    if a.review_output: dump(a.review_output,dict(summary=data, history=histories, forecasts=dict(forecasts)))
    print(json.dumps({'records':total,'latestZips':len(latest),'historicalZips':len(histories),'forecastRows':31566,'homeMedian':med(r['home'] for r in latest),'rentMedian':med(r['rent'] for r in latest),'grossMedian':med(r['rent']*1200/r['home'] for r in latest),'homeYoyMedian':med(r['homeYoy'] for r in latest),'rentYoyMedian':med(r['rentYoy'] for r in latest),'yoyCoverage':100*sum(r['homeYoy'] is not None for r in latest)/len(latest)}))

if __name__=='__main__': main()
