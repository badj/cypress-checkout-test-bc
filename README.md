# E-commerce Checkout Test showcasing [Cypress.io](https://www.cypress.io/) as a Test Framework

This repo contains Cypress tests for login *(currently unsupported)* and a cart checkout journey with the ["Test Automation e-commerce store"](https://testautomation.bigcartel.com/) to showcase the Cypress Test Framework.

## Project information
### This project contains two Cypress functional journey tests for multiple specs to verify:
1. E-commerce store - Checkout Journey in ["Test Automation e-commerce store"](https://testautomation.bigcartel.com/) with test steps to showcase:  
- Searching for the item in the store.
- Viewing the product from the results returned in the search.
- Choosing *colour* option from a dropdown selection.
- Choosing *age* option from a dropdown selection.
- *Increasing the quantity* of items.
- Proceeding to the *cart*.
- Asserting and verifying items added to cart in the checkout cart for:
  - *correct items*
  - *options selected*
  - *quantities*
  - *cart item prices*
  - *cart totals*.

### Cypress configs and code to showcase:
- The use of *Fixtures* with test data support.
- The use of *Selectors* support.
- *Screen capture* support for all passed commands.
- *MochAwesome reporter* for test run reporting.
- Test run *Video with compression* support.
- *Failed test retry* support.
- *Skipping tests* support.
- *Multiple specs* run.

## Pre-requisites
1. [NodeJS installed](https://nodejs.org/en/download/).
2. [npm installed](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/).

## Setup
1. Clone this repository or download the zip and extract it.
2. Go to the extracted *testdata* file: `cypress/fixtures/testdata.json` to view the *testdata*.*(currently unsupported)*
3. Open your terminal to the root directory of the project *(cypress-checkout-test)* and run `npm install` command in the terminal/cli to install all dev dependencies.

- Expected (Successful) - `npm install` terminal output sample:

![Expected (Successful) - `npm install` terminal output sample](npm-install-expected.jpg)

4. Execute all tests from the CLI with `npx cypress run` *(will run headless)* or with available script options `npm run {script option}`:
```js
/**
* Available runner script options: 
*
* testWithBrowser       - Run tests headed in the Cypress default Electron browser
* testWithChrome        - Run tests headed in Chrome browser
* testWithFF            - Run tests headed in Firefox browser
* testHeadless          - Run tests headless
* testWithBrowserNoExit - Run tests headed with the Cypress runner remaining open after the test run.
*                        - Note: Test run video recording will keep recording until Cypress runner is closed/killed when @testWithBrowserNoExit option is used!
*/

npm run testWithBrowser
npm run testWithChrome        
npm run testWithFF
npm run testHeadless          
npm run testWithBrowserNoExit

```
5. When the test run completed:
- A *Test results report* will be generated in the `cypress/reports/result.html/index.html` path.
- All *Video recordings of the runs* will be generated in the `cypress/videos/` path.
- All *Screenshots* will be generated in the `cypress/screenshots/` path for all test steps set to take screenshots.

## Expected (Successful - Retried - Skipped) test run samples:

1. Successful Run sample - Cart checkout page in Cypress runner with Electron browser:

![Cart checkout page in Cypress Electron browser runner with no testWithBrowserNoExit npm run](Cypress_Electron_runner_cart_page.jpg)

2. Successful Run sample - Terminal/CLI output:

![Successful run from Terminal with passed test results output](terminal_cypress1.jpg)
![Successful run from Terminal with passed test results output](terminal_cypress2.jpg)
![Successful run from Terminal with passed test results output](terminal_cypress3.jpg)
![Successful run from Terminal with passed test results output](terminal_cypress4.jpg)
![Successful run from Terminal with passed test results output](terminal_cypress5.jpg)

3. Successful Run sample - Cypress Test Results from the HTML report with passed test results output:

![Successful Run - Cypress Test Results HTML report with passed test results output](Cypress_Test_Results_html_report.jpg)

4. Successful Run sample - Video recordings with no failures *(no test retry)*

https://user-images.githubusercontent.com/3204581/203672678-b5509689-fae0-4e53-a980-c43bc7a5c4a2.mp4

5. Successful Run sample - Video recording with *failed test retry*

https://user-images.githubusercontent.com/3204581/203673150-3b41a1c1-4a35-4115-8901-07a6696a4715.mp4

6. Run sample - [Cypress Cloud Runner](https://cloud.cypress.io)
- *(Requires cypress cloud key to run)*

![Test run reported in Cypress Cloud Runner](Cypress-Cloud.jpg)
![Test run - Test results reported in Cypress Cloud Runner](Cypress-Cloud-Test-Results.jpg)

## Gotchas

1. `npm install` Node package install hangs *for 5+ mins* then throws error `ECONNRESET network error`.

```js
Npm install : FetchError: request to http://registry.npmjs.org/... failed, reason: read ECONNRESET
```

### Troubleshooting to resolve the npmjs FetchError:
- Could be your internet connection: Hotspot/tether/connect to a reliable internet connection and re-run `npm install` to see if it still fails *or...*
- Add a host entry for registry.npmjs.org: `ping registry.npmjs.org` to obtain the IP address then update `/etc/hosts` with the IP address E.g. `104.16.20.35 registry.npmjs.org` and re-run `npm install` *or...*
- Run `npm config edit` and clear out the `.npmrc` file, save it and clean out the cache with `npm cache clean -f` then re-run `npm install` *or...*
- Could be a proxy issue in your network that needs to be resolved - [*reference npm config docs to configure proxy settings*](https://docs.npmjs.com/cli/v8/using-npm/config#proxy).

2. Cart page empty on view cart - required the e2e `experimentalSessionAndOrigin` to be set to `false` in *config.js*:

```js
// Extract from cypress.config.js (this is already configured by default)
e2e: {
  experimentalSessionAndOrigin: false
}
```

## Future work planned - *TODOs*

1. Implementing Login and using a cookie to emulate a logged-on session state *(Requires an updated e-commerce store to test against)*.
2. Implement [cypress-image-compare pixel diff tests](https://www.npmjs.com/package/cypress-image-compare).
3. [Docker](https://www.docker.com/) containerisation to package the forked ["Automation practice"](http://automationpractice.com/) app into a container allowing Cypress tests to run in and against the local docker instance.
4. Cypress test kicked off/run with CI/CD in:
- [GitHub Actions](https://docs.cypress.io/guides/continuous-integration/github-actions#What-you-ll-learn) or
- [Jenkins](https://www.jenkins.io/) or
- [Circle CI](https://circleci.com/)
5. Database integration to showcase test run setups and tear downs.
6. Create a [containerised workflow with docker and openshift](https://github.com/OBVIOCO/cypress-checkout-test/new/main?filename=.github%2Fworkflows%2Fopenshift.yml&workflow_template=deployments%2Fopenshift) Or [Azure](https://github.com/OBVIOCO/cypress-checkout-test/new/main?filename=.github%2Fworkflows%2Fazure-webapps-node.yml&workflow_template=deployments%2Fazure-webapps-node) Or [Amazon ECS](https://github.com/OBVIOCO/cypress-checkout-test/new/main?filename=.github%2Fworkflows%2Faws.yml&workflow_template=deployments%2Faws).
7. [Improve Building the project in NodeJS with npm and grunt](https://github.com/OBVIOCO/cypress-checkout-test/new/main?filename=.github%2Fworkflows%2Fnpm-grunt.yml&workflow_template=ci%2Fnpm-grunt).
