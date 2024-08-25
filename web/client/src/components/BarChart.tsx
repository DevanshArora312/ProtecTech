import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import EngineeringIcon from '@mui/icons-material/Engineering';

interface BarChartProps {
  data?: number[][],
  labels?: string[],
  id?: string[],
  xLabels?: string[],
}

export default function MyBarChart({ data, labels, id, xLabels }: BarChartProps) {
  if (!data || !labels || !id || !xLabels) {
    return (
      <div className='flex h-[300px] flex-col items-center justify-center text-4xl text-slate-600 pb-4 font-bold'>
        <div>Chart Couldn't be rendered</div>
        <div className='text-slate-400'>
          <EngineeringIcon sx={{ fontSize: 80 }} />
        </div>
      </div>
    );
  }

  return (
    <BarChart
      width={500}
      height={300}
      series={data.map((datapoints, index) => ({
        data: datapoints,
        label: labels[index],
        id: id[index],
      }))}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
