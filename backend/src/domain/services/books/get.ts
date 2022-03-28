import { IBooksRepository } from '../../contracts/books-repository';
import { Book } from '../../models/book';
import { IGetBooksService } from '../../use-cases/books/get';

export class GetBooksService implements IGetBooksService {
  private readonly booksRepository: IBooksRepository;

  constructor(_booksRepository: IBooksRepository) {
    this.booksRepository = _booksRepository;
  }

  async handle(): Promise<Book[]> {
    await this.booksRepository.get();
    return [] as Book[];
  }
}
