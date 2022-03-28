import { Book } from '../../models/book';

export interface IGetBooksService {
  handle(): Promise<Book[]>;
}
