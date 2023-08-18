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

To enable these features, make sure to configure the appropriate options in your `cypress.config.js`

## Cypress Learning Series - Day 3

Welcome to Day 3 of the Cypress Learning Series! In today's session, we'll explore several essential concepts that enhance your understanding of Cypress testing. Let's dive in:

## Topics Covered

1. **IntelliSense with Cypress**
   Learn how to use IntelliSense, a powerful code editing feature, to streamline your Cypress test scripting. IntelliSense provides real-time suggestions and autocompletions, significantly improving your coding efficiency and accuracy.

2. **Force Click vs. Normal Click in Cypress**
   Discover the nuances between force click and normal click approaches in Cypress. We'll delve into the usage of `{ force: true }` with the `click()` command, enabling robust interactions even when elements are obscured or hidden by other page elements.

3. **Element Visibility: `.should('be.visible')` vs. Selenium's `isDisplayed()`**
   Delve into the world of element visibility in testing. This segment compares Cypress's `.should('be.visible')` command with Selenium's `isDisplayed()` method. Understand how both mechanisms ensure elements are visible and ready for interaction, resulting in more dependable and user-centric tests.

## Examples

Each topic is accompanied by practical examples that vividly illustrate the discussed concepts. These examples are thoughtfully organized into separate folders for better clarity:

- `command.js`: A demonstration of enabling IntelliSense functionality in Cypress.
- `BuzzCRM.cy.js`: Real-world scenarios showcasing the distinctions between force click and normal click interactions.
- `BuzzCRM.cy.js`: A direct comparison between Cypress's `.should('be.visible')` and Selenium's `isDisplayed()` for assessing element visibility.

## Comparison with Selenium

In the `BuzzCRM.cy.js` example, you'll find an insightful comparison between Cypress's `.should('be.visible')` and Selenium's `isDisplayed()` mechanisms concerning element visibility. This comparison underscores how Cypress simplifies element interaction and visibility assertions, contributing to more efficient testing practices.

Feel free to explore the examples and comparisons provided in this session to deepen your understanding of Cypress testing techniques.

## Cypress Learning Series - Day 4 & 5

## Topics Covered

1. **Aliasing Elements in Cypress**
   Discover the power of aliasing in Cypress. Learn how to create and utilize aliases to simplify interactions and assertions across your test scripts. Alias helps create cleaner and more maintainable test code.

2. **Using Fixtures for Test Data**
   Master the art of managing test data with fixtures. Explore how to load external data from fixture files into your tests, keeping your test data organized, separate, and easy to update.

3. **Generating Comprehensive HTML Reports with cypress-mochawesome-reporter**
   Elevate your test reporting with the cypress-mochawesome-reporter plugin. Experience visually-rich HTML reports that include screenshots and recordings, making it a valuable resource for stakeholders to understand test outcomes.

## Examples and Practical Demonstrations

Each topic is accompanied by practical examples that showcase the concepts in action. You'll find code snippets, step-by-step guides, and explanations to help you understand and apply these techniques effectively:

- `aliasing`: Hands-on examples demonstrating the benefits of aliasing in Cypress tests.
- `fixture`: Practical scenarios illustrating the usage of fixtures to manage test data efficiently.
- `cypress-mochawesome-reporter`: Guide on integrating cypress-mochawesome-reporter for stunning HTML reports with screenshots and recordings.

## Cypress Learning Series - Day 6 Final

## Topics Covered

1. **Retry Execution**
   Cypress allows retrying failed tests to improve the stability of test execution. We've configured the retry attempts for both `cypress run` and `cypress open` modes in the `cypress.config.js` file:

```json
{
  "retries": {
    // Configure retry attempts for `cypress run`
      // Default is 0
      "runMode": 2,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 2
  }
}
```

2. **Cross-Browser Testing**
   Easily run your tests across different browsers using the --browser flag. For instance, to run tests in Firefox:
   ```npx cypress run --browser firefox --spec "cypress/e2e/CypressDay1/loginOrange.cy.js"```
3. **Headless Mode Execution**
   Improve test execution speed by running tests in headless mode using the --headless flag:
   ```npx cypress run --headless```
4. **Parallel Execution (Cypress Cloud)**
   Achieve even faster test execution by leveraging parallel execution in Cypress Cloud. Unfortunately, this feature requires Cypress Cloud:
   ```npx cypress run --parallel```

# How to Contribute
Contributions are welcome! If you have suggestions or improvements for this project, feel free to submit issues or pull requests.

Stay tuned for more exciting updates as we continue to explore the world of Cypress and automated testing!

Happy testing! 🚀🔍🌐