class ShoppingCartPage {
  clickFirstProceedToCheckout() {
    cy.get(
      ".lv-cart__details > :nth-child(1) > .lv-cart__actions > .lv-loading-button"
    )
      .first()
      .click();
  }
}
export const proceedtocheckoutPage = new ShoppingCartPage();
