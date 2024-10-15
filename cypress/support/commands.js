
Cypress.Commands.add('createUser', (movie) => { 
    cy.api({
        url: 'http://localhost:5000/api/auth/register',
        method: 'POST', 
        failOnStatusCode: false,
        headers: { 
          'Content-Type': 'application/json'
        },
        body: movie
      })
 })