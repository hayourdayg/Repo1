class SearchInput {
  enterSearchInput(input: string) {
    cy.get("#searchHeaderInput").type(input);
  }
}
export const searchInput = new SearchInput();
