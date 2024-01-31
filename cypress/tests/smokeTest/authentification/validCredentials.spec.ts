import { identificationModal } from "../../../modal/identification/identificationModal";
import { loginPage } from "../../../pages/identification/loginPage";
import { navbar } from "../../../pages/navbar/navbar";

describe("Verify valid authentication is successful", () => {
  beforeEach(() => {
    cy.visit("/mylv/overview");
  });

  it("Verify existing User can login successfully", () => {
    loginPage.enterEmail("Twistt2iNRT@yahoo.com");
    loginPage.enterPassword("Sam_son002&@%");
    loginPage.clickSubmit();

    // if login is succesful, then identication modal should not
    // show.
    cy.scrollTo("top");
    navbar.clickMyLv();
    identificationModal.modalContainer.should("not.exist");
  });
});
