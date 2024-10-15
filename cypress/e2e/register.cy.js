describe('/register - functionallity', () => {

  beforeEach(function () {
    cy.fixture('users').then(function (users) {
      this.users = users
    })
    cy.dropCollection('users', { database: 'test', failSilently: 'true', timeout: 10000 }).then(result => {
      console.log(result);
    });

  });
  it('POST - create new user', function () {
    const user = this.users.create
    cy.createUser(user)
      .then(response => {
        cy.log(response.status)
        expect(response.status).to.eql(201)
        expect(response.body.message).to.eq('User registered successfully')

        const userId = response.body.userId        
        this.userId = userId;
      })

  })


})



