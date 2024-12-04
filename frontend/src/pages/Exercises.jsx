import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress } from '@mui/material';
import axios from 'axios';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data from the backend
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://localhost:8080/exercisedetails'); // Replace with your backend endpoint
        setExercises(response.data['Exercises']); // Access the "Exercises" array from the response
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch exercise data. Please try again later.');
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: '25px', fontFamily: 'Arial, sans-serif' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', fontSize: '1.8rem' }}>
        Exercise List
      </Typography>

      {exercises.map((exercise) => (
        <Box
          key={exercise.id}
          mb={4}
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
            {exercise.exerciseName} ({exercise.category})
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, mb: 2, color: '#555' }}>
            This exercise lasts for:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
            <strong>Duration:</strong> {exercise.duration} minutes
          </Typography>

          <Divider sx={{ my: 3 }} />
        </Box>
      ))}
    </Box>
  );
};

export default ExerciseList;
