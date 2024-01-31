class DeliveryOptions {
  get deliveryOptions() {
    return cy.get(".lv-modal -sidepanel");
  }

  get postalCode() {
    return cy.get("#shipping-methods-form-postalCode");
  }

  get continueCta() {
    return cy.get(".lv-loading-button > span");
  }
  get shippingOption() {
    return cy.get("#OVERNIGHT_UPS_0003900010_4");
  }

  clickNewAddress() {
    this.deliveryOptions.find("");
  }

  enterPostalCode(input: string) {
    this.postalCode.type(input);
  }
  clickContinue() {
    this.continueCta.click();
  }
  selectShippingOption() {
    this.shippingOption.click();
  }
}

export const deliveryOptions = new DeliveryOptions();
