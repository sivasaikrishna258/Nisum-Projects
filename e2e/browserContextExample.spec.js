// (async () => {
//     const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.
//     // Create a new incognito browser context.
//     const context = await browser.newContext();
//     // Create a new page in a pristine context.
//     const page = await context.newPage();
//     await page.goto('https://example.com');
  
//     // Gracefully close up everything
//     await context.close();
//     await browser.close();
//   })();