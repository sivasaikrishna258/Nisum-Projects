# Test info

- Name: handling multiple windows/popups
- Location: C:\Users\sadvanapu\PlayWrightDemo\e2e\handlingMultipletabsOrWindows.spec.js:35:6

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\sadvanapu\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
    at C:\Users\sadvanapu\PlayWrightDemo\e2e\handlingMultipletabsOrWindows.spec.js:38:34
```

# Test source

```ts
   1 |
   2 | import { test, expect, chromium } from '@playwright/test';
   3 |
   4 | test('handling multiple tabs', async () => {
   5 |
   6 |   // Launch a new instance of the Chromium browser
   7 |   const browser = await chromium.launch();
   8 |
   9 |   // Create a new browser context (like a new incognito window)
  10 |   const context = await browser.newContext();
  11 |
  12 |   // Open a new page (tab) within the context
  13 |   const page = await context.newPage();
  14 |
  15 |   // Navigate to the OrangeHRM login page
  16 |   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  17 |
  18 |   // Prepare to wait for a new page (tab) to open as a result of a user action
  19 |   const hrmPagepromise = context.waitForEvent('page');
  20 |
  21 |   // Click the "OrangeHRM" link that opens in a new tab/window
  22 |   await page.locator("a[href='http://www.orangehrm.com']").click();
  23 |
  24 |   // Wait for the new page to be fully available and assign it to a variable
  25 |   const hrmPage = await hrmPagepromise;
  26 |
  27 |   // Log the title of the newly opened page
  28 |   console.log(await hrmPage.title());
  29 |
  30 |   // Pause execution for 10 seconds (typically used for demo or debugging purposes)
  31 |   await page.waitForTimeout(10000);
  32 | });
  33 |
  34 |
  35 | test.only('handling multiple windows/popups', async () => {
  36 |
  37 |   // Launch a new instance of the Chromium browser
> 38 |   const browser = await chromium.launch();
     |                                  ^ Error: browserType.launch: Executable doesn't exist at C:\Users\sadvanapu\AppData\Local\ms-playwright\chromium-1169\chrome-win\chrome.exe
  39 |
  40 |   // Create a new browser context (like a new incognito window)
  41 |   const context = await browser.newContext();
  42 |
  43 |   // Open a new page (tab) within the context
  44 |   const page = await context.newPage();
  45 |
  46 |   // Navigate to the popup demo site
  47 |   await page.goto("https://qaplayground.dev/apps/popup/#");
  48 |
  49 |   // Set up a listener to wait for the popup (child window)
  50 |   const popupPromise = page.waitForEvent('popup');
  51 |
  52 |   // Click the login button that triggers the popup
  53 |   await page.locator("#login").click();
  54 |
  55 |   // Wait for the popup to open and assign it to a variable
  56 |   const popup = await popupPromise;
  57 |
  58 |   // Click the "Submit" button inside the popup window
  59 |   await popup.getByText("Submit").click();
  60 |
  61 |   // Print the title of the popup window
  62 |   console.log(await popup.title());
  63 |
  64 |   // Wait for 10 seconds (useful for manual observation or debugging)
  65 |   await page.waitForTimeout(10000);
  66 | });
  67 |
```