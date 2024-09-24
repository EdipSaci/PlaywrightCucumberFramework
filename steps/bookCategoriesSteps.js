import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';
import { PageManager } from "../globalPagesSetup.js";

// WRITE YOUR STEP DEFINITIONS HERE...
When('user click the Books link', async function () {
  await PageManager.dashboardPage.booksLink.click();
});

When('user clicks the book categories drop down', async function () {
  await PageManager.booksPage.bookCategoriesDropDown.click();
  await PageManager.page.waitForTimeout(2000)
});

Then('user should see {int} book categories', async function (int) {
  const bookCategoriesCount = await PageManager.booksPage.bookCategoriesDropDown.locator("option").count();
  console.log("book count "+ bookCategoriesCount);
  expect(bookCategoriesCount).toBe(int);
});

Then('book category name {string} should be included in the categories', async function (string) {       
    const options = await PageManager.booksPage.bookCategoriesDropDown.locator("option").allInnerTexts();
    expect(options).toContain(string);
});