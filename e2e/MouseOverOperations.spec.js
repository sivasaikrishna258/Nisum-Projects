import { test, expect, chromium } from '@playwright/test';

/**✅ Example: Right Click on Element
await page.locator('text=Click Me').click({ button: 'right' }); 
*/
test('all locators', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  await page.locator('#mousehover').hover();
  const mouseBtn = page.locator('.mouse-hover-content')
  
  await mouseBtn.locator('a').last().click();

  await mouseBtn.locator('a').dblclick(); //to perform double click
});