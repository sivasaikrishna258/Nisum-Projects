// (async () => {
//     const browser = await firefox.launch();  // Or 'chromium' or 'webkit'.
//     * Create a new incognito browser context.
//     const context = await browser.newContext();
   // *Create a new page in a pristine context.
//     const page = await context.newPage();
//     await page.goto('https://example.com');
  
    // *Gracefully close up everything
//     await context.close();
//     await browser.close();
//   })();

/**
 * What is Test Isolation?
Test Isolation is when each test is completely isolated from another test. 
Every test runs independently from any other test. 
This means that each test has its own local storage, session storage, cookies etc. 
Playwright achieves this using BrowserContexts which are equivalent to incognito-like profiles
 */

/**
 * browserContext.pages() --> returns all the open pages
 */