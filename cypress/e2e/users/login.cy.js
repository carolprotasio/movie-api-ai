describe('/login - functionality', () => {

  beforeEach(function () {
    cy.fixture('users').then(function (users) {
      this.users = users
    })
    cy.dropCollection('users', { database: 'test', failSilently: 'true', timeout: 10000 }).then(result => {
      console.log(result);
    });

  });
  it('CT-001 - should login successfully', function () {
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
  it('CT-002 - should not login with invalid password', function () {
    const user = this.users.invalid_pass

    cy.postLogin(user)
      .then(response => {
        expect(response.status).to.eql(401)
        expect(response.body.message).to.eq('Invalid email or password')
      })
  })
  it('CT-003 - should not login with invalid email', function () {
    const user = this.users.invalid_pass
  
    cy.postLogin(user)
      .then(response => {
        expect(response.status).to.eql(401)
        expect(response.body.message).to.eq('Invalid email or password')
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



