import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GaugeChart from '../components/GaugeChart';
import MyBarChart from '../components/BarChart';
import ScatterPlot from '../components/ScatterPlot';
import Line from '../components/Line';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export function Analytics() {
  return (
    <Box sx={{ width: '100%', minHeight: 829 }}>
      <Masonry columns={2} spacing={2}>
        {itemData.map((item, index) => (
          <Paper key={index}>
            <div className='flex flex-col items-center justify-center pb-4'>{item?.title}</div>
            {
              item.type === 'unknown' && 
              <div className='flex h-[300px] flex-col items-center justify-center text-4xl text-slate-600 pb-4 font-bold'>
                  <div>Under Construction</div>
                  <div className='text-slate-400'>
                      <EngineeringIcon sx={{ fontSize: 80}}/>
                  </div>
              </div>
            }
            {
              item.type === 'gauge chart' && 
              <div className='flex flex-col items-center justify-center pb-4 font-bold'>
                  <GaugeChart value={item?.data}/>
              </div>
            }
            {
              item.type === 'bar chart' && 
              <div className='flex flex-col items-center justify-center pb-4 font-bold'>
                  <MyBarChart data={item?.dataPoints} labels={item?.labels} xLabels={item?.xLabels} id={item?.id}/>
              </div>
            }
            {
              item.type === 'scatter plot' && 
              <div className='flex flex-col items-center justify-center pb-4 font-bold'>
                <ScatterPlot data1={item?.data1} data2={item?.data2}/>
              </div>
            }
            {
              item.type === 'line' && 
              <div className='flex flex-col items-center justify-center pb-4 font-bold'>
                <Line place1={item?.place1} place2={item?.place2} xLabels={item?.xLabels}/>
              </div>
            }
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    title: 'Monthly Alerts',
    type: 'bar chart',
    dataPoints: [
      [2400, 1398, 9800, 3908, 4800]
    ],
    xLabels: ["april", "may", "june", "july", "august"],
    labels: ['Monthly Alerts'],
    id: ['Monthly Alerts']
  },
  {
    title: 'AI Alert Accuracy',
    type: 'gauge chart',
    data: 80
  },
  {
    title: 'Monthly Alerts (Gender Distribution)',
    type: 'bar chart',
    dataPoints: [
      [2400, 200]
    ],
    xLabels: ["Female", "Male"],
    labels: ['Monthly Alerts (Gender Distribution)'],
    id: ['Monthly Alerts (Gender Distribution)']
  },
  {
    title: 'Alert Distribution (Age and Gender)',
    type: 'scatter plot',
    data1: [
      { x: 20, y: 200, id: 1 },
      { x: 32, y: 100, id: 2 },
      { x: 27, y: 300, id: 3 },
      { x: 34, y: 250, id: 4 },
      { x: 45, y: 400, id: 5 },
      { x: 11, y: 280, id: 6 },
    ],
    data2: [
      { x: 30, y: 300, id: 1 },
      { x: 40, y: 500, id: 2 },
      { x: 20, y: 700, id: 3 },
      { x: 30, y: 350, id: 4 },
      { x: 56, y: 500, id: 5 },
      { x: 23, y: 780, id: 6 },
      { x: 50, y: 400, id: 7 },
      { x: 30, y: 500, id: 8 },
    ],
  },
  {
    title: 'Alert Distribution (Location)',
    type: 'line',
    place1: [2400, 1398, 9800, 3908, 4800, 4400],
    place2: [2800, 2398, 4800, 1908, 2800, 1400],
    xLabels: ["march", "april", "may", "june", "july", "august"]
  },
  {
    title: 'Planned',
    type: 'unknown'
  },
  {
    title: 'Planned',
    type: 'unknown'
  },
  {
    title: 'Planned',
    type: 'unknown'
  },
  {
    title: 'Planned',
    type: 'unknown'
  },
  {
    title: 'Planned',
    type: 'unknown'
  },
];