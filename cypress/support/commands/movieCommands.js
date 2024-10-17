Cypress.Commands.add('postMovie', (token, movie) => {
    cy.api({
        url: 'movies/movie',
        method: 'POST',
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: movie
    }).then(response => { return response })
})
Cypress.Commands.add('getMovieById', (movieId, token) => {
    cy.api({
        url: `movies/movie/${movieId}`,
        method: 'GET',
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => { return response })
})
Cypress.Commands.add('getAllMovies', (token) => {
    cy.api({
        url: 'movies/movie',
        method: 'GET',
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => { return response })
})
Cypress.Commands.add('putMovieById', (movieId, token) => {
    cy.api({
        url: `movies/movie/${movieId}`,
        method: 'PUT',
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: {description: 'test update movie description'}
    }).then(response => { return response })
})
Cypress.Commands.add('deleteMovieById', (movieId, token) => {
    cy.api({
        url: `movies/movie/${movieId}`,
        method: 'DELETE',
        failOnStatusCode: false,
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => { return response })
})