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
    async get(search: string, page = 1): Promise<Paginated<Book>> {
      return new Promise((resolve) => {
        resolve({
          data: MOCK_BOOKS,
          total: 2,
          page: 1,
          size: 5,
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
  it('Should call Books Repository to get books with provided search query', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    await sut.handle({
      search: 'mock-search-query',
      page: 2,
    });
    expect(spy).toHaveBeenCalledWith('mock-search-query', 2);
  });

  it('Should call Books Repository to get books from provided page', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    await sut.handle({
      search: 'any',
      page: 2,
    });
    expect(spy).toHaveBeenCalledWith('any', 2);
  });

  it('Should provide "flowers" search query when nothing is provided', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    await sut.handle({
      page: 2,
    });
    expect(spy).toHaveBeenCalledWith('flowers', 2);
  });

  it('Should provide page "1" when nothing is provided', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    await sut.handle({
      search: 'anything',
    });
    expect(spy).toHaveBeenCalledWith('anything', 1);
  });

  it('Should return books from the Books Repository', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const expected = await booksRepositoryStub.get('any', 1);
    const response = await sut.handle({});
    expect(response).toEqual(expected);
  });
});
