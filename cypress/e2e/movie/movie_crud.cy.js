describe('CRUD / movie - functionallity', () => {

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
  it('CT-001 - POST /should post a movie', function () {
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
  it('CT-002 - GET / get movie by id', function () {
    const user = this.users.create
    const movie = this.movies.get_movie

    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        const userId = response.body.userId
        this.userId = userId

        cy.postLogin(user)
          .then(response => {
            expect(response.status).to.eql(200)

            const token = response.body.token

            cy.postMovie(token, movie)
              .then(response => {
                expect(response.status).to.eql(201)
                const movieId = response.body._id

                cy.getMovieById(movieId, token)
                  .then(response => {
                    expect(response.status).to.eql(200)
                    expect(response.body.title).to.eq(movie.title)
                  })
              })

          })

      })
  })
  it('CT-003 - GET / get all movies', function () {
    const user = this.users.get_user
    const movie = this.movies.get_movie
    const movie2 = this.movies.get_movie2

    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        const userId = response.body.userId
        this.userId = userId

        cy.postLogin(user)
          .then(response => {
            expect(response.status).to.eql(200)

            const token = response.body.token

            cy.postMovie(token, movie2)
            cy.postMovie(token, movie)
              .then(response => {
                expect(response.status).to.eql(201)

                cy.getAllMovies(token)
                  .then(response => {
                    expect(response.status).to.eql(200)

                  })
              })
          })
      })
  })
  it('CT-004 - PUT / update movies description', function () {
    const user = this.users.create
    const movie = this.movies.put_movie

    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        const userId = response.body.userId
        this.userId = userId

        cy.postLogin(user)
          .then(response => {
            expect(response.status).to.eql(200)

            const token = response.body.token
            cy.log(token)

            cy.postMovie(token, movie)
              .then(response => {
                expect(response.status).to.eql(201)
                const movieId = response.body._id

                cy.putMovieById(movieId, token)
                  .then(response => {
                    cy.log(response.body)
                    expect(response.status).to.eql(200)
                    expect(response.body.description).to.eql('test update movie description')

                  })
              })
          })
      })
  })
  it('CT-005 - DELETE / delete user by id', function () {
    const user = this.users.create
    const movie = this.movies.put_movie

    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        const userId = response.body.userId
        this.userId = userId

        cy.postLogin(user)
          .then(response => {
            expect(response.status).to.eql(200)

            const token = response.body.token
            cy.log(token)

            cy.postMovie(token, movie)
              .then(response => {
                expect(response.status).to.eql(201)
                const movieId = response.body._id

                cy.deleteMovieById(movieId, token)
                  .then(response => {
                    cy.log(response.body)
                    expect(response.status).to.eql(200)
                    

                  })
              })
          })
      })
  })


})