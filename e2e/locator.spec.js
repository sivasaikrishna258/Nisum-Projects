import { test, expect, chromium } from '@playwright/test';


test('all locators', async ({ page }) => {

  await page.goto('https://www.Saucedemo.com');

  const userName = page.locator('id=user-name');//using id 

  const password = page.locator('id=password');//using id

  const loginButton = page.locator('.btn_action');//using className

  await userName.fill("standard_user");
  await password.fill("secret_sauce");
  await loginButton.click();

  const productLink = page.locator('text=Sauce Labs Backpack');//using text
  await productLink.click();

  const addToCartBtn = page.locator('css=button#add-to-cart');//css selector
  await addToCartBtn.click();

  const removeBtn = page.locator('xpath=//button[text()="REMOVE"]');//using xpath
  console.log(removeBtn.isVisible);

  await expect(page.getByRole("link", { name: "Sauce Labs Backpack" })).toContainText("Sauce Labs Backpack")

});

test('locators by data test id', async ({ page }) => {
//browser context
  // const browser = await chromium.launch();
  // const context = await browser.newContext();
  // const oage= await context.newPage();
  await page.goto('https://www.Saucedemo.com');

  const userName = page.locator('id=user-name');//using id 

  const password = page.locator('id=password');//using id

  const loginButton = page.locator('.btn_action');//using className

  await userName.fill("standard_user");
  await password.fill("secret_sauce");
  await loginButton.click();

  const productLink = page.locator('text=Sauce Labs Backpack');//using text
  await productLink.click();

  const addToCartBtn = page.locator('css=button#add-to-cart');//css selector
  await addToCartBtn.click();

  const removeBtn = page.locator('xpath=//button[text()="REMOVE"]');//using xpath
  console.log(removeBtn.isVisible);

});

test('locator by alternative text', async ({ page }) => {

  /**
   * page.getByAltText() to locate an element, usually image, by its text alternative.
   
  * All images should have an alt attribute that describes the image. You can locate an image based on the text alternative using page.getByAltText().
   */

  await page.goto("https://www.cricbuzz.com/");

  const image=await page.getByAltText("Resurgent and confident Wadhera aims to continue taking IPL by storm");

  await expect(image).toBeVisible();
});

test('locator by placeholder attribute', async ({ page }) => {

  /**
   * page.getByPlaceholder() to locate an input by placeholder.
   
  * Inputs may have a placeholder attribute to hint to the user what value should be entered. You can locate such an input using page.getByPlaceholder().
   */

  await page.goto("https://www.opencart.com/index.php?route=account/register");

  await page.getByPlaceholder("E-Mail").fill("siva");
});