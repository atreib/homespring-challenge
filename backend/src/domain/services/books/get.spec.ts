import { GetBooksService } from './get';
import { IBooksRepository } from '../../contracts/books-repository';
import { MOCK_BOOKS } from './__mocks__/books';
import { Book } from '../../models/book';
import { Paginated } from '../../use-cases/pagination';

interface ISutTypes {
  sut: GetBooksService;
  booksRepositoryStub: IBooksRepository;
}

const makeBooksRepositoryStub = (): IBooksRepository => {
  class BooksRepositoryStub implements IBooksRepository {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async get(search: string, page: number, size: number): Promise<Paginated<Book>> {
      return new Promise((resolve) => {
        resolve({
          data: MOCK_BOOKS,
          total: 50934,
          page: 31,
          size: 12,
        });
      });
    }
  }

  return new BooksRepositoryStub();
};

const makeSut = (): ISutTypes => {
  const booksRepositoryStub = makeBooksRepositoryStub();
  const sut = new GetBooksService(booksRepositoryStub);
  return { sut, booksRepositoryStub };
};

describe('Get Books Services Test Suite', () => {
  it('Should call Books Repository to get books with provided data', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    const page = 15;
    const size = 23;
    await sut.handle({ search: 'mock-search-query', page, size });
    expect(spy).toHaveBeenCalledWith('mock-search-query', page, size);
  });

  it('Should provide "flowers" search query when nothing is provided', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    const page = 3242;
    const size = 3242;
    await sut.handle({ page, size });
    expect(spy).toHaveBeenCalledWith('flowers', page, size);
  });

  it('Should provide page "1" when nothing is provided', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    const size = 3242;
    await sut.handle({ search: 'anything', size });
    expect(spy).toHaveBeenCalledWith('anything', 1, size);
  });

  it('Should provide size "5" when nothing is provided', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    const page = 3242;
    await sut.handle({ search: 'anything', page });
    expect(spy).toHaveBeenCalledWith('anything', page, 5);
  });

  it('Should return books from the Books Repository', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const expected = await booksRepositoryStub.get('any', 1, 1);
    const response = await sut.handle({});
    expect(response).toEqual(expected);
  });
});
