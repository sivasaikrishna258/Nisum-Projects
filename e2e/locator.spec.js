import { test, expect, chromium } from '@playwright/test';
/**
 * await page.getByText() to locate an element by its text content.
 * await page.getByLabel() to locate an element by its label.
 * await page.getByRole() to locate an element by its ARIA role.  
 * await page.getByTestId() to locate an element by its data-testid attribute.
 * await page.getByTitle() to locate an element by its title attribute.
 * await page.getByAltText() to locate an image by its alt text.
 * await page.getByPlaceholder() to locate an input by its placeholder text.
 * await page.getByCSS() to locate an element by its CSS selector.
 * await page.getByXPath() to locate an element by its XPath expression.
 * 
 //* await page.locator().inputValue() to get the value of an input field.
 */

 /**
  //* Matching two locators simultaneously
Method locator.and() narrows down an existing locator by matching an additional locator. For example, you can combine page.getByRole() and page.getByTitle() to match by both role and title.

//* const button = page.getByRole('button').and(page.getByTitle('Subscribe')); --->   this will be useful when u want filter the same element with multiple attributes


Matching only visible elements
note
It's usually better to find a more reliable way to uniquely identify the element instead of checking the visibility.

Consider a page with two buttons, the first invisible and the second visible.

<button style='display: none'>Invisible</button>
<button>Visible</button>

This will find both buttons and throw a strictness violation error:

await page.locator('button').click();

This will only find a second button, because it is visible, and then click it.

await page.locator('button').filter({ visible: true }).click();
  */

/**
 * CSS selectors pierce open shadow DOM.
//* x Playwright adds custom pseudo-classes like 
//* await page.locator('article:has-text("Playwright")').click();
// :visible,     ---> it gives only matching element
// :has-text()   ---> it gives element based on the text
// :has()        ---> it gives element based on the locator given
// :is()         ---> gives
// :nth-match()  ---> gives based on the index
 */

/**
 * Layout pseudo-classes use bounding client rect to compute distance and relative position of the elements.

:right-of(div > button) - Matches elements that are to the right of any element matching the inner selector, at any vertical position.
:left-of(div > button) - Matches elements that are to the left of any element matching the inner selector, at any vertical position.
:above(div > button) - Matches elements that are above any of the elements matching the inner selector, at any horizontal position.
:below(div > button) - Matches elements that are below any of the elements matching the inner selector, at any horizontal position.
:near(div > button) - Matches elements that are near (within 50 CSS pixels) any of the elements matching the inner selector.
 */
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