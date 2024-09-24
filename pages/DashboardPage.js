import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage {

  // ADD YOUR LOCATORS HERE...
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    super(page);
    this.userProfileImage = page.locator("#navbarDropdown");
    this.logoutButton = page.locator(".dropdown-item");
    this.booksLink = page.locator("a[href='#books']");
  }



}
