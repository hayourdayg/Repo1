//type UsStates = "New York" | "Alabama";

class AddressModal {
  get addressForm() {
    return cy.get("#address-manager-form");
  }

  enterDescription(description: string) {
    this.addressForm
      .find("#address-manager-form-description")
      .type(description);
  }
  selectTitle(title: "Mr" | "Mrs" | "Mx" | "Prefer not to say") {
    cy.get("#address-manager-form-title").select(title);
  }

  enterFirstName(firstName: string) {
    //this.addressForm.find("#address-manager-form-firstName").type(firstName);
    cy.get("#address-manager-form-firstName").clear().type(firstName);
  }
  enterLastName(lastName: string) {
    //this.addressForm.find("#address-manager-form-lastName").type(lastName);
    cy.get("#address-manager-form-lastName").clear().type(lastName);
  }
  enterAddressNumberOne(address: string) {
    this.addressForm.find("#address-manager-form-address1").type(address);
  }
  enterCity(city: string) {
    //this.addressForm.find("#address-manager-form-city").type(city);
    cy.get("#address-manager-form-city").clear().type(city);
  }
  enterPostalCode(postal: string) {
    //this.addressForm.find("#address-manager-form-postalCode").type(postal);
    cy.get("#address-manager-form-postalCode").clear().type(postal);
  }
  selectState(state: string) {
    cy.get("#address-manager-form-state").select(state);
  }

  selectPhoneType(phone: "Home" | "Mobile" | "Phone") {
    cy.get("#address-manager-form-phone-phoneNumberType").select(phone);
  }

  enterPhoneNumber(phonenum: string) {
    this.addressForm
      .find("#address-manager-form-phone-phoneNumber")
      .type(phonenum);
  }
  clickBillingAddressBox() {
    cy.get("#address-manager-form-billingSameAsShipping").click();
  }
  clickContinue() {
    cy.get(".lv-modal__contents").contains("Continue").click();
  }
}

export const addressModal = new AddressModal();
