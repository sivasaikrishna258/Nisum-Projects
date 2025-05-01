import { test, expect, chromium } from '@playwright/test';


test('handling dropdrowns', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
});