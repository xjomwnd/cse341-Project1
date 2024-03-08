const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/contacts.js']; // Add more route files if needed

swaggerAutogen(outputFile, endpointsFiles);
