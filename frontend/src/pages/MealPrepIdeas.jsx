import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider, CircularProgress } from '@mui/material';
import axios from 'axios';

const MealPrepIdeas = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch data from the backend
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:8080/mealPlans'); // Replace with your backend endpoint
        setMeals(response.data['Meal Details']); // Access the "Meal Details" array from the response
        console.log(response)
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch meal data. Please try again later.');
        setLoading(false);
      }
    };

    fetchMeals();
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
        Meal Prep Ideas
      </Typography>

      {meals.map((meal) => (
        <Box
          mb={4}
          sx={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '600', fontSize: '1.5rem', color: '#333' }}>
            {meal.mealName} ({meal.mealType})
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1rem', mt: 1, mb: 2, color: '#555' }}>
            This meal contains:
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
            <strong>Calories:</strong> {meal.calories} kcal
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
            <strong>Protein:</strong> {meal.protein} g
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
            <strong>Carbohydrates:</strong> {meal.carbohydrates} g
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '0.95rem', color: '#666', mb: 1 }}>
            <strong>Fats:</strong> {meal.fats} g
          </Typography>

          <Divider sx={{ my: 3 }} />
        </Box>
      ))}
    </Box>
  );
};

export default MealPrepIdeas;
