import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ddd' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>
            FitFusion
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: '2rem' }}>
          <Button color="inherit" component={Link} to="/home" sx={{ fontWeight: 500 }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/product" sx={{ fontWeight: 500 }}>
            Product
          </Button>
          <Button color="inherit" component={Link} to="/articles" sx={{ fontWeight: 500 }}>
            Articles
          </Button>
          <Button color="inherit" component={Link} to="/about-us" sx={{ fontWeight: 500 }}>
            About Us
          </Button>
        </Box>

        {/* Authentication Buttons */}
        <Box>
          <Button color="inherit" component={Link} to="/login" sx={{ marginRight: '1rem' }}>
            Log In
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/signup">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
