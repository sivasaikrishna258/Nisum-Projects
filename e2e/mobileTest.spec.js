import { test, expect, webkit, devices } from '@playwright/test';

const iPhone = devices['iPhone 6'];

test('Run test on iPhone 6 with WebKit', async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext({
    ...iPhone,
  });
  const page = await context.newPage();
  await page.goto('http://example.com');

  // Example assertion
  await expect(page).toHaveTitle(/Example Domain/);

  await browser.close();
});
