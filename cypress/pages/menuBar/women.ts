class Women {
  get hightlights() {
    return cy.get("");
  }

  get handbags() {
    return cy.get("");
  }

  get travel() {
    return cy.get("");
  }

  get accessories() {
    return cy.get("");
  }

  get fashionJewelry() {
    return cy.get("");
  }

  get content() {
    return cy.get("#femme-content");
  }

  get readytowear() {
    return this.content.find("#w-readytowear-button");
  }

  get readytowearContent() {
    return cy.get("#w-readytowear-content");
  }

  openReadytowear() {
    this.readytowear.click();
  }

  openReadytowearCoats() {
    this.readytowearContent.contains("Coats and Jackets").click();
  }

  //Highlights
  //Handbags
  //Travel
  //Accessories
  //Fashion jewelry
  //Clothing
  //content
}

export const women = new Women();
