import { test, expect, chromium } from '@playwright/test';


test('all locators', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page.locator('#mousehover').hover();
  const mouseBtn = page.locator('.mouse-hover-content')
  
  await mouseBtn.locator('a').last().click();
});