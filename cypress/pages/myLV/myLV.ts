class MyLV {
  openMyProfile() {
    cy.get(".lv-header-icon-account > .lv-header__utility-label").click();
  }

  clickMyAppointment() {
    cy.get("nav > .lv-list > :nth-child(6) > .lv-smart-link").click();
  }

  clickBookAppointment() {
    cy.get(".lv-appointment-upcoming > .lv-smart-link").click();
  }
}

export const myLV = new MyLV();
