import { test, expect, chromium } from '@playwright/test';

test('all navigations', async ({ page }) => {

  await page.goBack();
    await page.goForward();

});