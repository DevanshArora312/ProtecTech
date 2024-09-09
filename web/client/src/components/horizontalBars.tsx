import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Rainfall (mm)',
    },
  ],
  width: 500,
  height: 400,
};

const dataset = [
  { month: 'January', seoul: 50 },
  { month: 'February', seoul: 40 },
  { month: 'March', seoul: 60 },
  { month: 'April', seoul: 80 },
  { month: 'May', seoul: 120 },
  { month: 'June', seoul: 100 },
  { month: 'July', seoul: 180 },
  { month: 'August', seoul: 150 },
  { month: 'September', seoul: 90 },
  { month: 'October', seoul: 70 },
  { month: 'November', seoul: 60 },
  { month: 'December', seoul: 50 },
];

const valueFormatter = (value: number | null) => `${value}mm`;

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}
