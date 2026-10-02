import type { Metadata } from 'next';
import Dashboard from './Dashboard';
import summary from '../../../../public/data/estateflow/summary.json';
import type { Summary } from './types';
export const metadata:Metadata={title:'EstateFlow | Interactive housing-market dashboard',description:'Explore US home values, rents, ZIP benchmarks and experimental forecasts using the reviewed August 2026 Zillow snapshot.'};
export default function EstateFlowDashboardPage(){return <Dashboard summary={summary as unknown as Summary}/>;}
