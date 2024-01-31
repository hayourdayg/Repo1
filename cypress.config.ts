import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://fr-i3f.louisvuitton.com/fra-fr",
    specPattern: "cypress/tests/**/*.spec.ts",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 30000,
  viewportWidth: 1280,
  viewportHeight: 800,
});
