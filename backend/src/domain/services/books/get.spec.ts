import { GetBooksService } from './get';
import { IBooksRepository } from '../../contracts/books-repository';

interface ISutTypes {
  sut: GetBooksService;
  booksRepositoryStub: IBooksRepository;
}

const makeSut = (): ISutTypes => {
  const sut = new GetBooksService();
  return { sut, booksRepositoryStub: {} as IBooksRepository };
};

describe('Get Books Services Test Suite', () => {
  it('Should call Books Repository to get books', async () => {
    const { sut, booksRepositoryStub } = makeSut();
    const spy = jest.spyOn(booksRepositoryStub, 'get');
    await sut.handle();
    expect(spy).toHaveBeenCalled();
  });

  it.todo('Should return books from the Books Repository');
});
