class Appointment {
  get appointmentHistory() {
    return cy.get("");
  }

  get searchButton() {
    return cy.get("form.lv-address-search-form__form>button");
  }

  get calender() {
    return cy.get("#modalContent");
  }

  get monthName() {
    return cy.get(".vc-title");
  }

  clickbookStoreOrVirtualAppointment() {
    cy.get(".lv-appointment-upcoming > .lv-smart-link").click();
  }

  searchLocation(location: string) {
    cy.get("form.lv-address-search-form__form>input").type(location);
    //this.searchButton.click(); //input element
  }

  clickSearchButton() {
    this.searchButton.click();
  }

  selectDatePicker() {
    cy.get(".lv-input-base__wrap > input").click();
  }

  pickDateForAppointment() {
    cy.get("#modalContent").contains("22").click({ force: true });
  }
  calendisplay() {
    cy.get("#modalContent").should("be.visible");
  }

  confirmDateSelected() {
    cy.get(".lv-modal__footer").click();
  }

  chooseAppointmentType() {
    cy.get("#UFA-inStore").click();
  }

  selectAppointmentSlot() {
    cy.get(".lv-appointment-slot__slots > :nth-child(1) > .lv-button").click();
  }

  clickConfirmAppointment() {
    cy.get(".-primary").click({ multiple: true });
  }
  myAppointMentHistory() {
    return this.appointmentHistory;
  }
}

export const appointment = new Appointment();
