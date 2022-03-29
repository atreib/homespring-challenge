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
  });

  it("Should fetch books on server side", () => {
    cy.visit("http://localhost:3000/");
    MOCK_BOOKS.forEach((book) => cy.contains(book.title));
  });

  it("Should show the book's title for each fetched book");
  it("Should show the book's thumbnail for each fetched book if exists");
  it("Should show the placeholder if book doesnt have a thumbnail");
  it("Should show the book's authors for each fetched book");
  it("Should show the book's categories for each fetched book");
  it("Should show the book's page count for each fetched book");
  it("Should show the book's rating for each fetched book through stars");
  it("Should show the book's publishing year for each fetched book");
  it("Should show the book's publisher for each fetched book");
  it("Should show the book's description for each fetched book");
});

const asModule = {};
export default asModule;
