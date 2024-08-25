import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GaugeChart from '../components/GaugeChart';
import { blueGrey } from '@mui/material/colors';

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
      <Masonry columns={3} spacing={2}>
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
              item.type !== 'unknown' && item.type !== 'gauge chart' && 
              <img
                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                src={`${item.img}?w=162&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                  display: 'block',
                  width: '100%',
                }}
              />
            }
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Monthly Alerts',
    type: 'bar chart'
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'AI Alert Accuracy',
    type: 'gauge chart',
    data: 80
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Gender Distribution',
    type: 'bar chart'
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Alert Distribution (Age and Gender)',
    type: 'scatter plot'
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Alert Distribution (Location)',
    type: 'heatmap'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Planned',
    type: 'unknown'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Planned',
    type: 'unknown'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Planned',
    type: 'unknown'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Planned',
    type: 'unknown'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Planned',
    type: 'unknown'
  },
];