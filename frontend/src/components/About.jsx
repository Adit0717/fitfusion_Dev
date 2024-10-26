import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: '2rem', textAlign: 'center' }}>
      {/* Title Section */}
      <Typography variant="h3" component="h1" sx={{ marginBottom: '1rem' }}>
        Our Journey
      </Typography>

      {/* Description Section */}
      <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
        FitFusion is a free weight lifting workout tracker that lets athletes intuitively log their workouts, track progress with insightful analytics, and be part of a growing community of gym athletes.
      </Typography>
      
    </Box>
  );
};

export default AboutUs;