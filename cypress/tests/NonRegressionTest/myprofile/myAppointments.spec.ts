import { appointment } from "../../../pages/appointment/appointment";
import { countryRegion } from "../../../pages/country/country";
import { identificationModal } from "../../../modal/identification/identificationModal";
import { myLV } from "../../../pages/myLV/myLV";

describe("Book an appointment from MyLV", function () {
  it("Virtual or Inperson Appointment", function () {
    cy.visit("https://us-i3f.louisvuitton.com");
    countryRegion.selectCountry("USA");
    myLV.openMyProfile();
    identificationModal.enterLogin("Twistt2iNRT@yahoo.com");
    identificationModal.enterPassword("Sam_son002&@%");
    identificationModal.clickSignIn();
    myLV.clickMyAppointment();
    appointment.clickbookStoreOrVirtualAppointment();
    appointment.searchLocation("New York");
    appointment.clickSearchButton();
    appointment.selectDatePicker();
    appointment.calendisplay();
    appointment.pickDateForAppointment();
    appointment.confirmDateSelected();
    appointment.selectAppointmentSlot();
    appointment.chooseAppointmentType();
    appointment.clickConfirmAppointment();
  });
});
