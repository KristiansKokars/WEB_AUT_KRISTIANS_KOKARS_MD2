import HomePage from "../pageObjects/home.page";
import LoginPage from "../pageObjects/login.page";
import MakeAppointmentPage from "../pageObjects/make-appointment.page";

describe("Appointment", () => {
  it("should be made succesfully after logging in", () => {
    HomePage.visit();
    HomePage.clickMakeAppointment();

    LoginPage.enterLogin("John Doe");
    LoginPage.enterPassword("ThisIsNotAPassword");
    LoginPage.clickLogin();

    const facility = "Seoul CURA Healthcare Center";
    const day = "30";
    const comment = "CURA Healthcare Service";

    MakeAppointmentPage.selectFacility(facility);
    MakeAppointmentPage.checkHospitalReadmission();
    MakeAppointmentPage.selectMedicaid();
    MakeAppointmentPage.selectDayForCurrentMonth(day);
    MakeAppointmentPage.enterComment(comment);
    MakeAppointmentPage.bookAppointment();

    MakeAppointmentPage.facility.should("have.text", facility);
    MakeAppointmentPage.hospitalReadmissionCheckbox.should("have.text", "Yes");
    MakeAppointmentPage.program.should("have.text", "Medicaid");
    // can technically have a false positive on the year of 2030 or 2130 if god forbid someone still uses this code, but that is too much of an edge case for a homework
    MakeAppointmentPage.visitDate.should("include.text", day);
    MakeAppointmentPage.comment.should("have.text", comment);
  });
});
