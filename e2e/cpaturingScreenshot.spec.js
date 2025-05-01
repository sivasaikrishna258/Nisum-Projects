
import { test, expect, chromium } from '@playwright/test';


test('apture screenshots', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    //Here is a quick way to capture a screenshot and save it into a file:
    await page.screenshot({ path: 'ScreenShots/' + 'homepage.png' })

    //Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely.
    await page.screenshot({ path: 'ScreenShots/' + 'fullhomepage.png', fullPage: true });

    // Sometimes it is useful to take a screenshot of a single element.
    await page.locator('#radio-btn-example').screenshot({ path: 'ScreenShots/' + 'radio.png' })

});