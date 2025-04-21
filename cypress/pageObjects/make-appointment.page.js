export default class MakeAppointmentPage {
  static selectFacility(facility) {
    cy.get("#combo_facility").select(facility);
  }

  static checkHospitalReadmission() {
    // site has mispelled ID
    cy.get("#chk_hospotal_readmission").check();
  }

  static selectMedicaid() {
    cy.get("#radio_program_medicaid").check();
  }

  static selectDayForCurrentMonth(day) {
    cy.get("#txt_visit_date").click();
    cy.get(".datepicker").contains(day).click();
  }

  static enterComment(comment) {
    cy.get("#txt_comment").type(comment);
  }

  static bookAppointment() {
    cy.get("#btn-book-appointment").click();
  }

  static get facility() {
    return cy.get("#facility");
  }

  static get hospitalReadmissionCheckbox() {
    return cy.get("#hospital_readmission");
  }

  static get program() {
    return cy.get("#program");
  }

  static get visitDate() {
    return cy.get("#visit_date");
  }

  static get comment() {
    return cy.get("#comment");
  }
}
