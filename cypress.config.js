const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com'
  },
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: true
});