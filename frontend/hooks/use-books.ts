import { useEffect, useState } from "react";
import { Book } from "../models/book";
import { getBooks } from "../services/books";
import { Paginated } from "../utils/pagination";

const useBooks = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [books, setBooks] = useState<Paginated<Book>>();

  useEffect(() => {
    getBooks()
      .then((_books) => setBooks(_books ?? []))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return {
    books,
    loading,
    error,
  };
};

export { useBooks };
