import { test, expect, chromium } from '@playwright/test';

test('locators chaning and filtering', async ({page}) => {
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox1', { name: 'Search Amazon.in' }).fill('MOBILES');
});