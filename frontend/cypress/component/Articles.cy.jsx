import React from 'react';
import  Articles from '../../src/pages/Articles' // Adjust path as necessary
import { BrowserRouter } from 'react-router-dom';

describe('Articles Component', () => {
    beforeEach(() => {
      // Visit the page where the Articles component is rendered
      cy.mount(
        <BrowserRouter>
        < Articles/>
      </BrowserRouter>
       )
    });
  
    it('should render the title section correctly', () => {
      cy.get('h1').contains('Your Personal Library').should('be.visible');
      cy.get('p').contains('We write about a wide variety of fitness-related content').should('be.visible');
    });
  
    it('should render the list of articles', () => {
      cy.get('.MuiCard-root').should('have.length', 3);  // Ensure 3 articles are displayed
    });
  
    it('should render article titles and descriptions', () => {
      cy.get('.MuiCard-root').first().within(() => {
        cy.get('h2').contains('5 Best Workouts for Building Muscle').should('be.visible');
        cy.get('p').contains('Discover the top 5 workouts to help you build muscle quickly and effectively.').should('be.visible');
      });
  
      cy.get('.MuiCard-root').eq(1).within(() => {
        cy.get('h2').contains('10 Tips for Staying Motivated to Exercise').should('be.visible');
        cy.get('p').contains('Stay on track with these 10 tips that will help you remain motivated during your fitness journey.').should('be.visible');
      });
  
      cy.get('.MuiCard-root').last().within(() => {
        cy.get('h2').contains('Yoga for Beginners: A Complete Guide').should('be.visible');
        cy.get('p').contains('Everything you need to know to start yoga as a beginner.').should('be.visible');
      });
    });

  
    it('should display articles in a grid layout', () => {
      cy.get('.MuiGrid-root').should('exist'); // Check that the grid is rendered
      cy.get('.MuiGrid-item').should('have.length', 3);  // 3 articles, so 3 grid items
    });
  });
  