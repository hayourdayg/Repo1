class Men {
  // get gift() {
  //   return cy.get("");
  // }

  get content() {
    return cy.get("#homme-content");
  }
  get readyToWear() {
    return this.content.find("#m-readytowear-button");
  }
  get ShoesCat() {
    return this.content.find("#m-category-cat10037-button");
  }

  get readyToWearContent() {
    return cy.get("#m-readytowear-content");
  }
  get allShoesContent() {
    return cy.get("#m-category-cat10037-content");
  }
  openReadyToWear() {
    this.readyToWear.click();
  }

  openReadyToWearBlazers() {
    this.readyToWearContent.contains("Blazers and Jackets").click();
  }
  openShoes() {
    this.ShoesCat.click({ force: true });
  }
  openAllShoesCat() {
    this.allShoesContent.contains("All Shoes").click();
  }

  navigateToProductPage() {
    cy.get("#product-1ABD19 > .lv-smart-link").click();
  }
  //gift
  //highlights
  //for men
}

export const men = new Men();
