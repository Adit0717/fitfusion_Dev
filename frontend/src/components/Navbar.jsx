import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
  };

  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ddd' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', marginLeft: '20px', fontSize: 30 }}>
            FitFusion
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: '2rem' }}>
          <Button color="inherit" component={Link} to="/home" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/home')}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/articles" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/articles')}>
            Articles
          </Button>
          <Button color="inherit" component={Link} to="/about-us" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/about-us')}>
            About Us
          </Button>
        </Box>

        {/* Authentication Buttons */}
        <Box>
          <Button color="inherit" component={Link} to="/login" sx={{ marginRight: '1rem', textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}}>
            Log In
          </Button>
          <Button variant="contained" color="primary" component={Link} to="/signup" sx={{textTransform: 'none'}}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
