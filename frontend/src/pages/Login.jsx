import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Sending email and password as JSON
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      console.log(response);

      if (response.data === 'Login Successful') {
        // Redirect to another page (e.g., dashboard)
        navigate('/DashBoardLanding'); // Adjust the path as needed
      } else if (response.data === 'User not found') {
        setError('User not found');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      // Display error to the user
      console.error(error);
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center" justifyContent="center" sx={{ height: '100vh' }}>
        {/* Left section - Login Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Log In
            </Typography>

            {/* Email Login */}
            <Box component="form" noValidate onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, py: 1.5, textTransform: 'none' }}
                type="submit"
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Right section - Image */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <Box
            component="img"
            src="/assets/login_Side2.jpeg"
            alt="Workout App"
            sx={{ width: '100%', height: '600px', maxWidth: '500px' }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
