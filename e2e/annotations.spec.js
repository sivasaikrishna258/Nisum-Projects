/**
 * Playwright supports tags and annotations that are displayed in the test report.
 * You can add your own tags and annotations at any moment, but Playwright comes with a few built-in ones:
 * 
 * test.skip() marks the test as irrelevant. Playwright does not run such a test. Use this annotation when the test is not applicable in some configuration.
 * test.fail() marks the test as failing. Playwright will run this test and ensure it does indeed fail. If the test does not fail, Playwright will complain.
 * test.fixme() marks the test as failing. Playwright will not run this test, as opposed to the fail annotation. Use fixme when running the test is slow or crashes.
 * test.slow() marks the test as slow and triples the test timeout.
 */

/**
 * You can focus some tests. When there are focused tests, only these tests run.

test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
});

 */

/**
 * You can skip certain test based on the condition.

test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});
 */