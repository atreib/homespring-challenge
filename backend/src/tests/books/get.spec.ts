import axios from 'axios';
import request from 'supertest';
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
    expect(body).toEqual(GOOGLE_BOOKS_API_RESULT_MAPPED);
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
