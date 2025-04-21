export default class HomePage {
  static visit() {
    cy.visit("https://katalon-demo-cura.herokuapp.com/");
  }

  static clickMakeAppointment() {
    cy.get("#btn-make-appointment").click();
  }
}
