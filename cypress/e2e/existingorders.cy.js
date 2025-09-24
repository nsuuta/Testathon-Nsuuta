describe('existing orders flow', () => {   

  it('Check existing orders @bstack:tcid=178', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()
    
    cy.existingorderslogin()

    //click on the existing orders link 
    cy.get('#orders > strong').click()

    cy.wait(2000)

    //check delivery date
   cy.get('span.a-size-medium.a-color-base.a-text-bold')
   .should('contain.text', 'Delivered 2 November, 2020');



    
  })

})