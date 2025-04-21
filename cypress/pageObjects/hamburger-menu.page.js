export default class HamburgerMenu {
  static open() {
    cy.get("#menu-toggle").click();
  }

  static get sidebar() {
    return cy.get("#sidebar-wrapper");
  }

  static clickHistory() {
    cy.get("#sidebar-wrapper").contains("History").click();
  }
}
