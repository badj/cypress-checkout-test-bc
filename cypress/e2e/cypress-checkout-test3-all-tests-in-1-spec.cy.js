const selector= require("../support/selectors.js")
const data = require("../fixtures/testdata.json")

describe('E-commerce store - Add to cart journey - Checkout cart contains correct added items as selected and completes checkout',
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
  it.skip('NOT IMPLEMENTED - DEMO FOR TEST SKIP! Log into E-commerce store to verify valid login credentials to be used for the cart journey test',  () => {
    // *************************************************************************
    // Login to E-commerce store
    // *************************************************************************
    cy.logintoEcommerceSite(data.email,data.password)
  })

  it('E-commerce store - Checkout Journey - Search for item - View then add the product and a related product item to the cart - Confirm cart items added correctly with the checkout journey', () => {
    // *************************************************************************
    // Enter item search keyword in the search bar
    // *************************************************************************
    cy.searchandselect(selector.searchbar,data.searchitem, data.selectitem)
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
