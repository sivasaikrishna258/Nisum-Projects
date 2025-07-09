/**
 * | **Aspect**                     | **`locator`**                                               | **`$$` / `page.$$(selector)`**                       |
| ------------------------------ | ----------------------------------------------------------- | ---------------------------------------------------- |
| **Type**                       | Playwright `Locator` object                                 | Returns array of `ElementHandle` objects             |
| **Auto-wait**                  | ✅ Yes — automatically waits for elements to appear/be ready | ❌ No — you must handle waits manually                |
| **Recommended for Assertions** | ✅ Yes (`expect(locator).toBeVisible()`)                     | ❌ No — must unwrap and check manually                |
| **Can Perform Actions**        | ✅ Yes — click, fill, etc. with built-in retries             | ✅ Yes — click, type, etc. using element handles      |
| **Use in Loops**               | Use `.count()` + `nth(i)` or `allTextContents()`            | Use standard JS array methods (`for...of`, `.map`)   |
| **Conversion Needed?**         | Already iterable via `.count()` + `.nth()`                  | Yes — result is a Promise of array of ElementHandles |
| **When to Use**                | Preferred for test steps and stable automation              | Only if you need raw DOM access or special handling  |
| **Sample Use**                 | `await expect(locator.nth(i)).toBeVisible()`                | `const els = await page.$$('selector')`              |

 */

//** Example for $$ */

  const elements = await this.page.$$('.product-overlay, .productinfo.text-center');
  expect(elements.length).toBeGreaterThan(0);

  //$$ it returns an array of ElementHandles, not a Locator.but we can perform actions
  for (const element of elements) {                            //for traversing the list of elements 
    const isVisible = await element.isVisible(); //we cant perform toBeVisible() here since it is not a locator object
    expect(isVisible).toBe(true);
  }

//** Example for .locator() */

Then('all the products related to the search should be visible', async function () {
  const products = this.page.locator('.product-overlay, .productinfo.text-center'); // Use actual container class
  const count = await products.count();
  expect(count).toBeGreaterThan(0); // At least one product should be visible

  for (let i = 0; i < count; i++) {
    await expect(products.nth(i)).toBeVisible();
  }
});

//** example for how .locator().all() method is similar to .$$() */
/**
| Feature                   | Playwright                                  | Puppeteer / Browser                         |
| ------------------------- | ------------------------------------------- | ------------------------------------------- |
| Get all matching elements | `await locator.all()`                       | `const elements = await page.$$(selector)`  |
| Get one element           | `await locator.first()` or `locator.nth(0)` | `const element = await page.$(selector)`    |
| What it returns           | Array of `ElementHandle`s                   | Array of `ElementHandle`s                   |
| Example usage             | `for (const el of await locator.all())`     | `for (const el of await page.$$(selector))` |

*/