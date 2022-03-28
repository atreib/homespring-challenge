import axios from 'axios';
import { GoogleBooksRepository } from './google-books';
import { AXIOS_RESULT } from './__mocks__/axios';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

interface SutTypes {
  apiKey: string;
  pageLimit: number;
  sut: GoogleBooksRepository;
}

const makeSut = (): SutTypes => {
  const apiKey = 'mock-my-api-key';
  const pageLimit = 5;
  const sut = new GoogleBooksRepository();
  return { sut, apiKey, pageLimit };
};

describe('Google Books API as Books Repository Test Suite', () => {
  beforeAll(() => {
    axios.get = jest.fn().mockResolvedValue({ status: 200, data: AXIOS_RESULT });
  });

  it('Should fetch Google Books API using Axios GET', async () => {
    const spy = jest.spyOn(axios, 'get');
    const { sut } = makeSut();
    await sut.get();
    expect(spy).toHaveBeenCalled();
  });

  it.todo('Should fetch using the injected Api Key');
  it.todo('Should fetch using the injected limit per page');
  it.todo('Should fetch from the v1 of Google Books API');
  it.todo('Should return the result from Google Books API');
});
