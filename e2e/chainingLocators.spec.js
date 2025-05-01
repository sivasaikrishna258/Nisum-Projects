import { test, expect, chromium } from '@playwright/test';

test('locators chaning and filtering', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.amazon.in/');
    await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('MOBILES');
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    const product = page.locator('//a[@class="a-link-normal s-line-clamp-2 s-link-style a-text-normal"]');
    await product.filter({ hasText: 'Samsung Galaxy A36 5G' }).click();
    const page1Promise = page.waitForEvent('page');

    for (const row of await product.all())
        console.log(await row.textContent());
    const page1 = await page1Promise;
    const addToCatbtn = page1.getByRole('button', { name: 'Add to Cart', exact: true });
    await page1.mouse.wheel(0, 100);
    await addToCatbtn.click();
    await page1.getByRole('link', { name: 'item in cart' }).click();
    await page1.getByRole('button', { name: 'Proceed to Buy Buy Amazon' }).click();
    await expect(page1.getByRole('heading')).toHaveText('Sign in or create account');
});