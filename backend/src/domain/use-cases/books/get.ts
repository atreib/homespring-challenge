import { Book } from '../../models/book';
import { Paginated } from '../pagination';

export interface IGetBooksServiceDTO {
  search?: string;
  page?: number;
  size?: number;
}

export interface IGetBooksService {
  handle(options: IGetBooksServiceDTO): Promise<Paginated<Book>>;
}
