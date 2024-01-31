class CheckOutPage {
  //Function to enter address
  addressForm() {
    return cy.get("#address-manager-form");
  }
}
export const checkOutPage = new CheckOutPage();
