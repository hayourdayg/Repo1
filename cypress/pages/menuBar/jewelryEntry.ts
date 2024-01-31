class Jewelry {
  get collections() {
    return;
  }
  get categories() {
    return;
  }
  get highJewelry() {
    return;
  }
  get content() {
    return cy.get("#nvcat3250005v-content");
  }
  clickOnCategories() {
    cy.get("#nvcat3250006v-button > span").click();
  }
  clickOnHighJewelry() {
    cy.get("#nvcat3250005v-content > :nth-child(3) > :nth-child(2)")
      .contains("High Jewelry")
      .click();
  }
}

export const jewelry = new Jewelry();
