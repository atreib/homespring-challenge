import { Book } from "../models/book";
import { Paginated } from "../utils/pagination";
import { BOOKS_API, getErrorMessage } from "./apis/books";

/**
 * Fetch books from the back-end
 * @returns a list of Books
 */
export const getBooks = async (): Promise<Paginated<Book>> => {
  try {
    return (await BOOKS_API.get(`books/`)).data;
  } catch (err) {
    throw new Error(getErrorMessage(err));
  }
};
