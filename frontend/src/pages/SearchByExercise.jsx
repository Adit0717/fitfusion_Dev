import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress, TextField, Button } from '@mui/material';
import axios from 'axios';

const CategoryExercises = () => {
  const [exercises, setExercises] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const fetchExercises = async (category = '') => {
    setLoading(true);
    setError('');

    try {
      const url = category
        ? `http://localhost:8080/exercise?exercise=${category}`
        : 'http://localhost:8080/categoryExercises'; // Adjust URL based on category

      const response = await axios.get(url);

      // Update how exercises are set based on the structure of the response
      const exercisesData = response.data['Exercises:']; // Get exercises data

      if (Array.isArray(exercisesData)) {
        setExercises(exercisesData); // If multiple exercises are returned, set them
      } else if (exercisesData) {
        setExercises([exercisesData]); // If only one exercise is returned, wrap it in an array
      } else {
        setExercises([]); // If no exercises are found
      }
      
      setLoading(false);
    } catch (err) {
      setError('No exercises found');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleSearch = () => {
    fetchExercises(searchQuery);
  };

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
        Exercises
      </Typography>

      <Box sx={{ display: 'flex', mb: 4 }}>
        <TextField
          label="Search Exercise"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ marginRight: '8px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          sx={{ padding: '12px 24px', fontWeight: '600' }}
        >
          Search
        </Button>
      </Box>

      {exercises.length === 0 ? (
        <Typography variant="h6" sx={{ color: 'gray' }}>
          No exercises found for "{searchQuery}".
        </Typography>
      ) : (
        exercises.map((exercise) => (
          <Box
            mb={4}
            sx={{
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            }}
            key={exercise.id}
          >
            <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
              {exercise.exerciseName} ({exercise.category})
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, mb: 2, color: '#555' }}>
              This exercise has the following duration:
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
              <strong>Duration:</strong> {exercise.duration} minutes
            </Typography>

            <Divider sx={{ my: 3 }} />
          </Box>
        ))
      )}
    </Box>
  );
};

export default CategoryExercises;