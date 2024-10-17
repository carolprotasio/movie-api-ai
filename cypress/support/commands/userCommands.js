
Cypress.Commands.add('createUser', (user) => { 
    cy.api({
        url: 'auth/register',
        method: 'POST', 
        failOnStatusCode: false,
        headers: { 
          'Content-Type': 'application/json'
        },
        body: user
      }).then(response => { return response })
 })
Cypress.Commands.add('postLogin', (user) => { 
    cy.api({
        url: 'auth/login',
        method: 'POST', 
        failOnStatusCode: false,
        headers: { 
          'Content-Type': 'application/json'
        },
        body: { email: user.email, password: user.password }
      }).then(response => { return response })
 })
Cypress.Commands.add('getAllUsers', () => { 
    cy.api({
        url: 'auth/user',
        method: 'GET', 
        failOnStatusCode: false,
        headers: { 
          'Content-Type': 'application/json'
        }
       
      }).then(response => { return response })
 })
Cypress.Commands.add('getUserById', (userId) => { 
    cy.api({
        url: `auth/user/${userId} `,
        method: 'GET', 
        failOnStatusCode: false,
        headers: { 
          'Content-Type': 'application/json'
        }
       
      }).then(response => { return response })
 })
Cypress.Commands.add('putUserById', (userId) => { 
    cy.api({
        url: `auth/user/${userId} `,
        method: 'PUT', 
        failOnStatusCode: false,
        headers: { 
          'Content-Type': 'application/json'
        },
        body: { name: 'user updated name', password: 'user updated password' }
       
      }).then(response => { return response })
 })
 Cypress.Commands.add('deleteUser', (userId) => { 
  cy.api({
      url: `auth/user/${userId} `,
      method: 'DELETE', 
      failOnStatusCode: false,
      headers: { 
        'Content-Type': 'application/json'
      }
     
    }).then(response => { return response })
})
