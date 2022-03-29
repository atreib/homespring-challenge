describe("Index Test Suite", () => {
  it("Should show Hello World on heading", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Hello world");
  });
});

const asModule = {};
export default asModule;
