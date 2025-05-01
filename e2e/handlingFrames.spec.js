// import { test, expect, chromium } from '@playwright/test';
// /**
//  * We have 2 ways to handle frames
//  * 
//  // Locate element inside frame (this is for frame inside another frame) and interact
//      const username = await page.frameLocator('.frame-class').getByLabel('User Name');
//      await username.fill('John');

//      2nd way is get the frame by using name of the frame or url of the frame then interact with the help of frame variable
//      // Get frame using the frame's name attribute
//         const frame = page.frame('frame-login');

//     // Get frame using frame's URL
//     // const frame = page.frame({ url: /.*domain.*/ });

//     // Interact with the frame
//     //await frame.fill('#username-input', 'John');
//  */

// test('handling frames', async ({ page }) => {

//     await page.goto('https://demo.automationtesting.in/Frames.html');

//     await page.frameLocator("#singleframe").locator('//input[@type="text"]').fill("siva");

    
// });