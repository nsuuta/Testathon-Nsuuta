// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//import 'cypress-file-upload';
//import './commands'; 

Cypress.Commands.add("successfullogin", (username, password) => {
//user name dropdown
cy.get('#username').click();
cy.contains('.css-11unzgr', 'demouser').click();

// Password dropdown
cy.get('#password').click();
cy.contains('.css-11unzgr', 'testingisfun99').click();

// Login button
cy.get('#login-btn').click();
 
});

Cypress.Commands.add("unsuccessfullogin", () => {
  cy.get('#username').click();
  cy.contains('.css-11unzgr', 'demouser').click();

  //dont select password
  
  //click on the login button
  cy.get('#login-btn').click();

});










 /*Cypress.Commands.add('successfullogin', (email, password) => { 
  cy.get('#user_login').type('nsutjay@gmail.com')
  cy.get('#user_password').type('Tynsuti.15n@@')
  //cy.wait(50000)
  cy.get('.comn-flex-box > .btnRed').click()
  cy.url({ timeout: 10000 }).should('include', '/dashboard')*/
  
 
