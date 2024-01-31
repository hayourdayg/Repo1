import { newsletter } from "../../../pages/newsLetter/newsLetterSubscription";

describe("Newsletter Subscription", function () {
  it("Subscribe to Newsletter ", function () {
    cy.visit("https://us-i3f.louisvuitton.com/eng-us/homepage");
    newsletter.clickSignUp();
    newsletter.selectTitle("Mrs");
    newsletter.enterFirstName("dave");
    newsletter.enterLastName("Chapelle");
    newsletter.enterEmailForNewsletter("chapelle@yahoo.com");
    newsletter.emailConfirmationForNewsletter("chapelle@yahoo.com");
    newsletter.clickOnSubmit();
  });
});
