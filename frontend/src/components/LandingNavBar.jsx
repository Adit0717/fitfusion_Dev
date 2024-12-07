import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      elevation={1}
      sx={{
        borderBottom: '1px solid #ddd',
        backgroundColor: '#ffffff',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          sx={{
            textDecoration: 'none',
            color: '#1976d2',
            fontWeight: 'bold',
            fontSize: 30,
          }}
        >
          FitFusion
        </Typography>

        {/* Navigation Links */}
        <Box sx1={{ display: 'flex', gap: '1.5rem' }}>
          {[
            { label: 'MealPlanningTips', to: '/MealPlanningTips' },
            { label: 'Exercises', to: '/Exercises' },
            { label: 'FreeRecipeCollection', to: '/FreeRecipeCollection' },
            { label: 'MealPrepIdeas', to: '/MealPrepIdeas' }, 
          ].map((link) => (
            <Button
              key={link.to}
              component={Link}
              to={link.to}
              onClick={() => handleLinkClick(link.to)}
              sx={{
                fontWeight: activeLink === link.to ? 'bold' : 500,
                textTransform: 'none',
                color: activeLink === link.to ? '#1976d2' : '#555',
                borderBottom: activeLink === link.to ? '2px solid #1976d2' : 'none',
                transition: 'color 0.3s, border-bottom 0.3s',
                '&:hover': {
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;