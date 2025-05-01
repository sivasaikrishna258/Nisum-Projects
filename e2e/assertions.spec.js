/**
 * await expect(page).toHaveTitle()	- Page has a title
 * await expect(page).toHaveURL() -	Page has a URL
 * await expect(locator).toHaveText() -  Element matches text
 * await expect(locator).toHaveValue() - Input has a value
 * await expect(locator).toHaveValues()	 - Select has options selected
 * await expect(locator).toHaveAttribute()	Element has a DOM attribute
 * await expect(locator).toBeVisible()	Element is visible
 * await expect(locator).toContainText()	Element contains text
 * await expect(locator).toBeEnabled()	Element is enabled
 * await expect(locator).toBeChecked()	Checkbox is checked
 */
import { test, expect, chromium } from '@playwright/test';

test('All assertions(both hard and soft assertion)', async ({ page }) => {

    // * await expect(page).toHaveTitle()	- Page has a title
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")

    // * await expect(page).toHaveURL() -	Page has a URL
    await page.goto('https://www.amazon.in/');
    await expect(page).toHaveURL("https://www.amazon.in/")

    //  * await expect(locator).toHaveText() -  Element matches text
    await page.goto('https://www.flipkart.com/');
    await expect(page.getByTitle("Login").nth(0)).toHaveText("Login")

    // * await expect(locator).toBeVisible()-	Element is visible
    await page.goto('https://www.flipkart.com/');
    await expect(page.getByTitle("Login").nth(0)).toBeVisible();

    //  * await expect(locator).toBeChecked()-	Checkbox is checked
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await page.locator('#male').check()
    await expect(page.locator('#male')).toBeChecked();

    //  * await expect(locator).toBeEnabled()-	Element is enabled
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await expect(page.getByText('Submit')).toBeEnabled();

    //  * await expect(locator).toContainText()-	Element contains text
    await page.goto("https://artoftesting.com/samplesiteforselenium");
    await expect(page.locator('#dblClkBtn')).toContainText("click")
    


    //soft assertion
    await page.goto('https://www.amazon.in/');
    await expect.soft(page).toHaveTitle("Online Shopping site in India1: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    await expect(page).toHaveURL("https://www.amazon.in/")
    console.log("faileed")

});
