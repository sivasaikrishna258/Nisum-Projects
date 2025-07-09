//we provide fixtures via test.extend()

/**✅ What is a Fixture in Playwright?
A fixture in Playwright is:

A function or object value that's created before the test runs

Automatically passed to the test as an argument

Optionally torn down after the test finishes
 */

/**In Playwright, fixtures are a powerful way to define reusable setup and teardown logic that can be shared across your tests. Fixtures help you manage things like:

Browser context and page setup

Test data

Auth/session states

API mocks

They are commonly used with the Playwright Test Runner, and defined using test.extend().
 */

//* sample code for fixtures

// fixtures/mockApiFixture.js
import { test as base } from '@playwright/test';

const test = base.extend({  //test is a function that creates a new test instance
  // Define a fixture named "page" that will be used in the tests
  page: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.route('**/api/user', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(userMock)
      });
    });

    await use(page);// use the page fixture in the test
    await context.close();
  }
});

module.exports = { test };

//if we import one fixure file then playwright automatically binds all the fixture files and we can use them in the test


//* 🔁 Key Differences: Playwright Test vs Cucumber Framework
/**
| Feature              | Playwright Test (`test.extend`)  | Cucumber Framework (e.g., with `@cucumber/cucumber`) |
| -------------------- | -------------------------------   | ---------------------------------------------------- |
| Fixture extension    | ✅ `test.extend()`               | ❌ Not used                                           |
| Sharing context/data | ✅ Via fixtures                  | ✅ Via `World` object                                 |
| Setup/Teardown       | ✅ Via `test.beforeEach`, etc.   | ✅ Via `Before`, `After`, `BeforeAll`, `AfterAll`     |
| Test file structure  | ✅ `.spec.js` files              | ✅ `.feature` + `.steps.js`                           |

*/

/**
 * 🧱 Step-by-Step Setup
📁 Folder Structure Example

tests/
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── SettingsPage.js
│
├── fixtures/
│   └── custom-fixtures.js
│
├── tests/
│   └── example.spec.js
1️⃣ Page Object Classes
 
// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#login');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
 
// pages/DashboardPage.js
export class DashboardPage {
  constructor(page) {
    this.page = page;
  }

  async doSomething() {
    await this.page.click('#some-dashboard-button');
  }
}
2️⃣ Create the Custom Fixture
 
// fixtures/custom-fixtures.js
import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

export const test = base.extend({
  pages: async ({ page }, use) => {
    const pages = {
      loginPage: new LoginPage(page),
      dashboardPage: new DashboardPage(page),
      // add more pages here
    };
    await use(pages);
  }
});
3️⃣ Use the Shared Pages in Tests
 
// tests/example.spec.js
import { test, expect } from '../fixtures/custom-fixtures';

test('Login and interact with dashboard', async ({ pages }) => {
  await pages.loginPage.page.goto('https://example.com/login');
  await pages.loginPage.login('admin', 'admin123');

  await pages.dashboardPage.doSomething();
  await expect(pages.dashboardPage.page).toHaveURL(/dashboard/);
});
🧠 Benefits
✅ Clean and scalable: Add more page objects easily.

✅ Centralized: All page objects come from one place.

✅ Clear structure: Your test knows exactly what it's working with via pages.
 */