import { menuBar } from "../../../pages/menuBar/menuBar";
import { navbar, Navbar } from "../../../pages/navbar/navbar";
import { yayoiKusama } from "../../../pages/menuBar/yayoiKusama";

describe("Mega menu test ", function () {
  it("YayoiKukama's entry", function () {
    cy.visit("https://louisvuitton.com");
    navbar.openMenuBar();
    menuBar.OpenYayoiKusamaCat();
    yayoiKusama.content.should(
      "contain.text",
      "Louis Vuitton x Yayoi Kusama Collaboration"
    );
    yayoiKusama.content.should("contain.text", "For Her");
  });
});
