import React from 'react';
import { Box, Button, Container, Divider, Grid, TextField, Typography, Paper } from '@mui/material';

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
        
        {/* Left section - Login Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Log In
            </Typography>
            
            {/* Social Logins */}
            {/* <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ mb: 2, textTransform: 'none' }}
            >
              Login with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<AppleIcon />}
              sx={{ mb: 3, textTransform: 'none' }}
            >
              Login with Apple
            </Button> */}

            {/* <Divider sx={{ mb: 3 }}>Or with email</Divider> */}

            {/* Email Login */}
            <Box component="form" noValidate>
              <TextField
                fullWidth
                label="Email or username"
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
                Login
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Right section - Image */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box component="img" src="/assets/login_Side2.jpeg" alt="Workout App" sx={{ width: '100%', height: '600px', maxWidth: '500px' }} />
        </Grid>
      </Grid>
    </Container>
  );
};


export default Login;
