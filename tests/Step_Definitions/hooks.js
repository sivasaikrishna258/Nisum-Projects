const { chromium } = require('playwright');
const { PageObjects } = require('../../Pages/POManager');
const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');
const { Status } = require('@cucumber/cucumber');
const fs = require('fs');
const path = require('path');

setDefaultTimeout(30 * 1000);
// Clean screenshots folder before tests start (only once per run)
const screenshotDir = path.join('reports', 'screenshots');
if (fs.existsSync(screenshotDir)) {
  fs.readdirSync(screenshotDir).forEach(file => {
    fs.unlinkSync(path.join(screenshotDir, file));
  });
} else {
  fs.mkdirSync(screenshotDir, { recursive: true });
}



Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
    this.page.setDefaultNavigationTimeout(30000); // 30s for navigation
  this.poManager = new PageObjects(this.page);
});

AfterStep({ timeout: 20000 }, async function (scenario) {
  if (scenario.result?.status === Status.FAILED && this.page) {
    const screenshotPath = path.join(
      screenshotDir,
      `${scenario.pickle.name.replace(/[^a-zA-Z0-9]/g, '_')}_${Date.now()}.png`
    );
    try {
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
      const image = fs.readFileSync(screenshotPath);
      await this.attach(image, 'image/png');
      console.log('Screenshot taken and attached:', screenshotPath);
    } catch (err) {
      console.error('Error taking screenshot:', err);
    }
  }
});

After({ timeout: 20000 }, async function () {
  await this.page.waitForTimeout(1000); // Optional: short wait before closing
  if (this.browser) {
    await this.browser.close();
  }
});