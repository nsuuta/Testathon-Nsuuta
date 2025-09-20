 describe('login flow', () => {   

  it("should open testahon live login page", () => {
    cy.visit('https://testathon.live')

    cy.title().should("include", "StackDemo");
  })

  it('logs in with valid credentials', () => {
    cy.visit("https://testathon.live/signin"); // baseUrl set in cypress.config.js
    cy.wait(2000)
    cy.successfullogin()
    // assert login success
    cy.contains('existing_orders_user').should('be.visible');
  });

    it('shows error on wrong password', () => {
    cy.visit('https://testathon.live/signin'); 

    cy.unsuccessfullogin(); 

    // assert error message
    cy.contains('Invalid Password').should('be.visible');
  });
  
});

    

