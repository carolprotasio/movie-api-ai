describe('POST /register - functionality', () => {

  beforeEach(function () {
    cy.fixture('users').then(function (users) {
      this.users = users
    })
    cy.dropCollection('users', { database: 'test', failSilently: 'true', timeout: 10000 }).then(result => {
      console.log(result);
    });

  });
  it('CT-001 - should create a new user', function () {
    const user = this.users.create
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)
        expect(response.body.message).to.eq('User registered successfully')

        const userId = response.body.userId
        this.userId = userId;
      })

  })
  it('CT-002 - should not create a user with a duplicate email', function () {
    const user = this.users.create
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(201)
      })
    cy.createUser(user)
      .then(response => {
        cy.log(response.status)
        expect(response.status).to.eql(409)
        expect(response.body.erro).to.eql('Email already exists. Please use a different email.')

      })

  })

})
context('required fields', function () {
  let user;

  beforeEach(() => {
    user = {
      name: "Jonny Bravo",
      email: "Jonny@martin.com",
      password: "123456"
    }

  });
  it('CT-003 name is required', function () {
    delete user.name
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(400)
        expect(response.body.message).to.eql('Name is required')
      })
  })
  it('CT-004 email is required', function () {
    delete user.email
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(400)
        expect(response.body.message).to.eql('Email is required')
      })
  })
  it('CT-005 password is required', function () {
    delete user.password
    cy.createUser(user)
      .then(response => {
        expect(response.status).to.eql(400)
        expect(response.body.message).to.eql('Password is required')
      })
  })
})



