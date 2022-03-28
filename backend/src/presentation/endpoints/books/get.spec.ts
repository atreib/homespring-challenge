import { Book } from '../../../domain/models/book';
import { IGetBooksService } from '../../../domain/use-cases/books/get';
import { GetBooksEndpoint } from './get';

interface ISutTypes {
  getBooksServiceStub: IGetBooksService;
  sut: GetBooksEndpoint;
}

const makeGetBooksServiceStub = (): IGetBooksService => {
  class GetBooksServiceStub implements IGetBooksService {
    async handle(): Promise<Book[]> {
      return new Promise((resolve) => resolve([] as Book[]));
    }
  }
  return new GetBooksServiceStub();
};

const makeSut = (): ISutTypes => {
  const getBooksServiceStub = makeGetBooksServiceStub();
  const sut = new GetBooksEndpoint();
  return { sut, getBooksServiceStub };
};

describe('Get Books Endpoint', () => {
  it('Should fetch from Get Books Service', async () => {
    const { sut, getBooksServiceStub } = makeSut();
    const spy = jest.spyOn(getBooksServiceStub, 'handle');
    await sut.handle();
    expect(spy).toHaveBeenCalled();
  });

  it.todo('Should return the result from Get Books Service');
});
