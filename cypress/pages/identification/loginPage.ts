class LoginPage {
  get myLV() {
    return cy.get(".lv-header-icon-account > .lv-header__utility-label");
  }

  get loginForm() {
    return cy.get("#login-form");
  }

  get email() {
    return cy.get("#login-form-login");
  }

  get password() {
    return cy.get("#login-form-password");
  }

  get submit() {
    return this.loginForm.find('button[type="submit"]');
  }

  get passwordError() {
    return this.loginForm.find("#password-error-message");
  }

  get errorMessage() {
    return this.loginForm.find(".error-msg");
  }

  enterEmail(input: string) {
    this.email.type(input);
  }

  enterPassword(input: string) {
    this.password.type(input);
  }

  clickSubmit() {
    this.submit.click();
  }
}

export const loginPage = new LoginPage();
