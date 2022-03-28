import axios from 'axios';
import { Book } from '../../../domain/models/book';
import { GoogleBooksRepository, toBook } from './google-books';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

const AXIOS_RESULT = {
  kind: 'books#volumes',
  totalItems: 422,
  items: [
    {
      kind: 'books#volume',
      id: '_oG_iTxP1pIC',
      etag: '8YfPrecA1WM',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/_oG_iTxP1pIC',
      volumeInfo: {
        title: 'Flowers For Algernon',
        authors: ['Daniel Keyes'],
        publisher: 'HarperCollins',
        publishedDate: '2007-12-01',
        description:
          "Winner of both the Hugo and Nebula Awards, the powerful, classic story about a man who receives an operation that turns him into a genius...and introduces him to heartache. Charlie Gordon is about to embark upon an unprecedented journey. Born with an unusually low IQ, he has been chosen as the perfect subject for an experimental surgery that researchers hope will increase his intelligence-a procedure that has already been highly successful when tested on a lab mouse named Algernon. As the treatment takes effect, Charlie's intelligence expands until it surpasses that of the doctors who engineered his metamorphosis. The experiment appears to be a scientific breakthrough of paramount importance, until Algernon suddenly deteriorates. Will the same happen to Charlie?",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780547539638',
          },
          {
            type: 'ISBN_10',
            identifier: '0547539630',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 336,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 4,
        ratingsCount: 185,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '1.13.12.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=_oG_iTxP1pIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com.br/books?id=_oG_iTxP1pIC&printsec=frontcover&dq=flowers%2Binauthor:keyes&hl=&cd=1&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=_oG_iTxP1pIC&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=_oG_iTxP1pIC',
      },
      saleInfo: {
        country: 'BR',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 56.56,
          currencyCode: 'BRL',
        },
        retailPrice: {
          amount: 56.56,
          currencyCode: 'BRL',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=_oG_iTxP1pIC&rdid=book-_oG_iTxP1pIC&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 56560000,
              currencyCode: 'BRL',
            },
            retailPrice: {
              amountInMicros: 56560000,
              currencyCode: 'BRL',
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: 'BR',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.br/books/download/Flowers_For_Algernon-sample-epub.acsm?id=_oG_iTxP1pIC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=_oG_iTxP1pIC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'Winner of both the Hugo and Nebula Awards, the powerful, classic story about a man who receives an operation that turns him into a genius...and introduces him to heartache.',
      },
    },
    {
      kind: 'books#volume',
      id: '8Pr_kLFxciYC',
      etag: '9PHMraHaK4E',
      selfLink: 'https://www.googleapis.com/books/v1/volumes/8Pr_kLFxciYC',
      volumeInfo: {
        title: 'Flowers For Algernon',
        subtitle: 'A Modern Literary Classic',
        authors: ['Daniel Keyes'],
        publisher: 'Hachette UK',
        publishedDate: '2012-11-15',
        description:
          "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
        industryIdentifiers: [
          {
            type: 'ISBN_13',
            identifier: '9780575088498',
          },
          {
            type: 'ISBN_10',
            identifier: '0575088494',
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 224,
        printType: 'BOOK',
        categories: ['Fiction'],
        averageRating: 5,
        ratingsCount: 4,
        maturityRating: 'NOT_MATURE',
        allowAnonLogging: true,
        contentVersion: '0.14.17.0.preview.2',
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            'http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
          thumbnail:
            'http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
        },
        language: 'en',
        previewLink:
          'http://books.google.com.br/books?id=8Pr_kLFxciYC&printsec=frontcover&dq=flowers%2Binauthor:keyes&hl=&cd=2&source=gbs_api',
        infoLink: 'https://play.google.com/store/books/details?id=8Pr_kLFxciYC&source=gbs_api',
        canonicalVolumeLink: 'https://play.google.com/store/books/details?id=8Pr_kLFxciYC',
      },
      saleInfo: {
        country: 'BR',
        saleability: 'FOR_SALE',
        isEbook: true,
        listPrice: {
          amount: 58.15,
          currencyCode: 'BRL',
        },
        retailPrice: {
          amount: 58.15,
          currencyCode: 'BRL',
        },
        buyLink:
          'https://play.google.com/store/books/details?id=8Pr_kLFxciYC&rdid=book-8Pr_kLFxciYC&rdot=1&source=gbs_api',
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 58150000,
              currencyCode: 'BRL',
            },
            retailPrice: {
              amountInMicros: 58150000,
              currencyCode: 'BRL',
            },
            giftable: true,
          },
        ],
      },
      accessInfo: {
        country: 'BR',
        viewability: 'PARTIAL',
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: 'ALLOWED',
        epub: {
          isAvailable: true,
          acsTokenLink:
            'http://books.google.com.br/books/download/Flowers_For_Algernon-sample-epub.acsm?id=8Pr_kLFxciYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: 'http://play.google.com/books/reader?id=8Pr_kLFxciYC&hl=&printsec=frontcover&source=gbs_api',
        accessViewStatus: 'SAMPLE',
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          'The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone&#39;s jokes - until an experiment in the enhancement of human intelligence turns him into a genius.',
      },
    },
  ],
};

