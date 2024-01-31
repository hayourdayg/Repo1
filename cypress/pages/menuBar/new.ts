class New {
  get forWomen() {
    return cy.get("#nvcat1830005v-button");
  }

  get forMen() {
    return cy.get("#nvcat1830006v-button > span");
  }

  get louisVuittonXYayoiKusama() {
    return cy.get(
      ".-active > .-level2 > :nth-child(4) > .lv-megamenu-list__wrapper > .lv-smart-link > span"
    );
  }
  get forBaby() {
    return cy.get("#nvcat3410002v-button > span");
  }
  get content() {
    return cy.get("#nvcat3250018v-content");
  }
  get womenContent() {
    return cy.get("#nvcat1830005v-content");
  }
  clickOnMenSubCat() {
    cy.get("#nvcat1830006v-button > span").click();
  }
  clickOnWomenCat() {
    cy.get("#nvcat1830005v-button").click();
  }
  openWomenCat() {
    this.womenContent.contains("New This Season").click();
  }
  //LouisVuitton X YayoiKusama
  //for women
  //for men
  //for baby

  //clickLouisVuittonXYayoiKusama() {
  // click qrction
}

export const newmenu = new New();
