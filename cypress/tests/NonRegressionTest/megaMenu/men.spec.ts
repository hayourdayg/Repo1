import { men } from "../../../pages/menuBar/men";
import { menuBar } from "../../../pages/menuBar/menuBar";
import { navbar } from "../../../pages/navbar/navbar";

describe("Mega menu test ", function () {
  before(function () {
    cy.visit("https://louisvuitton.com");
  });

  beforeEach(function () {
    navbar.openMenuBar();
    menuBar.openMenCat();
  });

  it("Men's entry", function () {
    men.content.should("contain.text", "Bags");
    men.content.should("contain.text", "Highlights");
  });

  it("Validate ready to wear", function () {
    men.content.should("contain.text", "Ready-to-Wear");
    men.openReadyToWear();
    men.openReadyToWearBlazers();
    cy.url().should("include", "blazers-and-jackets");
    // validate that blazers is open.
  });
  it("Validate All shoes", function () {
    men.content.should("contain.text", "Shoes");
    men.openShoes();
    men.openAllShoesCat();
    cy.url().should("include", "all-shoes");
    men.navigateToProductPage();
  });
});
