class PredictiveSearchProduction {
  get seachResult() {
    return cy.get(".lv-predictive-product > .lv-smart-link");
  }

  clickFirstProduction() {
    this.seachResult.first().click({ multiple: true }); //first().click();
  }
}

export const predictiveSearchProduction = new PredictiveSearchProduction();
