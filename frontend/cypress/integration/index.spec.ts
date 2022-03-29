import { MOCK_BOOKS } from "./__mocks__/books";

describe("Index Test Suite", () => {
  before(() => {
    cy.intercept(
      {
        method: "GET",
        url: "/books",
      },
      MOCK_BOOKS
    ).as("getBooks");

    cy.visit("http://localhost:3000/");
  });

  it("Should fetch books on server side", () => {
    MOCK_BOOKS.forEach((book) => cy.contains(book.title));
  });

  it("Should render an h2 with the book's title for each fetched book", () => {
    MOCK_BOOKS.forEach((book) => cy.contains("h2", book.title));
  });

  it("Should show the book's thumbnail in an image for each fetched book if exists", () => {
    cy.get("img").each((element, index) => {
      if (MOCK_BOOKS[index].picture !== "") {
        expect(Cypress.$(element).attr("src")).to.eq(MOCK_BOOKS[index].picture);
      }
    });
  });

  it("Should show the placeholder if book doesnt have a thumbnail", () => {
    MOCK_BOOKS.forEach((_book, index) => {
      if (MOCK_BOOKS[index].picture === "") {
        cy.contains("div", "No cover");
      }
    });
  });

  it("Should show the book's authors for each fetched book", () => {
    MOCK_BOOKS.forEach((book) =>
      book.authors.forEach((author) => cy.contains(author))
    );
  });

  it("Should show the book's categories for each fetched book", () => {
    MOCK_BOOKS.forEach((book, index) => {
      if (MOCK_BOOKS[index].categories.length === 0) {
        book.categories.forEach((category) => cy.contains(category));
      }
    });
  });

  it("Should show placeholder if book doesnt have a category", () => {
    MOCK_BOOKS.forEach((_book, index) => {
      if (MOCK_BOOKS[index].categories.length === 0) {
        cy.contains("No category");
      }
    });
  });

  it("Should show the book's page count for each fetched book", () => {
    MOCK_BOOKS.forEach((book) => {
      if (book.pagesCount > 0) cy.contains("span", `${book.pagesCount} pages`);
    });
  });

  it("Should show # if book's page is lesser than or equal to 0", () => {
    MOCK_BOOKS.forEach((book) => {
      if (book.pagesCount <= 0) cy.contains("span", `# pages`);
    });
  });

  it("Should show the book's rating for each fetched book through stars");

  it("Should show the book's posting year for each fetched book", () => {
    MOCK_BOOKS.forEach((book) => {
      if (book.postingYear > 0) {
        cy.contains("span", book.postingYear);
      }
    });
  });

  it("Should show the book's publisher for each fetched book");
  it("Should show the book's description for each fetched book");
});

const asModule = {};
export default asModule;
