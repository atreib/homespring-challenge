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
    await axios.get(`${this.apiKey}maxResults=${this.pageLimit}`);
    return [] as Book[];
  }
}
