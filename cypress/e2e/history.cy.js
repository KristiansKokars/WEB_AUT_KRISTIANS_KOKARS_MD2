import HamburgerMenu from "../pageObjects/hamburger-menu.page";
import HistoryPage from "../pageObjects/history.page";
import HomePage from "../pageObjects/home.page";
import LoginPage from "../pageObjects/login.page";

describe("History", () => {
  it("should be empty after logging in", () => {
    HomePage.visit();
    HomePage.clickMakeAppointment();

    LoginPage.enterLogin("John Doe");
    LoginPage.enterPassword("ThisIsNotAPassword");
    LoginPage.clickLogin();

    HamburgerMenu.open();
    HamburgerMenu.sidebar.should("have.class", "active");
    HamburgerMenu.clickHistory();

    HistoryPage.noAppointmentText.should("be.visible");
  });
});
