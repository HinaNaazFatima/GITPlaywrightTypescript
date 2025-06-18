import { test, expect } from '@playwright/test';
//AT test
test('Test has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  //new line added to test git commit
});

