class Newsletter {
  clickSignUp() {
    cy.get(".lv-footer-categories-detail__text").contains("Sign up").click({
      force: true,
    });
  }
  get newsletterPage() {
    return cy.get(".lv-newsletter__main");
  }
  selectTitle(title: "Mr" | "Mrs" | "Mx" | "Prefer not to say") {
    cy.get("#newsletter-form-titleId").select(title);
  }
  enterFirstName(name: string) {
    this.newsletterPage.find("#newsletter-form-firstName").type(name);
  }
  enterLastName(lastName: string) {
    this.newsletterPage.find("#newsletter-form-lastName").type(lastName);
  }
  selectCountry(country: string) {
    cy.get("#newsletter-form-countryId").select(country);
  }
  enterEmailForNewsletter(email: string) {
    this.newsletterPage.find("#newsletter-form-email").type(email);
  }
  emailConfirmationForNewsletter(emailconfirm: string) {
    this.newsletterPage
      .find("#newsletter-form-emailConfirmation")
      .type(emailconfirm);
  }
  clickOnSubmit() {
    cy.get(".lv-form-container__action").contains("Proceed").click();
  }
}
export const newsletter = new Newsletter();
