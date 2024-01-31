class CountryRegion {
  selectCountry(country: string) {
    cy.xpath(`//span[text()='${country}']`).click();
  }
}

export const countryRegion = new CountryRegion();
