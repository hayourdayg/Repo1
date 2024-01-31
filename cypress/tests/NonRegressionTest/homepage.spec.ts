import { countryRegion } from "../../pages/country/country";
import { homePage } from "../../pages/home/home";

describe("HomePage components ", function () {
  //before(function () {
  it("Homepage test ", function () {
    cy.visit("https://us-i3f.louisvuitton.com");
    countryRegion.selectCountry("USA");
    homePage.verifySearchIcon;
    homePage.verifyMyLvIcon();
    homePage.clickOnSearchIcon();
    homePage.enterSearchInput("M41414");
  });
});
