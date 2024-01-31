import { newmenu } from "./new";

class MenuBar {
  //You will create getter or method for each

  opennewCat() {
    cy.get("#nvcat1830004v-button").click();
  }

  openMenCat() {
    cy.get("#homme-button").click({ force: true });
  }
  openWomenCat() {
    cy.get("#femme-button").click({ force: true });
  }
  OpenYayoiKusamaCat() {
    cy.get("#nvcat3440009v-button").click();
  }
  openJewelryCat() {
    cy.get("#nvcat3250005v-button").click();
  }

  openbagsCat() {
    cy.get("#nvcat3250018v-button").click({ force: true });
  }

  //New
  //Men
  //Bags
  //Women
  //close
}

export const menuBar = new MenuBar();
