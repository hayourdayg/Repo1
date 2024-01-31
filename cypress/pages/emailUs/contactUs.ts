class ContactUsPage {
  get emailUsPage() {
    return cy.get('[href="/eng-us/email-us"]');
  }
  get contactForm() {
    return cy.get(".lv-email-us > .lv-gutters");
  }
  clickContactUslink() {
    cy.get('[href="/eng-us/email-us"]').click({ force: true });
  }
  selectTitle(title: "Mr" | "Mrs" | "Mx" | "Prefer not to say") {
    cy.get("#email-us-form-title").select(title);
  }
  enterFirstName(firstname: string) {
    this.contactForm.find("#email-us-form-firstName").type(firstname);
  }
  enterLastName(lastName: string) {
    this.contactForm.find("#email-us-form-lastName").type(lastName);
  }
  enterEmailForm(email: string) {
    this.contactForm.find("#email-us-form-email").type(email);
  }
  selectPhoneType(phone: "Home" | "Mobile" | "Phone") {
    cy.get("#email-us-form-phone-phoneNumberType").select(phone);
  }
  enterPhoneNumber(phonenum: string) {
    this.contactForm.find("#email-us-form-phone-phoneNumber").type(phonenum);
  }
  selectContactLanguage(language: string) {
    cy.get("#email-us-form-language").select(language);
  }
  selectSubjectMessage(subjectmessage: string) {
    cy.get("#email-us-form-subject").select(subjectmessage);
  }
  contactUsMessageContext(message: string) {
    this.contactForm.find("#email-us-form-text").type(message);
  }
  clickOnSendMessage() {
    cy.get(".lv-loading-button > span").click();
  }
}

export const contactUsPage = new ContactUsPage();
