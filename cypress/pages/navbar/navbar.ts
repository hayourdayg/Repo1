import { menuBar } from "../menuBar/menuBar";

export class Navbar {
  openMenuBar() {
    cy.get("#mobile-menu-toggler").click({ force: true });
  }

  get myLV() {
    return cy.get(".lv-header-icon-account > .lv-header__utility-label");
  }

  get searchButton() {
    return cy.get(".lv-button > .lv-header__utility-label");
  }

  //Openmenu
  //search
  //mylv

  clickMyLv() {
    this.myLV.click();
  }
}

export const navbar = new Navbar();
