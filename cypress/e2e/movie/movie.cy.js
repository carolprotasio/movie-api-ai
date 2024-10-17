describe('/ movie - functionality', () => {

  beforeEach(function () {
    cy.fixture('movies').then(function (movies) {
      this.movies = movies
    })
    cy.fixture('users').then(function (users) {
      this.users = users
    })
    cy.dropCollection('movies', { database: 'test', failSilently: 'true', timeout: 10000 }).then(result => {
      console.log(result);
    });
    cy.dropCollection('users', { database: 'test', failSilently: 'true', timeout: 10000 }).then(result => {
      console.log(result);
    });

  });
  it('CT-001 - /should succesfully create a movie', function () {
    const user = this.users.create
    const movie = this.movies.create_movie

    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)
        expect(response.body.message).to.eq('User registered successfully')

        cy.postLogin(user)
          .then(response => {
            expect(response.status).to.eql(200)
            const token = response.body.token

            cy.postMovie(token, movie)
              .then(response => {
                expect(response.status).to.eql(201)
                expect(response.body.title).to.eql(movie.title)
                expect(response.body.director).to.eql(movie.director)
                expect(response.body.year).to.eql(movie.year)
                expect(response.body.genre).to.eql(movie.genre)
                expect(response.body.description).to.eql(movie.description)
              })

          })
      })

  })

  context('required fields', function() {
    it('CT-002 - title is required', function () {
      const user = this.users.create
      const movie = this.movies.title_required
  
      cy.createUser(user)
        .then(response => {
          expect(response.status).to.eql(201)
          expect(response.body.message).to.eq('User registered successfully')
  
          cy.postLogin(user)
            .then(response => {
              expect(response.status).to.eql(200)
              const token = response.body.token
  
              cy.postMovie(token, movie)
                .then(response => {
                  expect(response.status).to.eq(400)
                  expect(response.body.message).to.eq('title is required')                
                })  
            })
        })  
    })
    it('CT-003 - director is required', function () {
      const user = this.users.create
      const movie = this.movies.director_required
  
      cy.createUser(user)
        .then(response => {
          expect(response.status).to.eql(201)
          expect(response.body.message).to.eq('User registered successfully')
  
          cy.postLogin(user)
            .then(response => {
              expect(response.status).to.eql(200)
              const token = response.body.token
  
              cy.postMovie(token, movie)
                .then(response => {
                  expect(response.status).to.eq(400)
                  expect(response.body.message).to.eq('director is required')                
                })  
            })
        })  
    })
    it('CT-004 - year is required', function () {
      const user = this.users.create
      const movie = this.movies.year_required
  
      cy.createUser(user)
        .then(response => {
          expect(response.status).to.eql(201)
          expect(response.body.message).to.eq('User registered successfully')
  
          cy.postLogin(user)
            .then(response => {
              expect(response.status).to.eql(200)
              const token = response.body.token
  
              cy.postMovie(token, movie)
                .then(response => {
                  expect(response.status).to.eq(400)
                  expect(response.body.message).to.eq('year is required')                
                })  
            })
        })  
    })
    it('CT-005 - genre is required', function () {
      const user = this.users.create
      const movie = this.movies.genre_required
  
      cy.createUser(user)
        .then(response => {
          expect(response.status).to.eql(201)
          expect(response.body.message).to.eq('User registered successfully')
  
          cy.postLogin(user)
            .then(response => {
              expect(response.status).to.eql(200)
              const token = response.body.token
  
              cy.postMovie(token, movie)
                .then(response => {
                  expect(response.status).to.eq(400)
                  expect(response.body.message).to.eq('genre is required')                
                })  
            })
        })  
    })
    it('CT-006 - description is required', function () {
      const user = this.users.create
      const movie = this.movies.description_required
  
      cy.createUser(user)
        .then(response => {
          expect(response.status).to.eql(201)
          expect(response.body.message).to.eq('User registered successfully')
  
          cy.postLogin(user)
            .then(response => {
              expect(response.status).to.eql(200)
              const token = response.body.token
  
              cy.postMovie(token, movie)
                .then(response => {
                  expect(response.status).to.eq(400)
                  expect(response.body.message).to.eq('description is required')                
                })  
            })
        })  
    })
    it('CT-007 - empty fields', function () {
      const user = this.users.create
      const movie = this.movies.empty_field
  
      cy.createUser(user)
        .then(response => {
          expect(response.status).to.eql(201)
          expect(response.body.message).to.eq('User registered successfully')
  
          cy.postLogin(user)
            .then(response => {
              expect(response.status).to.eql(200)
              const token = response.body.token
  
              cy.postMovie(token, movie)
                .then(response => {
                  expect(response.status).to.eq(400)
                  expect(response.body.message).to.eq('All fields are required')                
                })  
            })
        })  
    })



  })
})