class Bags {
  get forWomen() {
    return;
  }

  get forMen() {
    return;
  }

  get content() {
    return cy.get("#nvcat3250018v-content");
  }

  get forMenbags() {
    return this.content.find("#nvcat3250019v-button");
  }

  get forMenbagsContent() {
    return cy.get("#nvcat3250019v-content");
  }

  openformenBags() {
    this.forMenbags.click();
  }

  openformenAllHandbags() {
    this.forMenbagsContent.contains("All Handbags").click();
  }

  // functonThatReturnsValue(): string {
  //   //
  //   ///
  //   ///
  //   //find the back
  //   //return bacgs
  //   return "Yomi";
  // }

  // functionThatDoesNotReturnValue(): void {}

  // TestFunction() {
  //   let ay = this.functonThatReturnsValue();
}

export const bags = new Bags();
