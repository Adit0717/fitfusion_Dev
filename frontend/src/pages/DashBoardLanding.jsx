import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const  DashBoardLanding = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ddd' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/home" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', marginLeft: '20px', fontSize: 30 }}>
            FitFusion
          </Link>
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: '2rem' }}>
          <Button color="inherit" component={Link} to="/MealPlanningTips" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/MealPlanningTips')}>
          MealPlanningTips
          </Button>
          <Button color="inherit" component={Link} to="/MealPrepIdeas" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/MealPrepIdeas')}>
          MealPrepIdeas
          </Button>
          <Button color="inherit" component={Link} to="/Exercises" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/Exercises')}>
          Exercises
          </Button>
          <Button color="inherit" component={Link} to="/TrainerList" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/TrainerList')}>
          Trainers
          </Button>
          <Button color="inherit" component={Link} to="/FreeRecipeCollection" sx={{ fontWeight: 500, textTransform: 'none', '&:hover': {backgroundColor: '#1976d2', color: '#fff',},}} onClick={() => handleLinkClick('/FreeRecipeCollection')}>
          FreeRecipeCollection
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashBoardLanding;