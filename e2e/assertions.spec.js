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
 * for getting the attribute valuse --- await page.locator(locator).getAttribute(attributeName)
 */

/**
| Method         | What it Checks                                  | Returns   |
| -------------- | ----------------------------------------------- | --------- |
| `isVisible()`  | Element is in the DOM and visible               | `boolean` |
| `isHidden()`   | Element is hidden or not in the DOM             | `boolean` |
| `isEnabled()`  | Element is enabled (not disabled)               | `boolean` |
| `isDisabled()` | Element is disabled (has `disabled` attribute)  | `boolean` |
| `isEditable()` | Element is editable (like an input or textarea) | `boolean` |
| `isChecked()`  | Checkbox or radio input is checked              | `boolean` |
| `isSelected()` | `<option>` in a `<select>` is selected          | `boolean` |
| `isFocused()`  | Element has focus                               | `boolean` |

 */
//*Negating matchers
//In general, we can expect the opposite to be true by adding a .not to the front of the matchers:
let value=0;
expect(value).not.toEqual(0);
await expect(await page.getByTitle("Login")).not.toContainText('some text');

//* 🔁 expect.poll() in Playwright
/**
 *Yes — expect.poll() repeatedly evaluates a function at a specified interval (frequency) until either:

the expectation passes, or
the timeout is reached (default: 5000ms)

await expect.poll(async () => {
  const response = await page.request.get('https://api.example.com');
  return response.status();
}, {
  // Probe, wait 1s, probe, wait 2s, probe, wait 10s, probe, wait 10s, probe
  // ... Defaults to [100, 250, 500, 1000].
  intervals: [1_000, 2_000, 10_000],
  timeout: 60_000
}).toBe(200);

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
