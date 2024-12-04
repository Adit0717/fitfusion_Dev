import React from 'react';
import { Box, Typography, Grid, Avatar, Button, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      {/* Title Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 2,
            color: 'primary.main',
            background: 'linear-gradient(to right, #1c92d2, #f2fcfe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Our Project
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '700px', margin: '0 auto', color: 'text.secondary' }}>
          **FitFusion** is a group project developed as part of our Web Development course at Purdue University Fort
          Wayne. It combines cutting-edge technology with user-focused design to provide a comprehensive fitness tracking
          platform.
        </Typography>
      </Box>

      {/* About the Project Section */}
      <Box sx={{ py: 6, px: 4, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3, mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}
        >
          About FitFusion
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4, color: 'text.secondary' }}>
          FitFusion is a web-based fitness tracking application designed to help users log workouts, build routines, track
          progress, and connect with a community of like-minded fitness enthusiasts. Built using React, Material-UI, and
          other modern web technologies, FitFusion emphasizes simplicity, accessibility, and user engagement.
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: 'Workout Logging',
              description: 'Intuitively track your exercises, sets, and reps with real-time updates.',
              icon: '🏋️',
            },
            {
              title: 'Routine Building',
              description: 'Create personalized workout plans tailored to your fitness goals.',
              icon: '📋',
            },
            {
              title: 'Community Connection',
              description: 'Engage with other fitness enthusiasts to stay motivated and inspired.',
              icon: '🤝',
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  textAlign: 'center',
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 2 }}>
                  {feature.icon}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Vision Section */}
      <Box sx={{ py: 6, px: 4, backgroundColor: 'grey.100', borderRadius: 2, mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}
        >
          Our Vision
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4, color: 'text.secondary' }}>
          Through FitFusion, our vision is to create an impactful and user-friendly platform that demonstrates our
          technical proficiency while inspiring users to achieve their fitness goals. This project allowed us to integrate
          modern technologies with practical application, enhancing both our skills and knowledge.
        </Typography>
      </Box>

      {/* Our Team Section */}
      <Box sx={{ py: 6, px: 4, backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3, mb: 6 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ fontWeight: 700, mb: 4, color: 'primary.main' }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              name: 'Srivastav',
              role: 'Team Lead & Frontend Developer',
              avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
              bio: 'Coordinated the team and implemented the UI using React and Material-UI.',
            },
            {
              name: 'Member 2',
              role: 'Backend Developer',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              bio: 'Designed and implemented server-side logic and database integration.',
            },
            {
              name: 'Member 3',
              role: 'UI/UX Designer',
              avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
              bio: 'Ensured the user interface is intuitive and visually appealing.',
            },
            {
              name: 'Member 4',
              role: 'Tester & Documentation Specialist',
              avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
              bio: 'Conducted testing and compiled comprehensive project documentation.',
            },
          ].map((teamMember, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Paper
                sx={{
                  textAlign: 'center',
                  p: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Avatar
                  src={teamMember.avatar}
                  sx={{ width: 120, height: 120, margin: '0 auto', mb: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {teamMember.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                  {teamMember.role}
                </Typography>
                <Typography variant="body2">{teamMember.bio}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Join Us Section */}
      <Box sx={{ textAlign: 'center', py: 6, backgroundColor: 'primary.main', color: 'white', borderRadius: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 2 }}>
          Explore FitFusion
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '800px', margin: '0 auto', mb: 4 }}>
          This project demonstrates our dedication to learning and collaboration. Check out the codebase and documentation
          to learn more about how FitFusion was built.
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          href="https://github.com/your-repository-url"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            mr: 2,
            borderColor: 'white',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          View GitHub Repo
        </Button>
        <Button
          variant="contained"
          color="inherit"
          size="large"
          href="/contact"
          sx={{
            backgroundColor: 'white',
            color: 'primary.main',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUs;
