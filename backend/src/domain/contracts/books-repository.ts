import { Book } from '../models/book';

export interface IBooksRepository {
  get(search: string): Promise<{ data: Book[] }>;
}
