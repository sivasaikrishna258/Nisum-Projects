const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {

    //we are excluding the files which are mentioned below
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],

    //
    // specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    specPattern: "cypress/e2e/BDD/Amazon**/*.feature",
    pageLoadTimeout: 120000, // Increase the timeout to 120 seconds
    setupNodeEvents,
  },
});
