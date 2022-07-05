const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: "https://petgram-trakadev-traka-dev.vercel.app",
        chromeWebSecurity: false,
        viewportHeight: 800,
        viewportWidth: 500
    },
});