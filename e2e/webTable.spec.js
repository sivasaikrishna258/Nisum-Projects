import { test, expect } from '@playwright/test';

//using this nth() method to filter the table data(exact coloumn data)
test('handling web table', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    const rows = page.locator("table[name='courses'] tr");
    console.log(await rows.nth(1).locator('td').nth(1).textContent());

    /**
     * another way is using .filter() method
     * below will give the entire row data
    */
    const row = await rows.filter({
        has: page.locator('td'),
        hasText: "Selenium Webdriver with Java Basics + Advanced + Interview Guide"
    }).textContent();

    console.log(row)//Rahul Shetty    Selenium Webdriver with Java Basics + Advanced + Interview Guide        30


});