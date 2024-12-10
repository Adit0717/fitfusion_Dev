import React from 'react';
import Mealprepideas from '../../src/pages/SearchMealByCalories'; // Adjust path as necessary
import { BrowserRouter } from 'react-router-dom';




describe('MealPrepIdeas Page', () => {
    // Test 1: Visit the MealPrepIdeas page and check if it load
  
  
    // Test 3: Check if the page shows an error message if no meals are found
    it('should show an error message when no meals are found', () => {
      cy.intercept('GET', '/mealByType', {
        statusCode: 500,
        body: { message: 'Meal Not found in particular Requirements' }, // Simulate a failed API response
      }).as('getMealsFail');
  
      cy.mount(<Mealprepideas/>);
      cy.wait('@getMealsFail');
      cy.get('h6').should('contain', 'Meal Not found in particular Requirements');
    });
  
    // Test 4: Check if meals are displayed correctly when data is available
    it('should display meals correctly when data is available', () => {
      cy.intercept('GET', '/mealByType', {
        statusCode: 200,
        body: {
          'Meal Details': [
            {
              mealName: 'Grilled Chicken',
              mealType: 'Protein',
              calories: 300,
              protein: 25,
              carbohydrates: 5,
              fats: 10,
            },
            {
              mealName: 'Veg Salad',
              mealType: 'Vegan',
              calories: 150,
              protein: 5,
              carbohydrates: 20,
              fats: 7,
            },
          ],
        },
      }).as('getMeals');
  
      cy.mount(<Mealprepideas/>);
      cy.wait('@getMeals');
  
      cy.get('h5').should('contain', 'Grilled Chicken');
      cy.get('h5').should('contain', 'Veg Salad');
      cy.get('p').should('contain', 'Calories: 300 kcal');
      cy.get('p').should('contain', 'Calories: 150 kcal');
    });
  
    // Test 7: Check if the error message is displayed when API returns empty data
    it('should show error message if API returns empty data', () => {
      cy.intercept('GET', '/mealByType', {
        statusCode: 200,
        body: { 'Meal Details': [] }, // No meals available
      }).as('getEmptyMeals');
  
      cy.mount(<Mealprepideas/>);
      cy.wait('@getEmptyMeals');
  
      cy.get('h6').should('contain', 'No meals found for the specified criteria');
    });
  });
  