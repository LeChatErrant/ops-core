export default {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API-template documentation',
      version: '1.0.0',
      description: 'Simple production-ready API template',
      license: {
        name: 'MIT',
        url: 'https://github.com/LeChatErrant/API-template/blob/master/LICENSE',
      },
      contact: {
        email: 'guillaume.hector@epitech.eu',
      },
      servers: [{
        url: 'https://dev.api-template.com',
        description: 'Development server',
      }, {
        url: 'https://api.api-template.com',
        description: 'Production server',
      }],
    },
    basePath: '/',
    externalDocs: {
      description: 'Find out more about Swagger',
      url: 'http://swagger.io ',
    },
  },
  swaggerUIOptions: {
    explorer: true,
  },
};
