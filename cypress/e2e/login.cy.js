 describe('login flow', () => {   

  it('Should open testahon live login page @bstack:tcid=149', () => {
    cy.visit('https://testathon.live')
    cy.title().should("include", "StackDemo");
  })

  it('Logs in with valid credentials @bstack:tcid=145', () => {
    cy.visit("https://testathon.live/signin"); // baseUrl set in cypress.config.js
    cy.wait(2000)
    cy.successfullogin()
    // assert login success
    cy.contains('demouser').should('be.visible');
  });

   it('Shows error on empty password @bstack:tcid=146', () => {
    cy.visit('https://testathon.live/signin'); 

    cy.emptypassword(); 

    // assert error message
    cy.contains('Invalid Password').should('be.visible');
  });

   it('Login with invalid username @bstack:tcid=147', () => {
    cy.visit('https://testathon.live/signin'); 

    cy.invalidusername(); 

    // assert error message
    cy.contains('Invalid Username').should('be.visible');
  });

   it('Logout successfully @bstack:tcid=148', () => {
    cy.visit('https://testathon.live/signin'); 

    cy.successfullogin();

    cy.wait(2000)

    cy.get('#logout').click();

    cy.contains('BrowserStack').should('be.visible');

   
  });

  it('Locked user @bstack:tcid=177', () => {
    cy.visit('https://testathon.live/signin'); 

    cy.lockeduser();

    cy.wait(2000)

     cy.contains('Your account has been locked.').should('be.visible')

   
  });



  
  
});
  

