/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { IBooksRepository } from '../../../domain/contracts/books-repository';
import { Book } from '../../../domain/models/book';
import { paginate, Paginated } from '../../../domain/use-cases/pagination';

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

  constructor(_apiKey: string) {
    this.apiKey = _apiKey;
  }

  async get(search: string, page: number, size: number): Promise<Paginated<Book>> {
    const startIndex = (page - 1) * size;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}&key=${this.apiKey}&maxResults=${size}`;
    const { data } = await axios.get(url);
    const { items, totalItems } = data ?? { items: undefined, totalItems: 0 };

    return items && Array.isArray(items) && items.length > 0
      ? paginate(
        items.map((book: any) => toBook(book)),
        totalItems,
        page,
        size,
      )
      : paginate([], 0, 1, size);
  }
}
