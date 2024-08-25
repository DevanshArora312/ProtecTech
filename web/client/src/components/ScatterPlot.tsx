import * as React from 'react';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import EngineeringIcon from '@mui/icons-material/Engineering';

type datapoint = {
  x: number,
  y: number,
  id: number
}

interface scatterProps{
  data1 : datapoint[] | undefined,
  data2 : datapoint[] | undefined,

}

export default function ScatterPlot({data1, data2} : scatterProps) {
  if (!data1 || !data2) {
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
    <ScatterChart
      width={500}
      height={300}
      series={[
        {
          data: data1,
          yAxisId: 'leftAxis',
          valueFormatter: ({ x, y }) => `${x} years, ${y} alerts`,
        },
        {
          data: data2,
          yAxisId: 'rightAxis',
          valueFormatter: ({ x, y }) => `${x} years, ${y} alerts`,
        },
      ]}
      xAxis={[{ min: 0 }]}
      yAxis={[
        { id: 'leftAxis', min: 0 },
        { id: 'rightAxis', min: 0 },
      ]}
      rightAxis="rightAxis"
      sx={{
        [`& .${axisClasses.left}`]: {
          line: { stroke: '#8884d8' },
          text: { fill: '#8884d8' },
        },
        [`& .${axisClasses.right}`]: {
          line: { stroke: '#82ca9d' },
          text: { fill: '#82ca9d' },
        },
      }}
    />
  );
}