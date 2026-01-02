const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');
const { users } = require('../../../test-data/users');

test('@regression Login should fail for locked user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.attemptLogin(users.locked.username, users.locked.password);

  const errorMessage = page.locator('[data-test="error"]');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('locked out');
});
