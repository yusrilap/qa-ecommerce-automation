const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');
const { ProductsPage } = require('../../../pages/ProductsPage');
const { CartPage } = require('../../../pages/CartPage');
const { CheckoutPage } = require('../../../pages/CheckoutPage');
const { users } = require('../../../test-data/users');

test('@regression Checkout should show error when postal code is missing', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.visit();
  await loginPage.login(users.standard.username, users.standard.password);

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.checkout();
  await checkoutPage.fillInformationWithoutPostalCode();

  const errorMessage = checkoutPage.getErrorMessage();
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText('Postal Code is required');
});
