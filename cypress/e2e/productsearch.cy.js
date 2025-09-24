describe('ProductSearch', () => {   

 it('Browse Products and click on different vendors @bstack:tcid=167', () => {
    cy.visit('https://testathon.live')
    cy.title().should("include", "StackDemo");

    //browse by vendor - Apple
    cy.get(':nth-child(2) > label > .checkmark').click()

    //deselect vendor to see all products
    cy.get(':nth-child(2) > label > .checkmark').click()

    cy.wait(2000)

    //browse by vendor - Samsung
    cy.get(':nth-child(3) > label > .checkmark').click()

    //deselect vendor to see all products
    cy.get(':nth-child(3) > label > .checkmark').click()

    cy.wait(2000)
    //browser by vendor - Google
    cy.get(':nth-child(4) > label > .checkmark').click()

    //deselect vendor to see all products
    cy.get(':nth-child(4) > label > .checkmark').click()
    cy.wait(2000)
    
    //browse by vendor - OnePlus
    cy.get(':nth-child(5) > label > .checkmark').click()

    //deselect vendor to see all products
    cy.get(':nth-child(5) > label > .checkmark').click()

    cy.wait(2000)

    //browser by different categories
    cy.get(':nth-child(2) > label > .checkmark').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > label > .checkmark').click()
    cy.wait(2000)
    cy.get(':nth-child(4) > label > .checkmark').click()

    
  })

  it('Should add a single item to product cart @bstack:tcid=150', () => {
    cy.visit('https://testathon.live')
    cy.title().should("include", "StackDemo");

    //fiter by vendor
    cy.get(':nth-child(2) > label > .checkmark').click()
    cy.wait(2000)
    //add Iphone 12 to cart
    cy.get('.shelf-item__buy-btn').eq(0).click()
    //click on the close icon
    cy.get('.float-cart__close-btn').click()
    
  })

   it('Should add multiple items to product cart @bstack:tcid=151', () => {
    cy.visit('https://testathon.live')
    cy.title().should("include", "StackDemo");

    //filter by vendor samsung
    cy.get(':nth-child(3) > label > .checkmark').click()

    //add Samsung to cart
    
    cy.get('.shelf-item__buy-btn').eq(0).click()
    cy.wait(2000)
    cy.get('.float-cart__close-btn').click()
    cy.get('.shelf-item__buy-btn').eq(1).click()
    cy.wait(2000)
    cy.get('.float-cart__close-btn').click()
    cy.wait(2000)
    cy.get('.shelf-item__buy-btn').eq(5).click();
    cy.wait(2000) 
    cy.get('.float-cart__close-btn').click()
    cy.wait(2000) 
    cy.get('.shelf-item__buy-btn').eq(6).click();
    
  })

  //Remove from Cart
  it('Remove from Cart @bstack:tcid=168', () => {
    cy.visit('https://testathon.live')

    cy.get('#Sign\\ In').click()

    
    cy.wait(2000)

    cy.successfullogin()
    //select a product category
    cy.get(':nth-child(2) > label > .checkmark').click()

    cy.wait(2000)

    //add item 1 to cart cart
    cy.get('#\\31 > .shelf-item__buy-btn').click();

    cy.wait(2000)

    //add item 2 to cart
    cy.get('#\\32 > .shelf-item__buy-btn').click();

    cy.wait(2000)

    //remove item from cart
    cy.get(':nth-child(1) > .shelf-item__del').click()

  })

 it('Add Item without login @bstack:tcid=169', () => {
    cy.visit('https://testathon.live')
    cy.title().should("include", "StackDemo");

    //fiter by vendor
    cy.get(':nth-child(2) > label > .checkmark').click()
    cy.wait(2000)
    //add Iphone 12 to cart
    cy.get('.shelf-item__buy-btn').eq(0).click()
    //click on the close icon
    cy.get('.buy-btn').click()
    
  })



})