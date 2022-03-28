import { GetBooksService } from './get';
import { IBooksRepository } from '../../contracts/books-repository';
import { MOCK_BOOKS } from './__mocks__/books';
import { Book } from '../../models/book';

interface ISutTypes {
  sut: GetBooksService;
  booksRepositoryStub: IBooksRepository;
}

const makeBooksRepositoryStub = (): IBooksRepository => {
  class BooksRepositoryStub implements IBooksRepository {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async get(search: string): Promise<Book[]> {
      return new Promise((resolve) => {
        resolve(MOCK_BOOKS);
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
    await sut.handle('mock-search-query');
    expect(spy).toHaveBeenCalledWith('mock-search-query');
  });

  it('Should provide static search query when anythings provided', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    await sut.handle();
    expect(spy).toHaveBeenCalledWith('flowers');
  });

  it('Should return books from the Books Repository', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const expected = await booksRepositoryStub.get('any');
    const response = await sut.handle();
    expect(response).toEqual(expected);
  });
});
