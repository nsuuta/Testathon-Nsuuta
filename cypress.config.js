const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
