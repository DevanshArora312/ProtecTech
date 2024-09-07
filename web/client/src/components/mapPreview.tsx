import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface MapPreviewCardProps {
  latitude: string | undefined;
  longitude: string | undefined;
}

export function MapPreviewCard({ latitude, longitude }: MapPreviewCardProps) {
  return (
    <Card sx={{ width: 800, mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Location Preview
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          View the location on Google Maps:
        </Typography>
        <Box sx={{ width: '100%', height: 400 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40197.04420220917!2d77.23221567020967!3d28.62941362867749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725735933334!5m2!1sen!2sin" width="770" height="400"></iframe>
        </Box>
        <div className={'flex flex-col'}>
            <div className='flex items-center gap-4 pt-4'> 
                <div className='text-md text-slate-600'>Latitude:</div>
                <div className='text-2xl font-bold text-blue-600'>{latitude}</div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='text-md text-slate-600'>Longitude:</div>
                <div className='text-2xl font-bold text-blue-600'>{longitude}</div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
