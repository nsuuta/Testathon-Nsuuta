describe('checkout flow', () => {   

 it('Checkout Items @bstack:tcid=170', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()

    cy.successfullogin()

    cy.validcheckout()

    
  })

  //check validation on shipping form
   it('Enter Invalid Shipping Adress Details @bstack:tcid=171', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()

    cy.successfullogin()

    cy.invalidcheckout()

    

})

 it('Check Download Receipt @bstack:tcid=172', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()

    cy.successfullogin()

    cy.validcheckout()

    // Select the element with ID "downloadpdf" and click it
    cy.get('#downloadpdf').click();


})

it('Go back to Shopping @bstack:tcid=173', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()

    cy.successfullogin()

    cy.validcheckout()

    // Click the checkout continue button
    // wait for overlay gone
  cy.get('.loading-overlay', { timeout: 10000 }).should('not.exist');

  cy.get('#checkout-shipping-continue', { timeout: 10000 })
  cy.get('.button').click()


})


})