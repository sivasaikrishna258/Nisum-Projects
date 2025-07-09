import { test, expect, chromium } from '@playwright/test';
/**
 * We have 2 ways to handle frames
 * 
        // Locate element inside frame (this is for frame inside another frame) and interact
     const username = await page.frameLocator('.frame-class').getByLabel('User Name');
     await username.fill('John');

     2nd way is get the frame by using name of the frame or url of the frame then interact with the help of frame variable
     // Get frame using the frame's name attribute
        const frame = page.frame('frame-login');

        // Interact with the frame
    // await frame.fill('#username-input', 'John');

    // Get frame using frame's URL
    // const frame = page.frame({ url: "url" })
    */

test('handling frames', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html');

    await page.frameLocator("#singleframe").locator('//input[@type="text"]').fill("siva");

    await page.frame.childFrames();  // --- > gives all the child frames so based on index we can get the frames

});

//* difference between framelocator and frame
/**
 * 📋 Summary
frameLocator(selector) ---> here the selector will be any selector including css and xpath
– Returns a Locator scoped to the iframe
– You can chain .locator(), .click(), .fill(), etc.

frame(options)
– Returns a Frame object (like a mini‑page)
– You call actions directly with string selectors (.click(selector), .fill(selector, value), etc.)


 */
// 1) Using frameLocator (recommended for simple UI flows)
await page
  .frameLocator('iframe#login-frame')         // locate the iframe
  .locator('input[name="username"]')          // locate inside it
  .fill('admin');                             // fill field

// 2) Using frame() (when you need the full Frame API)
const loginFrame = page.frame({ name: 'login-frame' });
await loginFrame.fill('input[name="username"]', 'admin');
