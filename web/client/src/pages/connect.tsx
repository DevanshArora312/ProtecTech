import React from 'react'
import { CCTVcard } from '../components/cctvCard';
import { AskAiCard } from '../components/AskAi';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';


export const Connect = () => {
  const port = 5000
  const ip = '0.0.0.0';
  const locations = [
    'Central Park, NYC',
    'Golden Gate Bridge, SF',
    'Eiffel Tower, Paris',
    'Colosseum, Rome',
    'Sydney Opera House, Sydney',
    'Tokyo Tower, Tokyo',
    'Taj Mahal, Agra',
    'Big Ben, London',
    'Statue of Liberty, NYC',
    'Burj Khalifa, Dubai'
  ];
  return (
    <div className='w-full'>
      <div className='pb-8 w-full flex flex-row justify-end'>
        <div className='w-[400px]'>
          <FormControl fullWidth sx={{ marginTop: 2 }}>
              <InputLabel id="location-select-label">Select Location</InputLabel>
              <Select
                labelId="location-select-label"
                id="location-select"
                label="Select Location"
              >
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
          </FormControl>
        </div>
      </div>
      <div className='w-full flex flex-row items-center justify-center gap-10'>
        <CCTVcard ip={ip} port={port}/>
        <AskAiCard />
      </div>
    </div>
  )
}
