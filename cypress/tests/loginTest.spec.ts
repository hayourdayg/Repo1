import { identificationModal } from "../modal/identification/identificationModal";
import { navbar } from "../pages/navbar/navbar";
import { profilePage } from "../pages/myprofile/profile";
import { devToolModal } from "../modal/devTool/devtool";

describe("My Second Test Suite", function () {
  it("logintEST", function () {
    cy.visit("https://fr-i3f.louisvuitton.com/", { timeout: 10000 });
  });
});

describe("My simple first test", () => {
  it("sampleLoginTest", () => {
    expect(true).to.equal(true);
    navbar.clickMyLv();
    identificationModal.email.should("be.visible");
    identificationModal.enterLogin("Twistt2iNRT@yahoo.com");
    identificationModal.enterPassword("Sam_son002&@%");
    identificationModal.clickSignIn();
    // navbar.openMenuBar.new.clickLouisVuittonXYayoiKusama();
    //navbar.clickMyLv();
    profilePage.nav;
  });

  it("5 should be 5", () => {
    expect(5).to.equal(5);
  });

  describe("My simple first test", () => {
    it("sampleLoginTest", () => {
      expect(true).to.equal(true);
    });
  });
});
