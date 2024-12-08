import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const  DashBoardLanding = () => {
  return (
    <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: '1px solid #ddd' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default DashBoardLanding;