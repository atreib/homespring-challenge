import { Book } from '../models/book';

export interface IBooksRepository {
  get(): Promise<Book[]>;
}
