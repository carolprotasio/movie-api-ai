describe('CRUD /user - functionallity', () => {

  beforeEach(function () {
    cy.fixture('users').then(function (users) {
      this.users = users
    })
    cy.dropCollection('users', { database: 'test', failSilently: 'true', timeout: 10000 }).then(result => {
      console.log(result);
    });

  });
  it('CT-001 - POST /should login a register user', function () {
    const user = this.users.login

    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)
        expect(response.body.message).to.eq('User registered successfully')

        cy.postLogin(user)
          .then(response => {
            expect(response.status).to.eql(200)
            expect(response.body.token).not.to.be.empty
          })
      })

  })
  it('CT-002 - GET / get user by id', function () {
    const user = this.users.get_user
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        const userId = response.body.userId
        this.userId = userId
        cy.getUserById(userId)
          .then(response => {
            expect(response.status).to.eql(200)
            expect(response.body.name).to.eql(user.name)
            expect(response.body.email).to.eql(user.email)
          })

      })
  })
  it('CT-003 - GET / get all users', function () {
    const user = this.users.get_user
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        cy.getAllUsers()
          .then(response => {
            expect(response.status).to.eql(200)

          })
      })
  })
  it('CT-004 - PUT / update user by id', function () {
    const user = this.users.put_user
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        const userId = response.body.userId
        this.userId = userId
        cy.putUserById(userId)
          .then(response => {
            expect(response.status).to.eql(200)
            expect(response.body.message).to.eql('User updated successfully')
            expect(response.body.user.email).to.eql(user.email)
          })
      })
  })
  it('CT-004 - DELETE / delete user by id', function () {
    const user = this.users.delete_user
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)

        const userId = response.body.userId
        this.userId = userId
        cy.deleteUser(userId)
          .then(response => {
            expect(response.status).to.eql(200)
            expect(response.body.message).to.eql('User deleted successfully')
          })
      })
  })


})