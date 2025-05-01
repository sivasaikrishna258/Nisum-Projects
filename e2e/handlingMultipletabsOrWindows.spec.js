
import { test, expect, chromium } from '@playwright/test';

test('handling multiple tabs', async () => {

  // Launch a new instance of the Chromium browser
  const browser = await chromium.launch();

  // Create a new browser context (like a new incognito window)
  const context = await browser.newContext();

  // Open a new page (tab) within the context
  const page = await context.newPage();

  // Navigate to the OrangeHRM login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Prepare to wait for a new page (tab) to open as a result of a user action
  const hrmPagepromise = context.waitForEvent('page');

  // Click the "OrangeHRM" link that opens in a new tab/window
  await page.locator("a[href='http://www.orangehrm.com']").click();

  // Wait for the new page to be fully available and assign it to a variable
  const hrmPage = await hrmPagepromise;

  // Log the title of the newly opened page
  console.log(await hrmPage.title());

  // Pause execution for 10 seconds (typically used for demo or debugging purposes)
  await page.waitForTimeout(10000);
});


test.only('handling multiple windows/popups', async () => {

  // Launch a new instance of the Chromium browser
  const browser = await chromium.launch();

  // Create a new browser context (like a new incognito window)
  const context = await browser.newContext();

  // Open a new page (tab) within the context
  const page = await context.newPage();

  // Navigate to the popup demo site
  await page.goto("https://qaplayground.dev/apps/popup/#");

  // Set up a listener to wait for the popup (child window)
  const popupPromise = page.waitForEvent('popup');

  // Click the login button that triggers the popup
  await page.locator("#login").click();

  // Wait for the popup to open and assign it to a variable
  const popup = await popupPromise;

  // Click the "Submit" button inside the popup window
  await popup.getByText("Submit").click();

  // Print the title of the popup window
  console.log(await popup.title());

  // Wait for 10 seconds (useful for manual observation or debugging)
  await page.waitForTimeout(10000);
});
