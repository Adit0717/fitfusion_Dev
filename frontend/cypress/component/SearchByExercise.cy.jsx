import React from 'react';
import Categoryexercises from '../../src/pages/SearchByExercise'; // Adjust path as necessary



describe('CategoryExercises Page', () => {
    // Test 1: Visit the CategoryExercises page and check if it loads
    
  
    // Test 3: Check if the page shows an error message if no exercises are found
    it('should show an error message when no exercises are found', () => {
      cy.intercept('GET', '/categoryExercises', {
        statusCode: 500,
        body: { message: 'No exercises found' }, // Simulating a failed API response
      }).as('getExercisesFail');
  
      cy.mount(<Categoryexercises/>);
      cy.wait('@getExercisesFail');
      cy.get('h6').should('contain', 'No exercises found');
    });
  
    // Test 4: Check if exercises are displayed correctly when data is available
    it('should display exercises when data is available', () => {
      cy.intercept('GET', '/categoryExercises', {
        statusCode: 200,
        body: {
          'Exercises:': [
            {
              id: 1,
              exerciseName: 'Push Up',
              category: 'Strength',
              duration: 10,
            },
            {
              id: 2,
              exerciseName: 'Squat',
              category: 'Strength',
              duration: 15,
            },
          ],
        },
      }).as('getExercises');
  
      cy.mount(<Categoryexercises/>);
      cy.wait('@getExercises');
  
      cy.get('h5').should('contain', 'Push Up');
      cy.get('h5').should('contain', 'Squat');
      cy.get('p').should('contain', 'Duration: 10 minutes');
      cy.get('p').should('contain', 'Duration: 15 minutes');
    });
  
    // Test 5: Check if the search functionality works

    // Test 6: Check if no exercises are displayed when no results are found for search

  
    // Test 7: Check if the error message is displayed when API returns empty data
    it('should show an error message if API returns empty data', () => {
      cy.intercept('GET', '/categoryExercises', {
        statusCode: 200,
        body: { 'Exercises:': [] }, // No exercises available
      }).as('getEmptyExercises');
  
      cy.mount(<Categoryexercises/>);
      cy.wait('@getEmptyExercises');
  
      cy.get('h6').should('contain', 'No exercises found for ""');
    });
  
    });
  