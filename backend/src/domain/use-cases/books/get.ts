import { Book } from '../../models/book';

export interface IGetBooksService {
  handle(search?: string): Promise<Book[]>;
}
