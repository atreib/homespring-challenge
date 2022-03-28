import { GetBooksService } from '../../../domain/services/books/get';
import { GoogleBooksRepository } from '../../../infrastructure/repositories/books/google-books';
import { GetBooksEndpoint } from '../../../presentation/endpoints/books/get';
import { IHttpService } from '../../../presentation/protocols/http';

export const makeGetBooksEndpoint = (): IHttpService => {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY ?? 'invalid-key';
  const pageLimit = 5;
  const repository = new GoogleBooksRepository(apiKey, pageLimit);
  const service = new GetBooksService(repository);
  const endpoint = new GetBooksEndpoint(service);
  return endpoint;
};
