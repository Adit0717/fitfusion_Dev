import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Articles = () => {
  return (
    <Box sx={{ padding: '2rem', display: 'flex', alignItems: 'flex-start' }}>
      <Box sx={{ flex: 1, marginRight: '2rem' }}>
        <Typography variant="h3" component="h1" sx={{ marginBottom: '1rem' }}>
          Your Personal Library
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: '2rem' }}>
          We write about a wide variety of fitness-related content, including workout guides, exercise instructions, and other fitness recommendations. 
          All our content is written by and vetted by a team of personal coaches and experts. You can check out our team here.
        </Typography>
      </Box>
    </Box>
  );
};

export default Articles;