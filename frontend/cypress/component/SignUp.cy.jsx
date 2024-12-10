import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SignUp from '../../src/pages/Signup';

    // Test 1: Redirect to Login Page
describe('Redirect to Login Page', () => {
      it('should navigate to the login page when "Log in" is clicked', () => {
        cy.mount(
            <BrowserRouter>
            <SignUp />
          </BrowserRouter>
           )
        cy.get('a').contains('Log in').click();
        cy.url().should('include', '/login');
      });
    });
  