class ModalBase {
  get modalContent() {
    return cy.get("#modalContent");
  }

  get modalTitle() {
    return cy.get("#modalTitle");
  }

  close() {
    this.modalTitle.parent().find('[aria-label="Close"]').click();
  }
}
