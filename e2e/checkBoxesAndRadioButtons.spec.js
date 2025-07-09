import { test, expect } from '@playwright/test';

/**
 * here we use .check() method only for both checkboxes and radio buttons
 * we have .isChecked() method to check if the checkbox is checked or not
 * we have .toBeChecked() method to validate that checkbox has to be checked
 * for uncheck we use .uncheck()
 */
test('check boxes and radio buttons', async ({page}) => {
await page.goto("https://artoftesting.com/samplesiteforselenium");

await page.locator('#male').blur();
await page.locator('#male').check();
});