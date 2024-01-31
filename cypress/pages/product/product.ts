class ProductPage {
  addToCart() {
    cy.get(".lv-product-purchase > .lv-loading-button").click(); //.first().click();
  }

  viewBasket() {
    cy.get(".lv-product-add-to-cart__actions > .lv-smart-link").click();
  }
}
export const productPage = new ProductPage();
