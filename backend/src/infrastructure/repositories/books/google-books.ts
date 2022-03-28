import axios from 'axios';
import { IBooksRepository } from '../../../domain/contracts/books-repository';
import { Book } from '../../../domain/models/book';

export class GoogleBooksRepository implements IBooksRepository {
  async get(): Promise<Book[]> {
    await axios.get('');
    return [] as Book[];
  }
}
