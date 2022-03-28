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
 *     parameters:
 *       - in: query
 *         name: search
 *         required: false
 *         description: A search query to filter the returned books
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns 5 books from Google Books API
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   picture:
 *                     type: string
 *                     description: The URL of the book's thumbnail
 *                   authors:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Book's authors
 *                   categories:
 *                     type: array
 *                     items:
 *                       type: string
 *                     description: Book's categories
 *                   title:
 *                     type: string
 *                     description: Book's title
 *                   rating:
 *                     type: number
 *                     description: Book's average rating (0-5)
 *                   pagesCount:
 *                     type: number
 *                     description: Book's page count
 *                   postingYear:
 *                     type: number
 *                     description: Book's posting year (YYYY)
 *                   publisher:
 *                     type: string
 *                     description: Book's publisher
 *                   description:
 *                     type: string
 *                     description: Book's description
 */
app.get('/books', adaptRoute(makeGetBooksEndpoint()));

export { app };
