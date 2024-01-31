import { loginPage } from "../../../pages/identification/loginPage";

describe("Verify invalid authentication is not successful", () => {
  beforeEach(() => {
    cy.visit("/mylv/overview");
  });

  it("Verify User can not login with invalid credentials", () => {
    loginPage.enterEmail("sample@email.com");
    loginPage.enterPassword("samplepassword");
    loginPage.clickSubmit();
    loginPage.passwordError.should("exist");
    loginPage.errorMessage.should(
      "have.text",
      "Profil inconnu : veuillez verifier votre identifiant ou votre mot de passe"
    );
  });
});
