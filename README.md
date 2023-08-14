# cypress-orange-hrm-test

Sample project to perform web automated tests on the Orange HRM application.

## Day 1 - Getting Started

In Day 1, we'll set up your Cypress project with Node.js and JavaScript, create basic tests in Cypress, and configure the base URL in `cypress.config.js`

### 1. Setting up the Cypress project

- To begin, initialize your project with npm:
```npm init```

- Next, add Cypress as a development dependency:
````npm install cypress --save-dev```

- Run Cypress using the following command:
```./node_modules/.bin/cypress open```
OR
```npx cypress open```

This will open the Cypress Test Runner, where you can manage and run your tests. Select the "e2e" module or any other relevant module.

### 2. Writing tests in Cypress
We've provided a sample test in the `loginOrange.cy.js` file. This test covers basic login functionality, but you can add more tests based on your application's features.

### 3. Configuring the base URL
We use the `cypress.config.js` file to set up the base URL for our application. This makes it easier to write test cases with relative URLs.

### 4. Basic tests: Checking hyperlinks and images
In Cypress, you can easily check if hyperlinks and images on your application are working as expected. Use the Cypress commands to ensure they are not broken.

## Day 2 - Enhancing Tests with Cypress Commands and Configuration

In Day 2 of our series, we dive deeper into Cypress and learn essential techniques to improve our test suite.

### 1. **Using `beforeEach` for Preparing Tests**

We introduced the `beforeEach` hook to ensure that specific actions, such as opening the web application and logging in with credentials, are performed before each test within a `describe` block. This ensures that our tests start with the necessary prerequisites.

### 2. **Taking Screenshots**

We demonstrated how to capture screenshots in Cypress. This is particularly useful for debugging and documenting test failures. We also discussed how to configure Cypress to automatically take screenshots on test failures.

### 3. **Clearing Assets before Running Tests**

To keep our tests clean and avoid duplicate assets such as video or screenshots, we have enabled ```trashAssetsBeforeRuns: true```

### 4. **Enabling Video Recording**

We explored how to enable video recording during test runs. Please note that this feature is particularly effective when running tests using `cypress run` or in a cloud environment.

To enable these features, make sure to configure the appropriate options in your `cypress.config.js`:
```module.exports = defineConfig({
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: true
});```

# How to Contribute
Contributions are welcome! If you have suggestions or improvements for this project, feel free to submit issues or pull requests.

Stay tuned for more exciting updates as we continue to explore the world of Cypress and automated testing!

Happy testing! 🚀🔍🌐

Day 1 README | Day 2 README