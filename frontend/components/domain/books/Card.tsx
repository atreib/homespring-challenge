/* eslint-disable no-nested-ternary */
import { Book } from "../../../models/book";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => (
  <article className="flex flex-col space-y-4 border-b-2 mb-4 py-4">
    <div className="flex space-x-4 md:space-x-8">
      <div>
        {book.picture !== "" ? (
          <img className="w-14" alt={book.title} src={book.picture} />
        ) : (
          <div className="w-14 h-20 bg-gray-200 flex items-center justify-center text-center">
            No cover
          </div>
        )}
      </div>
      <div className="flex items-center justify-start">
        <ul className="space-y-1">
          <li>{book.authors.join(", ")}</li>
          <li className="text-sm text-gray-400">
            {book.categories.length > 0
              ? book.categories.join(", ")
              : "No category"}
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h2 className="text-xl font-bold text-gray-800">{book.title}</h2>
      <div className="flex space-x-2">
        <span>{book.pagesCount > 0 ? book.pagesCount : "#"} pages</span>

        {book.postingYear > 0 && (
          <>
            <span>-</span>
            <span>{book.postingYear}</span>
          </>
        )}

        <span>-</span>
        <span>{book.publisher}</span>
      </div>
      <div className="pt-4 pb-2">
        {book.description !== ""
          ? book.description.length > 200
            ? `${book.description.slice(0, 200).trim()}...`
            : book.description
          : "No description"}
      </div>
    </div>
  </article>
);

export { BookCard };
