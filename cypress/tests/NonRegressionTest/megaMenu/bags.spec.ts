import { countryRegion } from "../../../pages/country/country";
import { bags } from "../../../pages/menuBar/bags";
import { menuBar } from "../../../pages/menuBar/menuBar";
import { navbar } from "../../../pages/navbar/navbar";

describe("Mega menu test ", function () {
  before(function () {
    cy.visit("https://louisvuitton.com");
    countryRegion.selectCountry("USA");
  });

  beforeEach(function () {
    navbar.openMenuBar();
    menuBar.openbagsCat();
  });

  it("Bags entry", function () {
    bags.content.should("contain.text", "For Women");
    bags.content.should("contain.text", "For Men");
  });

  it("Validate AllMenbags", function () {
    bags.content.should("contain.text", "All Handbags");
    bags.openformenBags();
    bags.openformenAllHandbags();
    cy.url().should("include", "/bags/for-women/all-handbags");
  });
});
