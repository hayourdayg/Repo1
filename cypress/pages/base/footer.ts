class FooterSection {
  openDevtool() {
    cy.contains("Devtool").click();
  }
}

export const footerSection = new FooterSection();
