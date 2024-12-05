import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography, Paper, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Clear previous errors
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      // Assuming the response contains a token or user data
      if (response.data ==='Login Successful') {
        localStorage.setItem('authToken', response.data.token);
        navigate('/DashBoardLanding'); // Redirect to dashboard or any other page
      }
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1c1e4f, #26286f)',
      }}
    >
      <Grid container sx={{ height: '100%', width: '100%' }}>
        {/* Left Section - Testimonial and Background Image */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            backgroundImage: `url('https://images.pexels.com/photos/375737/pexels-photo-375737.jpeg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: { xs: 3, md: 5 },
          }}
        >
          <Box
            sx={{
              maxWidth: 400,
              textAlign: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              Neha Shrimali
            </Typography>
            <Typography variant="subtitle2" sx={{ fontStyle: 'italic', mb: 2 }}>
              Creative Lead, Amazon Pay
            </Typography>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: 2,
                borderRadius: 2,
              }}
            >
              <Typography variant="body1">
                "FitFusion made tracking workouts so simple. It has motivated me to stick to my fitness goals and log
                every step of the journey!"
              </Typography>
            </Paper>
          </Box>
        </Grid>

        {/* Right Section - Login Form */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 4,
            backgroundColor: '#ffffff',
          }}
        >
          <Box sx={{ maxWidth: 400, width: '100%' }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                textAlign: 'center',
                color: '#1c1e4f',
              }}
            >
              Welcome back!
            </Typography>
            <Typography
              variant="body2"
              sx={{ textAlign: 'center', mb: 4, color: '#6c757d' }}
            >
              Sign in to continue your fitness journey.
            </Typography>
            <Divider sx={{ mb: 4 }} />

            <Box component="form" noValidate onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                  },
                }}
              />
              {error && (
                <Typography
                  variant="body2"
                  sx={{
                    color: 'red',
                    textAlign: 'center',
                    mt: 1,
                  }}
                >
                  {error}
                </Typography>
              )}
              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 4,
                  py: 1.5,
                  fontWeight: 700,
                  fontSize: '1rem',
                  backgroundColor: '#4e5ed2',
                  '&:hover': {
                    backgroundColor: '#404cb0',
                  },
                  textTransform: 'none',
                  borderRadius: 2,
                }}
                type="submit"
              >
                Sign in
              </Button>
            </Box>

            <Typography
              variant="body2"
              sx={{ mt: 4, textAlign: 'center', color: '#6c757d' }}
            >
              Don’t have an account?{' '}
              <Typography
                component={Link}
                to="/signup"
                sx={{
                  color: '#4e5ed2',
                  fontWeight: 700,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                Sign up
              </Typography>
            </Typography>

            <Typography
              variant="body2"
              sx={{ mt: 2, textAlign: 'center', color: '#6c757d', fontSize: '0.8rem' }}
            >
              By signing in, you agree to our{' '}
              <Typography
                component="span"
                sx={{
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  color: '#4e5ed2',
                }}
              >
                Terms & Privacy Policy
              </Typography>
              .
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
