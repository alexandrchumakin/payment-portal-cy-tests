const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8082'
  },
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/results/test-output-[hash].xml',
    toConsole: false,
    showPassed: true
  }
});
