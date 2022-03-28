/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { IBooksRepository } from '../../../domain/contracts/books-repository';
import { Book } from '../../../domain/models/book';

export const toBook = (googleBook: any): Book => {
  const postingYear = googleBook.volumeInfo?.publishedDate
    ? new Date(googleBook.volumeInfo?.publishedDate).getFullYear()
    : undefined;

  return {
    picture: googleBook.volumeInfo?.imageLinks?.thumbnail ?? '',
    authors: googleBook.volumeInfo?.authors ?? ['Unknown author'],
    categories: googleBook.volumeInfo?.categories ?? [],
    title: googleBook.volumeInfo?.title ?? 'Unknown title',
    rating: googleBook.volumeInfo?.averageRating ?? 0,
    pagesCount: googleBook.volumeInfo?.pageCount ?? 0,
    postingYear: postingYear ?? 0,
    publisher: googleBook.volumeInfo?.publisher ?? 'Unknown publisher',
    description: googleBook.volumeInfo?.description ?? '',
  };
};

export class GoogleBooksRepository implements IBooksRepository {
  private readonly apiKey: string;

  private readonly pageLimit: number;

  constructor(_apiKey: string, _pageLimit: number) {
    this.apiKey = _apiKey;
    this.pageLimit = _pageLimit;
  }

  async get(): Promise<Book[]> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=flowers&key=${this.apiKey}&maxResults=${this.pageLimit}`;
    const { data } = await axios.get(url);
    return data?.items && Array.isArray(data?.items) && data?.items.length > 0
      ? data.items.map((book: any) => toBook(book))
      : [];
  }
}
