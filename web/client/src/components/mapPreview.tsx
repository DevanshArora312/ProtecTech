import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface MapPreviewCardProps {
  latitude: number;
  longitude: number;
}

export function MapPreviewCard({ latitude, longitude }: MapPreviewCardProps) {
  return (
    <Card sx={{ width: 500, mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Location Preview
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          View the location on Google Maps:
        </Typography>
        <Box sx={{ width: '100%', height: 200 }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40197.04420220917!2d77.23221567020967!3d28.62941362867749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1725735933334!5m2!1sen!2sin" width="600" height="450"></iframe>
        </Box>
      </CardContent>
    </Card>
  );
}
