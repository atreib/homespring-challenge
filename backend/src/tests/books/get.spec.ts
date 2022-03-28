import axios from 'axios';
import request from 'supertest';
import { paginate } from '../../domain/use-cases/pagination';
import { app } from '../../main/app';
import { InternalServerError } from '../../presentation/errors';
import { GOOGLE_BOOKS_API_RESULT, GOOGLE_BOOKS_API_RESULT_MAPPED } from './__mocks__';

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Get Books Endpoint Integration Tests', () => {
  beforeAll(() => {
    axios.get = jest.fn().mockResolvedValue({ status: 200, data: GOOGLE_BOOKS_API_RESULT });
  });

  it('Should return 200 with the result of Google Books API if ok', async () => {
    const { status, body } = await request(app).get('/books');
    expect(status).toEqual(200);
    const total = GOOGLE_BOOKS_API_RESULT.totalItems;
    const defaultPage = 1;
    const defaultSize = 5;
    expect(body).toEqual(paginate(GOOGLE_BOOKS_API_RESULT_MAPPED, total, defaultPage, defaultSize));
  });

  it('Should fetch using provided search query', async () => {
    const spy = jest.spyOn(axios, 'get');
    const search = 'mock-search-query';
    const { status, body } = await request(app).get(`/books?search=${search}`);
    const defaultPage = 1;
    const defaultSize = 5;
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`q=${search}`));
    expect(status).toEqual(200);

    const total = GOOGLE_BOOKS_API_RESULT.totalItems;
    expect(body).toEqual(paginate(GOOGLE_BOOKS_API_RESULT_MAPPED, total, defaultPage, defaultSize));
  });

  it('Should fetch using provided page query', async () => {
    const spy = jest.spyOn(axios, 'get');
    const providedPage = 2;
    const { status, body } = await request(app).get(`/books?page=${providedPage}`);
    const defaultSize = 5;
    const startIndex = (providedPage - 1) * defaultSize;
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`startIndex=${startIndex}`));
    expect(status).toEqual(200);
    expect(body.page).toEqual(String(providedPage));
  });

  it('Should fetch using provided size query', async () => {
    const spy = jest.spyOn(axios, 'get');
    const providedSize = 200;
    const { status, body } = await request(app).get(`/books?size=${providedSize}`);
    const defaultPage = 1;
    const startIndex = (defaultPage - 1) * providedSize;
    expect(spy).toHaveBeenCalledWith(expect.stringContaining(`startIndex=${startIndex}`));
    expect(status).toEqual(200);
    expect(body.size).toEqual(String(providedSize));
  });

  it('Should return 500 with Internal Server Error if an error happens', async () => {
    jest.spyOn(axios, 'get').mockImplementationOnce(() => {
      throw new Error();
    });
    const { status, body } = await request(app).get('/books');
    expect(status).toEqual(500);
    expect(body).toEqual({
      message: new InternalServerError().message,
    });
  });
});
