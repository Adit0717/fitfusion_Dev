import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Paper } from '@mui/material';
import workoutImage from '../workout.png'; // Example image
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle sign-up button click
  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/addUsers', {
        firstName,
        lastName,
        email,
        password,
      });

      console.log(response.data);
      // Check if response matches the expected success message
      if (response.data['User added '] === 'Successfully') {
        // Redirect to dashboard upon successful signup
        navigate('/DashBoardLanding');
      } else {
        setError(response);
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
        {/* Left section - Signup Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: '2rem' }}>
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>

            {/* Sign Up Form */}
            <Box component="form" noValidate onSubmit={handleSignup}>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
              {error && <Typography color="error">{error}</Typography>}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, py: 1.5, textTransform: 'none' }}
                type="submit"
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
