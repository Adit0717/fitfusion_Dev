import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchMealPrepIdeas from '../../src/pages/SearchMealPrepIdeas';

describe('MealPrepIdeas Component', () => {
    beforeEach(() => {
      // Intercept API calls
      cy.intercept('GET', '/mealByType', {
        statusCode: 200,
        body: {
          'Meal Details': [
            {
              mealName: 'Chicken Salad',
              mealType: 'Lunch',
              calories: 300,
              protein: 25,
              carbohydrates: 20,
              fats: 15,
            },
            {
              mealName: 'Vegetarian Pasta',
              mealType: 'Dinner',
              calories: 400,
              protein: 15,
              carbohydrates: 60,
              fats: 10,
            },
          ],
        },
      }).as('getMeals');
  
      cy.mount(<SearchMealPrepIdeas/>); // Adjust this URL according to your routing setup
    });
  
  
    it('should display meals once data is loaded', () => {
      cy.wait('@getMeals');
      cy.get('h4').should('contain', 'Meal Prep Ideas');
      cy.get('h5').should('contain', 'Chicken Salad');
      cy.get('h5').should('contain', 'Vegetarian Pasta');
    });
  
    it('should display error message if API call fails', () => {
      cy.intercept('GET', '/mealByType', {
        statusCode: 500,
      }).as('getMealsFail');
  
      cy.mount(<SearchMealPrepIdeas/>);
      cy.wait('@getMealsFail');
      cy.get('div').contains('No meal found').should('exist');
    });
  
    it('should allow search by meal type', () => {
      // Intercept with a response based on search query
      cy.intercept('GET', '/mealByType?mealType=Lunch', {
        statusCode: 200,
        body: {
          'Meal Details': [
            {
              mealName: 'Chicken Salad',
              mealType: 'Lunch',
              calories: 300,
              protein: 25,
              carbohydrates: 20,
              fats: 15,
            },
          ],
        },
      }).as('searchLunch');
  
      cy.get('input[type="text"]').type('Lunch');
      cy.get('button').contains('Search').click();
      cy.wait('@searchLunch');
  
      // Ensure only lunch meals are displayed
      cy.get('h5').should('contain', 'Chicken Salad');
      cy.get('h5').should('not.contain', 'Vegetarian Pasta');
    });
  
    it('should show no meals found message when search returns empty', () => {
      cy.intercept('GET', '/mealByType?mealType=NonExistentMeal', {
        statusCode: 200,
        body: {
          'Meal Details': [],
        },
      }).as('searchNoMeals');
  
      cy.get('input[type="text"]').type('NonExistentMeal');
      cy.get('button').contains('Search').click();
      cy.wait('@searchNoMeals');
  
      cy.get('h6').contains('No meals found for "NonExistentMeal".').should('exist');
    });
  
    it('should show meal details correctly', () => {
      cy.wait('@getMeals');
      cy.get('h5').first().contains('Chicken Salad');
      cy.get('p').contains('This meal contains:');
      cy.get('strong').contains('Calories:');
      cy.get('strong').contains('Protein:');
      cy.get('strong').contains('Carbohydrates:');
      cy.get('strong').contains('Fats:');
    });
  
  });
  