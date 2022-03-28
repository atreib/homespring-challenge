import { Book } from '../../../models/book';

export const MOCK_BOOKS: Book[] = [
  {
    picture: 'pic-url',
    authors: ['Author1', 'Author2'],
    categories: ['Category1', 'Category2'],
    title: 'Book Title',
    rating: 4,
    pagesCount: 133,
    postingYear: 2004,
    publisher: 'Publisher',
    description: 'Description of book here',
  },
  {
    picture: 'pic-url-2',
    authors: ['Daniel Keyes'],
    categories: ['Fiction'],
    title: 'Flowers for Algernon',
    rating: 4,
    pagesCount: 133,
    postingYear: 2004,
    publisher: 'Houghton Mifflin Harcourt',
    description: 'Description of book here 2',
  },
];
