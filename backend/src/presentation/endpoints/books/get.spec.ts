import { Book } from '../../../domain/models/book';
import { IGetBooksService } from '../../../domain/use-cases/books/get';
import { GetBooksEndpoint } from './get';

interface ISutTypes {
  getBooksServiceStub: IGetBooksService;
  sut: GetBooksEndpoint;
}

const MOCK_BOOKS: Book[] = [
  {
    picture:
      'http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    authors: ['Daniel Keyes'],
    categories: ['Fiction'],
    title: 'Flowers For Algernon',
    rating: 4,
    pagesCount: 336,
    postingYear: 2007,
    publisher: 'HarperCollins',
    description:
      "Winner of both the Hugo and Nebula Awards, the powerful, classic story about a man who receives an operation that turns him into a genius...and introduces him to heartache. Charlie Gordon is about to embark upon an unprecedented journey. Born with an unusually low IQ, he has been chosen as the perfect subject for an experimental surgery that researchers hope will increase his intelligence-a procedure that has already been highly successful when tested on a lab mouse named Algernon. As the treatment takes effect, Charlie's intelligence expands until it surpasses that of the doctors who engineered his metamorphosis. The experiment appears to be a scientific breakthrough of paramount importance, until Algernon suddenly deteriorates. Will the same happen to Charlie?",
  },
  {
    picture:
      'http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    authors: ['Daniel Keyes'],
    categories: ['Fiction'],
    title: 'Flowers For Algernon',
    rating: 5,
    pagesCount: 224,
    postingYear: 2012,
    publisher: 'Hachette UK',
    description:
      "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
  },
];

const makeGetBooksServiceStub = (): IGetBooksService => {
  class GetBooksServiceStub implements IGetBooksService {
    async handle(): Promise<Book[]> {
      return new Promise((resolve) => resolve(MOCK_BOOKS));
    }
  }
  return new GetBooksServiceStub();
};

const makeSut = (): ISutTypes => {
  const getBooksServiceStub = makeGetBooksServiceStub();
  const sut = new GetBooksEndpoint(getBooksServiceStub);
  return { sut, getBooksServiceStub };
};

describe('Get Books Endpoint', () => {
  it('Should fetch from Get Books Service', async () => {
    const { sut, getBooksServiceStub } = makeSut();
    const spy = jest.spyOn(getBooksServiceStub, 'handle');
    await sut.handle();
    expect(spy).toHaveBeenCalled();
  });

  it('Should return status 200 with the result from Get Books Service', async () => {
    const { sut, getBooksServiceStub } = makeSut();
    const expected = await getBooksServiceStub.handle();
    const result = await sut.handle();
    expect(result).toEqual({
      status: 200,
      body: expected,
    });
  });

  it.todo('Should throw 500 if an unexpected error occurs');
});
