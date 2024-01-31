import { identificationModal } from "../../../modal/identification/identificationModal";
import { myLV } from "../../../pages/myLV/myLV";
import { navbar } from "../../../pages/navbar/navbar";

describe("My Second Test Suite", function () {
  it("logintEST", function () {
    cy.visit("https://louisvuitton.com");
    navbar.clickMyLv();
    identificationModal.enterLogin("ayobabatunde.ext@louisvuitton.com");
    identificationModal.enterPassword("Babatunde_001&");
    identificationModal.changePassword.click();
    //identificationModal.clickSignIn();
    //myLV.openMyProfile();
  });
});
