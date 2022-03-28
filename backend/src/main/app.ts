import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { adaptRoute } from './helpers/map-express-route';
import { makeGetBooksEndpoint } from './factories/books/get';

const app = express();
app.use(cors());

/**
 * @openapi
 * /books:
 *   get:
 *     produces:
 *       - application/json
 *     description: Get list of books from Google Books API
 *     responses:
 *       200:
 *         description: Returns 5 books from Google Books API
 */
app.get('/books', adaptRoute(makeGetBooksEndpoint()));

export { app };
