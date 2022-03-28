import axios from 'axios';
import { IBooksRepository } from '../../../domain/contracts/books-repository';
import { Book } from '../../../domain/models/book';

export class GoogleBooksRepository implements IBooksRepository {
  private readonly apiKey: string;

  constructor(_apiKey: string) {
    this.apiKey = _apiKey;
  }

  async get(): Promise<Book[]> {
    await axios.get(this.apiKey);
    return [] as Book[];
  }
}
