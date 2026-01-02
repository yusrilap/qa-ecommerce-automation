const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../../pages/LoginPage');
const { ProductsPage } = require('../../../pages/ProductsPage');
const { CartPage } = require('../../../pages/CartPage');
const { CheckoutPage } = require('../../../pages/CheckoutPage');
const { users } = require('../../../test-data/users');
const { checkAppHealth } = require('../../../utils/apiHelper');

test('@smoke @e2e User can login and complete checkout', async ({ page, request }) => {
  await checkAppHealth(request);

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.visit();
  await loginPage.login(users.standard.username, users.standard.password);

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
  await cartPage.checkout();

  await checkoutPage.fillInformation();
  await checkoutPage.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete/);
});
