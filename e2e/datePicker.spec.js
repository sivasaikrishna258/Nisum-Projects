import { test, expect, chromium } from '@playwright/test';

test("date picker", async ({ page }) => {

    await page.goto("https://www.irctc.co.in/nget/train-search");

    await page.waitForTimeout(2000);
    await page.locator(`text="OK"`).click();
    await page.locator("[class='ng-tns-c58-10 ui-calendar']").click();

    const s = await page.locator("[class='ui-datepicker-title ng-tns-c58-10']");
    const month = await s.locator("span").nth(0).textContent();
    const year = await s.locator("span").nth(1).textContent();

    let givenMonth = "July";
    let givenYear = "2025";
    console.log(month + " " + year);

    while (true) {
        if (month === givenMonth && year === givenYear) {
            break;
        } else {

        }
    }
})