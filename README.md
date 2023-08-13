# cypress-orange-hrm-test

Sample project to perform web automated tests on the Orange HRM application.

## Day 1 - Getting Started

In Day 1, we'll set up your Cypress project with Node.js and JavaScript, create basic tests in Cypress, and configure the base URL in `cypress.json`.

### 1. Setting up the Cypress project

To begin, initialize your project with npm:

```bash
npm init

Next, add Cypress as a development dependency:

````bash 
npm install cypress --save-dev`

Run Cypress using the following command:
```bash
./node_modules/.bin/cypress open 
or 
``` bash
npx cypress open

This will open the Cypress Test Runner, where you can manage and run your tests. Select the "e2e" module or any other relevant module.

### 2. Writing tests in Cypress
We've provided a sample test in the `loginOrange.cy.js` file. This test covers basic login functionality, but you can add more tests based on your application's features.

### 3. Configuring the base URL
We use the `cypress.config.js`` file to set up the base URL for our application. This makes it easier to write test cases with relative URLs.

### 4. Basic tests: Checking hyperlinks and images
In Cypress, you can easily check if hyperlinks and images on your application are working as expected. Use the Cypress commands to ensure they are not broken.


# How to Contribute
Your contributions are welcome! If you have suggestions or improvements for this project, feel free to submit issues or pull requests.
Happy testing!