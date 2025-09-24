describe('like products flow', () => {   

 it('Like a product @bstack:tcid=174', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()

    //login as a fav user
    cy.favuserlogin()

    //like the first product
    cy.get('#\\31 0 > .shelf-stopper > .MuiButtonBase-root').click();

    //click on the favorites button to go to the page
    cy.get('#favourites > strong').click()

    //validate the liked product
    cy.get('.shelf-item__title').should('contain.text', 'Galaxy S20');

    
  })

 it('Unlike a product @bstack:tcid=175', () => {
  cy.visit('https://testathon.live')

  // Login
  cy.get('[id="Sign In"]').click()
  cy.wait(2000)
  cy.favuserlogin()

  // Go to favorites page
  cy.get('#favourites > strong').click()

    cy.get('#\\33  > .shelf-stopper > .MuiButtonBase-root').click()

    cy.wait(2000)

  // Unlike last product only
    cy.get('#\\32  > .shelf-stopper > .MuiButtonBase-root').click()

    cy.wait(2000)

    // Unlike second last product only
    cy.get('#\\31  > .shelf-stopper > .MuiButtonBase-root').click()

    cy.wait(2000)

})

it('Like multiple products @bstack:tcid=176', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()

    //login as a fav user
    cy.favuserlogin()

    //like the first product
    cy.get('#\\31 0 > .shelf-stopper > .MuiButtonBase-root').click();

    //like second product
    cy.get('#\\31 5 > .shelf-stopper > .MuiButtonBase-root').click()

    //like third product
    cy.get('#\\31 2 > .shelf-stopper > .MuiButtonBase-root').click()

    //click on the favorites button to go to the page
    cy.get('#favourites > strong').click()

    //validate the liked product
    cy.get('.shelf-item__title').should('contain.text', 'iPhone 12');
    
  })

   
})