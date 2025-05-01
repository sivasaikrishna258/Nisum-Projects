import { test, expect, chromium } from '@playwright/test';

/**
 * Sometimes you want to tag your tests as @fast or @slow, and then filter by tag in the test report. Or you might want to only run tests that have a certain tag.
 * To tag a test, either provide an additional details object when declaring a test, or add @-token to the test title. Note that tags must start with @ symbol.
 * 
 * 
 * 
 */

//declaring a test with obeject details
/**
 * command - npx playwright test --grep "@regression"
 */
test('test1', { tag: '@sanity',}, async ({ page }) => {
    console.log(1)
});

//declaring with @ symbol
/**
 * command - npx playwright test --grep "@smoke"
 */
test('test2 @smoke', async ({ page }) => {
    console.log(2)
});

/**
 * combining tags
 * command for run the tests with the both the tags - npx playwright test --grep "(?=.*@sanity)(?=.*smoke)"
 * command To run tests containing either tag (logical OR operator): npx playwright test --grep "@smoke|@sanity"
 * */
test('test3 @sanity @smoke', async ({ page }) => {
    console.log(3)
});