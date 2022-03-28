import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { adaptRoute } from './helpers/map-express-route';
import { makeGetBooksEndpoint } from './factories/books/get';

const app = express();
app.use(cors());
app.get('/books', adaptRoute(makeGetBooksEndpoint()));

export { app };
