import { women } from "../../../pages/menuBar/women";
import { menuBar } from "../../../pages/menuBar/menuBar";
import { navbar } from "../../../pages/navbar/navbar";

describe("Mega menu test ", function () {
  before(function () {
    cy.visit("https://louisvuitton.com");
  });

  beforeEach(function () {
    navbar.openMenuBar();
    menuBar.openWomenCat();
  });
  it("Womens Entry", function () {
    women.content.should("contain.text", "Highlights");
    women.content.should("contain.text", "Handbags");
  });

  it("Validate ready to wear", function () {
    women.content.should("contain", "Ready-to-Wear");
    women.openReadytowear();
    women.openReadytowearCoats();
  });
});
