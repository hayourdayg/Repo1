class IdentificationModal extends ModalBase {
  get email() {
    return this.modalContent.find("#login-form-login");
  }

  get password() {
    return this.modalContent.find("#login-form-password");
  }

  get signIn() {
    return this.modalContent.find('button[type="submit"]');
  }

  get createAccount() {
    return cy.contains("create-account");
  }

  get changePassword() {
    return cy.get(".lv-input-password__forgot-pwd-link");
  }

  enterLogin(input: string) {
    this.email.type(input);
  }

  enterPassword(input: string) {
    this.password.type(input);
  }

  clickSignIn() {
    this.signIn.click();
  }

  clickCreateAccount() {
    this.createAccount.click();
  }
}

export const identificationModal = new IdentificationModal();
