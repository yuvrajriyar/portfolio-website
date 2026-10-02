# EstateFlow web dashboard

Five interactive views: Overview, Market Explorer, ZIP Detail, Forecasts and Guide.
Data through August 2026, matching the reviewed SQL mart and Power BI report.

Live route: `/projects/estateflow/dashboard`.

Run `npm install`, then `npm run dev` to use the dashboard locally. Source data
is shipped as static JSON; no account, credentials or database are required.
History and forecast files load by state as needed. Page reload resets filters.

`scripts/export-estateflow.py` rebuilds the public snapshot from the pinned
ZHVI/ZORI files and forecast outputs. Its source hashes and reconciliation
assertions stop mismatched vintages. `--review-output PATH` optionally writes
one self-contained data payload for offline review outside the public folder.

August reconciliation: 462,410 ZIP-month observations, 8,424 historical ZIPs,
8,421 latest ZIPs, 5,261 forecast ZIPs and 31,566 projections. Latest national
medians: $386,450 home value, $1,824 rent, 5.62% gross rent-to-value. Medians
weight each ZIP equally. Year-over-year growth compares exactly twelve months.

The snapshot is fixed, not a live database connection. Forecasts are
experimental index estimates with historical error intervals, not individual
property values or net rental returns. Guide documents definitions and limits.
