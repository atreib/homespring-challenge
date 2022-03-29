import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { app } from './app';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Homespring Challenge',
      version: '1.3.9',
      description: 'This is a showcase of a fullstack development',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Localhost environment',
      },
      {
        url: 'https://homespring-challenge-backend.herokuapp.com',
        description: 'Staging environment, synced with the branch development',
      },
    ],
  },
  apis: ['./src/main/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Homespring Challenge listening on port ${port}`);
});
