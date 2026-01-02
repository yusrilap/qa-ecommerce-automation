const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../../../pages/ProductsPage');
const { CartPage } = require('../../../pages/CartPage');
const { CheckoutPage } = require('../../../pages/CheckoutPage');
const { users } = require('../../../test-data/users');
const { loginViaApi } = require('../../../utils/authHelper');

test('@smoke @hybrid User can checkout using API login and UI flow', async ({ page, request }) => {
  // Step 1: Login via API (setup)
  await loginViaApi(request, users.standard.username, users.standard.password);

  // Step 2: Go directly to inventory page
  await page.goto('https://www.saucedemo.com/inventory.html');

  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 3: Continue UI flow
  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.checkout();
  await checkoutPage.fillInformation();
  await checkoutPage.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete/);
});
const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../../../pages/ProductsPage');
const { CartPage } = require('../../../pages/CartPage');
const { CheckoutPage } = require('../../../pages/CheckoutPage');
const { users } = require('../../../test-data/users');
const { loginViaApi } = require('../../../utils/authHelper');

test('@smoke @hybrid User can checkout using API login and UI flow', async ({ page, request }) => {

  await loginViaApi(request, users.standard.username, users.standard.password);

  await page.goto('https://www.saucedemo.com/inventory.html');

  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.checkout();
  await checkoutPage.fillInformation();
  await checkoutPage.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete/);
});
