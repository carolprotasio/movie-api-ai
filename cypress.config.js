const { defineConfig } = require("cypress");
const { configurePlugin } = require ('cypress-mongodb')

module.exports = defineConfig({
  env: {
    mongodb: {
        uri: 'mongodb+srv://dba:dba@movie-api-ai.vnxfr.mongodb.net/?retryWrites=true&w=majority&appName=movie-api-ai',
        database: 'teste'               
    }
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on);
    },
    watchForFileChanges: false,
    baseUrl: 'http://localhost:5000/api'
  },
});
