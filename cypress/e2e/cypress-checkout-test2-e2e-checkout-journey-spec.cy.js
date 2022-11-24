const selector= require("../support/selectors.js")
const data = require("../fixtures/testdata.json")

describe('E-commerce store - Add to cart journey - Checkout cart contains correct added item',
// *************************************************************************
// Retry currently enabled globally - to retry all failing tests
// Disable globally in config and enable test retries support below
// to only retry for this spec or plug in per test
// This will retry a failed test once when it failed
// *************************************************************************
// {
//  retries: {
//    runMode: 1, // Will retry the test once
//    openMode: 0
//  }
//},
() => {
  it('TEST EXPECTED TO FAIL - DEMO FOR FAILED TEST RETRY!', () => {
    // *************************************************************************
    // Enter item search keyword in the search bar
    // *************************************************************************
    cy.searchandselect(selector.searchbar,data.searchitem, data.selectitem)
    // *************************************************************************
    // Added this step to cause a failure for Cypress to retry the failed test
    // *************************************************************************
    cy.url().should('contain', 'failTheTestHereToDemoRetries')
    // *************************************************************************
    // Add item to the cart and proceed to the checkout
    // *************************************************************************
    cy.addtocartandproceedtocheckout()
    // *************************************************************************
    // Confirm the added items on checkout cart
    // *************************************************************************
    cy.confirmcartitemsoncheckout()
  })
})
