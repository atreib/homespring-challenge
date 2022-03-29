import { BookCard } from "../components/domain/books/Card";
import { ThemeLayout } from "../components/layout/Theme";
import { useBooks } from "../hooks/use-books";

const Home = () => {
  const { books, loading } = useBooks();

  return (
    <ThemeLayout>
      {loading && <h1>Loading...</h1>}
      {!loading &&
        books?.data.map((book, i) => <BookCard key={i} book={book} />)}
    </ThemeLayout>
  );
};

export default Home;
