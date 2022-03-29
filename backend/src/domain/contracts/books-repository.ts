import { Book } from '../models/book';
import { Paginated } from '../use-cases/pagination';

export interface IBooksRepository {
  get(search: string, page: number, size: number): Promise<Paginated<Book>>;
}
