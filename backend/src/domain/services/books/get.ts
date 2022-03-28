import { Book } from '../../models/book';
import { IGetBooksService } from '../../use-cases/books/get';

export class GetBooksService implements IGetBooksService {
  handle(): Promise<Book[]> {
    throw new Error('Not implemented');
  }
}
