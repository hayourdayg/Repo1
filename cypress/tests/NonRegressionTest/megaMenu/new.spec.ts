import { newmenu } from "../../../pages/menuBar/new";
import { menuBar } from "../../../pages/menuBar/menuBar";
import { navbar } from "../../../pages/navbar/navbar";

describe("Mega menu Test", function () {
  it("New Entry", function () {
    cy.visit("https://louisvuitton.com");
    navbar.openMenuBar();
    menuBar.opennewCat();
    newmenu.content.should("contain.text", "For Men");
    newmenu.content.should("contain.text", "For Women");
    newmenu.clickOnMenSubCat();
    newmenu.clickOnWomenCat();
    newmenu.openWomenCat();
  });
});
