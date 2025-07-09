const report = require('multiple-cucumber-html-reporter');
const fs = require('fs');
const path = require('path');
const stripAnsi = require('strip-ansi');

const cucumberJsonFile = './reports/cucumber-report.json';
const screenshotsDir = './reports/screenshots';
const htmlReportDir = './reports/html-report';

attachScreenshotsToJson();
generateReport();
function attachScreenshotsToJson() {
  if (!fs.existsSync(cucumberJsonFile) || !fs.existsSync(screenshotsDir)) return;
  const json = JSON.parse(fs.readFileSync(cucumberJsonFile));
  let modified = false;

  json.forEach(feature => {
    if (!feature.elements) return;
    feature.elements.forEach(scenario => {
      if (!scenario.steps) return;
      scenario.steps.forEach(step => {
        // Clean up error messages
        if (step.result && step.result.error_message) {
          step.result.error_message = stripAnsi(step.result.error_message);
          modified = true;
        }
        if (step.result && step.result.status === 'failed') {
          const screenshotName = `${scenario.name.replace(/[^a-zA-Z0-9]/g, '_')}.png`;
          const screenshotPath = path.join(screenshotsDir, screenshotName);
          if (fs.existsSync(screenshotPath)) {
            const data = fs.readFileSync(screenshotPath);
            const base64Image = Buffer.from(data, 'binary').toString('base64');
            if (!step.embeddings) step.embeddings = [];
            step.embeddings.push({ data: base64Image, mime_type: 'image/png' });
            modified = true;
          }
        }
      });
    });
  });

  if (modified) {
    fs.writeFileSync(cucumberJsonFile, JSON.stringify(json, null, 2));
    console.log('Screenshots attached to cucumber-report.json');
  }
}

function generateReport() {
  report.generate({
    jsonDir: './reports',
    reportPath: htmlReportDir,
    displayDuration: true,
    displayReportTime: true,
    pageTitle: 'Test Report',
    reportName: `E2E Playwright Cucumber Report - ${new Date().toLocaleString()}`,
    hideMetadata: true,
  
  });
}

