import React from 'react'
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
interface GaugeChartProps {
  value : number | undefined;
}

const GaugeChart = ({ value } : GaugeChartProps) => {
  return (
    <Gauge
      value={value ? value : 0}
      startAngle={-110}
      endAngle={110}
      height={400}
      sx={{
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
          transform: 'translate(0px, 0px)',
        },
      }}
      text={
        ({ value, valueMax }) => `${value} / ${valueMax}`
      }
    />
  )
}

export default GaugeChart