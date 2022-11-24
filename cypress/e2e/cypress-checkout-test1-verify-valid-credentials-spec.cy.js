const selector= require("../support/selectors.js")
const data = require("../fixtures/testdata.json")

describe('E-commerce store Login - Verify valid login credentials to be used for all tests',
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
  it.skip('NOT IMPLEMENTED - DEMO FOR TEST SKIP! Log into the E-commerce store to verify valid login credentials to be used for the cart journey test spec',  () => {
    // *************************************************************************
    // Login to Automation Practice App
    // *************************************************************************
    cy.logintoEcommerceSite(data.email,data.password)
  })
})
