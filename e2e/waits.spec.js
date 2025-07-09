import test from "node:test";
//*  Timeout Defaults (Playwright with Cucumber):
/**
| Type                  | Timeout              | Applies To                           |
| --------------------- | -------------------- | ------------------------------------ |
| Playwright actions    | 30 seconds           | `click()`, `fill()`, `goto()`, etc.  |
| Playwright expect     | 5 seconds            | `expect(locator).toHaveText()`, etc. |
| Cucumber step timeout | 30 seconds (default) | Can be overridden per step/scenario  |

 */

test("waits", async ({page}) => {


    // Wait for a specific element to be visible
    await page.waitForSelector('#myElement', { state: 'visible' });

    // Wait for a specific element to be hidden
    await page.waitForSelector('#myElement', { state: 'hidden' });

    // Wait for a specific element to be attached to the DOM
    await page.waitForSelector('#myElement', { state: 'attached' });

    // Wait for a specific element to be detached from the DOM
    await page.waitForSelector('#myElement', { state: 'detached' });

    // Wait for a specific text to appear in an element
    await page.waitForFunction(() => document.querySelector('#myElement').innerText.includes('Hello World'));

    await page.waitForTimeout(5000); // Wait for 5 seconds

    await page.waitForEvent('load'); // Wait for the page to load
    await page.waitForNavigation(); // Wait for navigation to complete

    await page.waitForLoadState(); //wait for page load

    /**
| Type              | Method / Feature                                       | Use Case                          |
| ----------------- | ------------------------------------------------------ | --------------------------------- |
| Auto-waiting      | Built-in                                               | Most element actions              |
| Explicit Wait     | `waitForSelector`, `waitForTimeout`, `waitForFunction` | DOM-based or custom logic         |
| Expect-based Wait | `expect(locator)...`                                   | Assertions with retries           |
| Navigation Wait   | `page.goto(..., waitUntil)`                            | Wait for page load                |
| Locator Wait      | `locator.waitFor(...)`                                 | Fine-grained element state checks |

     */

});
