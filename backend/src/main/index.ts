import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { app } from './app';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Homespring Challenge',
      version: '1.1.5',
    },
  },
  apis: ['./src/main/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = 3000;
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Homespring Challenge listening on port ${port}`);
});
