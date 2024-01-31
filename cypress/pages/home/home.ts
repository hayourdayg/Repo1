class HomePage {
  get headerTitle() {
    return cy.get("#header");
  }
  get emailUsPage() {
    return cy.get('[href="/eng-us/email-us"]');
  }

  enterSearchInput(input: string) {
    cy.get("#searchHeaderInput").type(input);
  }

  verifySearchIcon() {
    cy.get(".-search > div > .lv-button").should("be.visible");
  }

  verifyMyLvIcon() {
    cy.get(".lv-header-icon-account > .lv-header__utility-label").should(
      "be.visible"
    );
  }

  clickOnSearchIcon() {
    cy.get(".-search > div > .lv-button").click();
  }

  clickContactUslink() {
    cy.get('[href="/eng-us/email-us"]').click({ force: true });
  }
  useGet() {
    this.headerTitle;
  }
}

export const homePage = new HomePage();
