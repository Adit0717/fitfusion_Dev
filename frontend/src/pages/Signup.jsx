import React from 'react';
import { Box, Button, Container, Divider, Grid, TextField, Typography, Paper } from '@mui/material';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';
import workoutImage from '../workout.png';  // Example image

const Signup = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
        
        {/* Left section - Signup Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>

            {/* Social Signup */}
            {/* <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ mb: 2, textTransform: 'none' }}
            >
              Sign up with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AppleIcon />}
              sx={{ mb: 3, textTransform: 'none' }}
            >
              Sign up with Apple
            </Button>

            <Divider sx={{ mb: 3 }}>Or with email</Divider> */}

            {/* Email Signup */}
            <Box component="form" noValidate>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                required
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, py: 1.5, textTransform: 'none' }}
              >
                Sign Up
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Right section - Image */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box component="img" src={workoutImage} alt="Workout App" sx={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Signup;
