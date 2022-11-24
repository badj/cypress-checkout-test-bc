// *****************************************************************************
// This example commands.js shows you how to create various custom commands and
// overwrite existing commands.
//
// For more comprehensive examples of custom commands please read more here:
// https://on.cypress.io/custom-commands
// *****************************************************************************

// *****************************************************************************
// Login Command - Logs user in and asserts signed in session
// *****************************************************************************
// Login Command NOT used for this store - was developed for another store that's
// unavailable. Will re-implement when account creation is supported in the free
// Big Cartell e-commerce stores
// *****************************************************************************

Cypress.Commands.add('logintoEcommerceSite', (email, password) => {
  cy.visit('/')
  cy.get('a.login').click()
  cy.get('#email').type(email)
  cy.get('#passwd').type(password)
  cy.get('#SubmitLogin').click()
  cy.wait(300)
  // ***************************************************************************
  // Assertion to verify log in success - logged in state with a page element
  // ***************************************************************************
  cy.get('a.logout').should('be.visible')
  // ***************************************************************************
  // Assertions to verify log in success - logged in state with url
  // ***************************************************************************
  cy.url().should('contain', '/index.php?controller=my-account')
  cy.screenshot()
})

// *****************************************************************************
// Search and select item Command - search for the skw and select a specific
// item and assert correct item selected
// *****************************************************************************


Cypress.Commands.add('searchandselect', (searchbar, searchitem, selectitem) => {
  cy.visit('/')
  cy.screenshot()

  cy.get(searchbar).type(searchitem+"{enter}")
  cy.url().should('contain', '&search=tabby')
  cy.wait(300)
  // ***************************************************************************
  // Two Spotted Tabby Cat Items returned by search
  // ***************************************************************************
  cy.contains('Dark Spotted Tabby Cat')
  cy.contains('Light Spotted Tabby Cat')
  cy.screenshot()
  // ***************************************************************************
  // View the Dark Spotted Tabby Cat Item / Product
  // ***************************************************************************
  cy.contains('Dark Spotted Tabby Cat').click()
  cy.wait(300)
  cy.url().should('contain', '/product/tabby-cat')
  cy.contains('Model Name: Bali')
  cy.contains('Dark Spotted Tabby Cat')
  cy.get('div.page-subheading-price').contains('200.00')
  cy.screenshot()
 })

// *****************************************************************************
// Add to Cart Command - adds 2 of the item with specific colour and age then
// proceeds to the checkout cart
// *****************************************************************************

Cypress.Commands.add('addtocartandproceedtocheckout', () => {
  cy.url().should('contain', '/product/')
  // ***************************************************************************
  // Product viewed returning the correct product Dark Spotted Tabby Cat and
  // related product White Spotted Tabby Cat below selected product details
  // ***************************************************************************
  cy.contains('Dark Spotted Tabby Cat')
  cy.contains('Light Spotted Tabby Cat')
  // ***************************************************************************
  // Add Two Dark Spotted Tabby Cat Items to cart with
  // specific colour and age selections
  // ***************************************************************************
  cy.get("#option_group_5952109")
  .first()
  .select(2)
  .invoke("val")
  .should("eq", "31193272")

  cy.get("#option_group_5952112")
  .first()
  .select(3)
  .invoke("val")
  .should("eq", "31193284")

  cy.get('div.product-form-quantity-button')
  .find('input')
  .type("{backspace}")
  .type('2'+"{enter}")

  cy.get('button.button.add-to-cart-button').click()
  cy.get('span.header-cart-count').contains('2')
  cy.get('span.header-cart-total').contains('400')
  cy.screenshot()
  // ***************************************************************************
  // Now view the related Tabby Cat Items and also add this product/item
  // to cart with specific colour and age selections
  // ***************************************************************************
  cy.contains('Light Spotted Tabby Cat').click()
  cy.url().should('contain', '/product/white-tabby-cat')
  cy.contains('Model Name: Indi')
  cy.get('div.page-subheading-price').contains('300.00')
  cy.contains('Dark Spotted Tabby Cat')
  // ***************************************************************************
  // Add Three White Spotted Tabby Cat Items to cart with
  // specific colour and age selections
  // ***************************************************************************
  cy.get("#option_group_5888110")
  .first()
  .select(3)
  .invoke("val")
  .should("eq", "30861526")

  cy.get("#option_group_5888113")
  .first()
  .select(2)
  .invoke("val")
  .should("eq", "30861535")

  cy.get('div.product-form-quantity-button')
  .find('input')
  .type("{backspace}")
  .type('3'+"{enter}")

  cy.get('button.button.add-to-cart-button').click()
  cy.get('span.header-cart-count').contains('5')
  cy.get('span.header-cart-total').contains('1,300.00')
  cy.screenshot()
  // ***************************************************************************
  // View the cart after the White Spotted Tabby Cat Items added to cart
  // ***************************************************************************
  cy.get('a.product-form-cart-link').click()
})

// *****************************************************************************
// Confirm the checkout cart Command: Asserts for 2 of the items with:
// Correct colour, age selection and correct checkout cart Subtotal
// *****************************************************************************

Cypress.Commands.add('confirmcartitemsoncheckout', (selectitem) => {
  // Confirm both added Items added to cart as expected
  cy.url().should('contain', '/cart')
  cy.get('h1.page-title').contains('Cart')
  cy.get('button.checkout-button').contains('Checkout')
  cy.get('div.cart-sub-footer').contains('Continue shopping')
  // ***************************************************************************
  // Cart header count and totals correct
  // ***************************************************************************
  cy.get('span.header-cart-count').contains('5')
  cy.get('span.header-cart-total').contains('1,300.00')
  // ***************************************************************************
  // Dark Spotted Tabby Cat item details correctly added to the cart
  // ***************************************************************************
  cy.get('div.cart-item-details-name').first().contains('Dark Spotted Tabby Cat')
  cy.get('div.cart-item-details-option').first().contains('Colour: Grey / Age: 3YRS')
  cy.get('div.cart-item-details-unit-price-inline').first().contains('200.00')
  cy.get('.cart-item-quantity-holder').first()
  .find('input')
  .invoke("val").should("eq", "2")
  cy.get('div.cart-item-details-price').first().contains('400.00')
  // ***************************************************************************
  // White Spotted Tabby Cat item details correctly added to the cart
  // ***************************************************************************
  cy.get('div.cart-item-details-name').last().contains('Light Spotted Tabby Cat')
  cy.get('div.cart-item-details-option').last().contains('Colour: White / Age: 2YRS')
  cy.get('div.cart-item-details-unit-price-inline').last().contains('300.00')
  cy.get('.cart-item-quantity-holder').last()
  .find('input')
  .invoke("val").should("eq", "3")
  cy.get('div.cart-item-details-price').last().contains('900.00')
  // ***************************************************************************
  // Cart items totals correct for all items added to the cart
  // ***************************************************************************
  cy.get('span.cart-subtotal-amount').contains('1,300.00')
  cy.screenshot()
  // ***************************************************************************
  // Initiate the Checkout to verify that checkout button journey is correct
  // ***************************************************************************
  cy.get('button.checkout-button').click()
  cy.contains('We’re not set up to take payments.')
  cy.contains('Once we’ve configured our shop, checkout will be enabled.')
  cy.screenshot()
})
