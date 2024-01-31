class OrderEmail {
  get emailOnOrder() {
    return cy.get("#identification-step-form-login");
  }

  get passwordOnOrder() {
    return cy.get("#identification-step-password-form-password");
  }

  get clickContinue() {
    return cy.get(".lv-loading-button");
  }

  get submitOnOrder() {
    return cy.get(".lv-loading-button > span");
  }
  enterEmailOnOrder(input: string) {
    this.emailOnOrder.type(input);
  }
  enterPasswordOnOrder(input: string) {
    this.passwordOnOrder.type(input);
  }
  clickContinueOnOrder() {
    this.clickContinue.click();
  }
  clickSubmitOnOrder() {
    this.submitOnOrder.click();
  }
}

export const orderEmail = new OrderEmail();
