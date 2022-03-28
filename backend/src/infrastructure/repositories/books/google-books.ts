import axios from 'axios';
import { IBooksRepository } from '../../../domain/contracts/books-repository';
import { Book } from '../../../domain/models/book';

export class GoogleBooksRepository implements IBooksRepository {
  private readonly apiKey: string;

  private readonly pageLimit: number;

  constructor(_apiKey: string, _pageLimit: number) {
    this.apiKey = _apiKey;
    this.pageLimit = _pageLimit;
  }

  async get(): Promise<Book[]> {
    const url = `https://www.googleapis.com/books/v1/volumes?key=${this.apiKey}&maxResults=${this.pageLimit}`;
    const { data } = await axios.get(url);
    return data;
  }
}
