import { jewelry } from "../../../pages/menuBar/jewelryEntry";
import { menuBar } from "../../../pages/menuBar/menuBar";
import { navbar } from "../../../pages/navbar/navbar";

describe("Mega menu Test", function () {
  it("Jewelry Entry", function () {
    cy.visit("https://louisvuitton.com");
    navbar.openMenuBar();
    menuBar.openJewelryCat();
    jewelry.content.should("contain.text", "Collections");
    jewelry.content.should("contain.text", "Categories");
    jewelry.clickOnCategories();
    jewelry.clickOnHighJewelry();
  });
});
