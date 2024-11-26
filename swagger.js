const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Automatically generated OpenAPI documentation',
    },
  },
  apis: ['./routes/*.ts'], 
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerUi, swaggerSpec };