const AXIOS_RESULT_MAPPED: Book[] = [
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

interface SutTypes {
  apiKey: string;
  pageLimit: number;
  sut: GoogleBooksRepository;
}

const makeSut = (): SutTypes => {
  const apiKey = 'mock-my-api-key';
  const pageLimit = 5;
  const sut = new GoogleBooksRepository(apiKey, pageLimit);
  return { sut, apiKey, pageLimit };
};

describe('Google Books API as Books Repository Test Suite', () => {
  beforeAll(() => {
    axios.get = jest.fn().mockResolvedValue({ status: 200, data: AXIOS_RESULT });
  });

  it('Should fetch Google Books API using Axios GET', async () => {
    const spy = jest.spyOn(axios, 'get');
    const { sut } = makeSut();
    await sut.get('any');
    expect(spy).toHaveBeenCalled();
  });

  it('Should fetch using the injected Api Key', async () => {
    const spy = jest.spyOn(axios, 'get');
    const { sut, apiKey } = makeSut();
    await sut.get('any');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(apiKey));
  });

  it('Should fetch using the injected limit per page', async () => {
    const spy = jest.spyOn(axios, 'get');
    const { sut, pageLimit } = makeSut();
    await sut.get('any');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`maxResults=${pageLimit}`));
  });

  it('Should fetch from the v1 of Google Books API', async () => {
    const spy = jest.spyOn(axios, 'get');
    const { sut } = makeSut();
    await sut.get('any');
    const googleBooksApiV1 = 'https://www.googleapis.com/books/v1/volumes?';
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(googleBooksApiV1));
  });

  it('Should return the mapped result from Google Books API as its data', async () => {
    const { sut } = makeSut();
    const { data } = await sut.get('any');
    expect(data).toEqual(AXIOS_RESULT_MAPPED);
  });

  it('Should return empty array as its data if Google Books API returns undefined', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ status: 400, data: undefined });
    const { sut } = makeSut();
    const { data } = await sut.get('any');
    expect(data).toEqual([]);
  });

  it('Should fetch using the provided search query', async () => {
    const spy = jest.spyOn(axios, 'get');
    const { sut } = makeSut();
    await sut.get('mock-search-query');
    expect(spy).toHaveBeenCalledWith(expect.stringContaining('mock-search-query'));
  });

  it('Should fetch using the provided page query', async () => {
    const spy = jest.spyOn(axios, 'get');
    const { sut, pageLimit } = makeSut();
    await sut.get('mock-search-query', 2);
    const skip = (2 - 1) * pageLimit;
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`startIndex=${skip}`));
  });

  describe("Google Books API result's mapping", () => {
    const sut = toBook;

    it('Should correctly map the picture property', () => {
      const { picture } = sut({ volumeInfo: { imageLinks: { thumbnail: 'mock-thumbnail' } } });
      expect(picture).toBe('mock-thumbnail');
    });

    it('Should set picture as empty if not provided', () => {
      const { picture } = sut({});
      expect(picture).toBe('');
    });

    it('Should correctly map the authors property', () => {
      const { authors } = sut({ volumeInfo: { authors: ['author1', 'author2'] } });
      expect(authors).toEqual(['author1', 'author2']);
    });

    it('Should set authors as Unknown if not provided', () => {
      const { authors } = sut({});
      expect(authors).toEqual(['Unknown author']);
    });

    it('Should correctly map the categories property', () => {
      const { categories } = sut({ volumeInfo: { categories: ['cat1', 'cat2'] } });
      expect(categories).toEqual(['cat1', 'cat2']);
    });

    it('Should set categories as empty array if not provided', () => {
      const { categories } = sut({});
      expect(categories).toEqual([]);
    });

    it('Should correctly map the title property', () => {
      const { title } = sut({ volumeInfo: { title: 'mock-book-title' } });
      expect(title).toEqual('mock-book-title');
    });

    it('Should set title as Unknown if not provided', () => {
      const { title } = sut({});
      expect(title).toEqual('Unknown title');
    });

    it('Should correctly map the rating property', () => {
      const { rating } = sut({ volumeInfo: { averageRating: 5 } });
      expect(rating).toEqual(5);
    });

    it('Should set rating as 0 if not provided', () => {
      const { rating } = sut({});
      expect(rating).toEqual(0);
    });

    it('Should correctly map the pagesCount property', () => {
      const { pagesCount } = sut({ volumeInfo: { pageCount: 234 } });
      expect(pagesCount).toEqual(234);
    });

    it('Should set pagesCount as 0 if not provided', () => {
      const { pagesCount } = sut({});
      expect(pagesCount).toEqual(0);
    });

    it('Should correctly map the postingYear property', () => {
      const { postingYear } = sut({ volumeInfo: { publishedDate: '2022-03-28' } });
      expect(postingYear).toBe(2022);
    });

    it('Should set postingYear as 0 if not provided', () => {
      const { postingYear } = sut({});
      expect(postingYear).toBe(0);
    });

    it('Should correctly map the publisher property', () => {
      const { publisher } = sut({ volumeInfo: { publisher: 'mock-publisher' } });
      expect(publisher).toEqual('mock-publisher');
    });

    it('Should set publisher as Unknown if not provided', () => {
      const { publisher } = sut({});
      expect(publisher).toBe('Unknown publisher');
    });

    it('Should correctly map the description property', () => {
      const { description } = sut({ volumeInfo: { description: 'mock-description' } });
      expect(description).toEqual('mock-description');
    });

    it('Should set description as empty if not provided', () => {
      const { description } = sut({});
      expect(description).toEqual('');
    });
  });
});
