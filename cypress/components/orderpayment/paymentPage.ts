import "cypress-iframe";

class PaymentPage {
  get paymentModal() {
    return cy.get("#modalContent");
  }
  clickCreditCard() {
    cy.get("#pUSCCFO").click();
  }
  creditcardNumber(creditNum: string) {
    cy.frameLoaded(".lv-cybs-microform__iframe-wrap")
      //cy.iframe()
      .find("#number")
      .type(creditNum)
      //.find("iframe")
      .should((iframe) => expect(iframe.contents().find("body")).to.exist);
    // .then((iframe) => cy.wrap(iframe.contents().find("body")))
    // .within({}, ($iframe) => {
    //   cy.get("#number").type(creditNum);
    // });
    //.then((ele) => {
    //cy.wrap(ele.contents().find("body")).find("#number").type(creditNum);
    //});
    //.find("#number")
    //.type(creditNum);
  }

  creditcardName(name: string) {
    this.paymentModal.find("#cybs-creditCardHoldersName").type(name);
  }
  creditCardExpirationdate(expiredate: string) {
    this.paymentModal.find("#cybs-creditCardExpirationDate").type(expiredate);
  }
  creditCardCode(cardcode: string) {
    this.paymentModal.find("#securityCode").type(cardcode);
  }
  clickContinue() {
    cy.get(".lv-modal__contents").contains("Continue").click();
  }
}

export const paymentPage = new PaymentPage();
