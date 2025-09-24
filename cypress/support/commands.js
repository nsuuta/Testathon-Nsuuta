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
cy.get('#username .css-yk16xz-control').click();
//cy.get('#username').click();
cy.get('#react-select-2-option-0-0').click()
//cy.contains('.css-11unzgr', 'demouser').click();

// Password dropdown
cy.get('#password').click();
cy.contains('.css-11unzgr', 'testingisfun99').click();

// Login button
cy.get('#login-btn').click();
 
});

Cypress.Commands.add("favuserlogin", (username, password) => {
//user name dropdown
cy.get('#username .css-yk16xz-control').click();
cy.get('#react-select-2-option-0-3').click()

// Password dropdown
cy.get('#password').click();
cy.contains('.css-11unzgr', 'testingisfun99').click();

// Login button
cy.get('#login-btn').click();
 
});

Cypress.Commands.add("existingorderslogin", (username, password) => {
//user name dropdown
cy.get('#username').click();
cy.contains('.css-11unzgr', 'existing_orders').click();

// Password dropdown
cy.get('#password').click();
cy.contains('.css-11unzgr', 'testingisfun99').click();

// Login button
cy.get('#login-btn').click();
 
});


Cypress.Commands.add("lockeduser", (username, password) => {
//user name dropdown
cy.get('#username .css-yk16xz-control').click();

// Select the 5th option in the dropdown (index 4)
cy.get('#react-select-2-option-0-4').click()


// Password dropdown
cy.get('#password').click();
cy.contains('.css-11unzgr', 'testingisfun99').click();

// Login button
cy.get('#login-btn').click();
 
});


Cypress.Commands.add("emptypassword", () => {
  cy.get('#username').click();
  cy.contains('.css-11unzgr', 'demouser').click();

  //dont select password
  
  //click on the login button
  cy.get('#login-btn').click();

});

Cypress.Commands.add("invalidusername", () => {
 //dont select username

  //dont select password
  
  //click on the login button
  cy.get('#login-btn').click();

});

Cypress.Commands.add("validcheckout", () => {
  //click on the add to cart button
    cy.get('#\\31 > .shelf-item__buy-btn').click()

    //click on the checkout button
    cy.get('.buy-btn').click()

    //add your firstname
    cy.get('#firstNameInput').type('Nsuuta')

    cy.wait(2000)
    //add your last name
    cy.get('#lastNameInput').type('Mukama')

    cy.wait(2000)

    //enter address

    cy.get('#addressLine1Input').type('Nairobi')

    cy.wait(2000)
    //enter state or province

    cy.get('#provinceInput').type('Nairobi Area')

    cy.wait(2000)
    //enter postal code

    cy.get('#postCodeInput').type('1001001')

    cy.wait(2000)

    //click submit button
    cy.get('#checkout-shipping-continue').click()

});

Cypress.Commands.add("invalidcheckout", () => {


//click on the add to cart button
    cy.get('#\\31 > .shelf-item__buy-btn').click()

    //click on the checkout button
    cy.get('.buy-btn').click()

      //add your firstname
    cy.get('#firstNameInput').type('N')

    cy.wait(2000)
    //add your last name
    cy.get('#lastNameInput').type('M')

    cy.wait(2000)

    //enter address

    cy.get('#addressLine1Input').type('x')

    cy.wait(2000)
    //enter state or province

    cy.get('#provinceInput').type('.')

    cy.wait(2000)
    //enter postal code

    cy.get('#postCodeInput').type('v')

    cy.wait(2000)

    //click submit button
    cy.get('#checkout-shipping-continue').click()

})




 /*Cypress.Commands.add('successfullogin', (email, password) => { 
  cy.get('#user_login').type('nsutjay@gmail.com')
  cy.get('#user_password').type('Tynsuti.15n@@')
  //cy.wait(50000)
  cy.get('.comn-flex-box > .btnRed').click()
  cy.url({ timeout: 10000 }).should('include', '/dashboard')*/
  
 
