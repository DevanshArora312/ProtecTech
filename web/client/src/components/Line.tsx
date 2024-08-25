import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

interface LineProps{
    place1 : number[] | undefined,
    place2 : number[] | undefined,
    xLabels : string[] | undefined
}
export default function Line({place1, place2, xLabels} : LineProps) {
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: place1, label: 'location1', yAxisId: 'leftAxisId' },
        { data: place2, label: 'location2', yAxisId: 'rightAxisId' },
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      yAxis={[{ id: 'leftAxisId' }, { id: 'rightAxisId' }]}
      rightAxis="rightAxisId"
    />
  );
}