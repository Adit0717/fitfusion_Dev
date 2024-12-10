import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DashBoardLanding from '../../src/pages/DashBoardLanding';



describe('LoggedInLandingPage', () => {
    beforeEach(() => {
      // Visit the landing page
      cy.mount(
        <BrowserRouter>
        <DashBoardLanding />
      </BrowserRouter>
      )
    });
  
    it('should render the correct quotes and authors in the recent activity section', () => {
      cy.get('.MuiCard-root').eq(0).within(() => {
        cy.get('h6').contains('“Success is no accident. It is hard work, perseverance, learning, and sacrifice”').should('be.visible');
        cy.get('p').contains('- Pelé').should('be.visible');
      });
  
      cy.get('.MuiCard-root').eq(1).within(() => {
        cy.get('h6').contains('“The difference between the impossible and the possible lies in a person’s determination”').should('be.visible');
        cy.get('p').contains('- Tommy Lasorda').should('be.visible');
      });
  
      cy.get('.MuiCard-root').eq(2).within(() => {
        cy.get('h6').contains('“Strength does not come from physical capacity. It comes from an indomitable will”').should('be.visible');
        cy.get('p').contains('- Mahatma Gandhi').should('be.visible');
      });
    });
  
    it('should render the motivational section with the correct quote', () => {
      cy.get('h2').contains('“Push yourself, because no one else is going to do it for you.”').should('be.visible');
      cy.get('p').contains('Keep striving for greatness. Track your progress and stay consistent!').should('be.visible');
    });
  
  });
  