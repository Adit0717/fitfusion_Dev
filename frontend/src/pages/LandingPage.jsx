import React from 'react';
import { Grid, Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import workoutImage from '../workout.png';  // Example image path

const LandingPage = () => {
  return (
    <Container>
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ mt: 8 }}>
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Log Workouts
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
            Get Stronger
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Stay Motivated
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
            FitFusion is your free web based workout tracker. Build routines, track progress, and stay connected with friends.
          </Typography>
          <Button variant="contained" color="primary" size="large" component={Link} to="/signup">
            Sign Up
          </Button>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          {/* <Box component="img" src={workoutImage} alt="Workout App" sx={{ maxWidth: '100%' }} /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
