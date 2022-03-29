import { Book } from "../models/book";

export const MOCK_BOOKS: Book[] = [
  {
    picture: "",
    authors: ["Unknown author"],
    categories: [],
    title: "Unknown title",
    rating: 0,
    pagesCount: 0,
    postingYear: 0,
    publisher: "Unknown publisher",
    description: "",
  },
  {
    picture:
      "http://books.google.com/books/content?id=8Pr_kLFxciYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    authors: ["Daniel Keyes"],
    categories: ["Fiction"],
    title: "Flowers For Algernon",
    rating: 5,
    pagesCount: 224,
    postingYear: 2012,
    publisher: "Hachette UK",
    description:
      "The classic novel about a daring experiment in human intelligence Charlie Gordon, IQ 68, is a floor sweeper and the gentle butt of everyone's jokes - until an experiment in the enhancement of human intelligence turns him into a genius. But then Algernon, the mouse whose triumphal experimental transformation preceded his, fades and dies, and Charlie has to face the possibility that his salvation was only temporary.",
  },
];

/**
 * Fetch books from the back-end
 * @returns a list of Books
 */
export const getBooks = (): Promise<Book[]> =>
  new Promise((resolve) => resolve(MOCK_BOOKS));
