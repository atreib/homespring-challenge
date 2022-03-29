import { useEffect, useState } from "react";
import { BookCard } from "../components/domain/books/Card";
import { ThemeLayout } from "../components/layout/Theme";
import { Book } from "../models/book";
import { getBooks } from "../services/books";
import { Paginated } from "../utils/pagination";

const Home = () => {
  const [books, setBooks] = useState<Paginated<Book>>();

  useEffect(() => {
    getBooks().then((_books) => setBooks(_books ?? []));
  }, []);

  return (
    <ThemeLayout>
      {books?.data.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </ThemeLayout>
  );
};

export default Home;
