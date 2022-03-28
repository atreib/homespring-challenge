import { IBooksRepository } from '../../contracts/books-repository';
import { Book } from '../../models/book';
import { IGetBooksService, IGetBooksServiceDTO } from '../../use-cases/books/get';
import { Paginated } from '../../use-cases/pagination';

export class GetBooksService implements IGetBooksService {
  private readonly booksRepository: IBooksRepository;

  constructor(_booksRepository: IBooksRepository) {
    this.booksRepository = _booksRepository;
  }

  async handle({ search = 'flowers', page = 1 }: IGetBooksServiceDTO): Promise<Paginated<Book>> {
    return this.booksRepository.get(search, page);
  }
}
