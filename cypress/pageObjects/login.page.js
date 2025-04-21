export default class LoginPage {
    static enterLogin(text) {
        cy.get("#txt-username").type(text);
    }

    static enterPassword(text) {
        cy.get("#txt-password").type(text);
    }

    static clickLogin() {
        cy.get("#btn-login").click();
    }
}