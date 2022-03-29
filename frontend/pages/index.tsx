import { useState } from "react";
import { serialize } from "superjson";
import { BookCard } from "../components/domain/books/Card";
import { ThemeLayout } from "../components/layout/Theme";
import { Book } from "../models/book";
import { getBooks } from "../services/books";

interface HomePage {
  books: Book[];
}

const Home = ({ books: initialBooksValue }: HomePage) => {
  const [books] = useState<Book[]>(initialBooksValue);

  return (
    <ThemeLayout>
      {books?.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </ThemeLayout>
  );
};

export const getServerSideProps = async () => {
  const books = (await getBooks()) ?? [];

  return {
    props: {
      books: serialize(books).json,
    },
  };
};

export default Home;
