import { Book } from '../models/book';
import { Paginated } from '../use-cases/pagination';

export interface IBooksRepository {
  get(search: string): Promise<Paginated<Book>>;
}
