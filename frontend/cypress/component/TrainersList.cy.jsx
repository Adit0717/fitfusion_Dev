import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Trainers from '../../src/pages/TrainersList';



describe('TrainerList Component', () => {
    beforeEach(() => {
      // Intercepting the API request to mock different scenarios
      cy.intercept('GET', '/getTrainerDetails', {
        statusCode: 200,
        body: {
          'TrainerDetails:': [
            {
              id: 1,
              FirstName: 'John',
              LastName: 'Doe',
              Qualifications: 'MSc in Fitness',
              Bio: 'A passionate fitness trainer',
              Availability: 'Mon-Fri, 9AM - 5PM',
              Email: 'john.doe@example.com'
            },
            {
              id: 2,
              FirstName: 'Jane',
              LastName: 'Smith',
              Qualifications: 'Certified Personal Trainer',
              Bio: 'Expert in weight loss and bodybuilding',
              Availability: 'Mon-Wed, 10AM - 4PM',
              Email: 'jane.smith@example.com'
            }
          ]
        }
      }).as('getTrainerDetails');
    });
  
    it('should render loading spinner initially', () => {
      // Intercepting the API request to simulate a delay
      cy.intercept('GET', '/getTrainerDetails', {
        delayMs: 1000,
        statusCode: 200,
        body: {}
      });
  
      cy.mount( <BrowserRouter>
        <Trainers />
      </BrowserRouter>); // Visit the route that renders the TrainerList component
      cy.get('.MuiCircularProgress-root').should('be.visible'); // Ensure the loading spinner is shown
    });
  
  });
  