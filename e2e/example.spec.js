// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('MOBILES');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - Redmi 14C 5G (' }).click();
  const page1 = await page1Promise;
  const addToCatbtn=page1.getByRole('button', { name: 'Add to Cart', exact: true });
  await page.getByTestId('scrolling-container').hover();
  await page1.mouse.wheel(0, 100);
  await addToCatbtn.click();
  await page1.getByRole('link', { name: 'item in cart' }).click();
  await page1.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
  // await page1.locator.click('name="proceedToRetailCheckout"');
  await expect(page1.getByRole('heading')).toHaveText('Sign in or create account');
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
