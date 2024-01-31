import { countryRegion } from "../../../pages/country/country";
import { contactUsPage } from "../../../pages/emailUs/contactUs";

describe("Email Us in Footer", function () {
  it("ClickOnEmail Us on Footer", function () {
    cy.visit("https://us-i3f.louisvuitton.com");
    countryRegion.selectCountry("USA");
    contactUsPage.clickContactUslink();
    contactUsPage.selectTitle("Mr");
    contactUsPage.enterFirstName("Ayodeji");
    contactUsPage.enterLastName("babs");
    contactUsPage.enterEmailForm("chrisdave@yahoo.com");
    contactUsPage.selectPhoneType("Home");
    contactUsPage.enterPhoneNumber("212-777-8888");
    contactUsPage.selectContactLanguage("English");
    contactUsPage.selectSubjectMessage("Product Information");
    contactUsPage.contactUsMessageContext(
      "I would like to know about Vigil abloh sneaker"
    );
    contactUsPage.clickOnSendMessage();
    cy.contains("Your message has been sent successfully").should("be.visible");
  });
});
