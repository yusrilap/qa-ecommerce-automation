// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../../pages/LoginPage';
// import { ProductsPage } from '../../pages/ProductsPage';
// import { CartPage } from '../../pages/CartPage';
// import { CheckoutPage } from '../../pages/CheckoutPage';
// import { users } from '../../test-data/users.js';
// import { checkAppHealth } from '../../utils/apiHelper.js';


// // Smoke test: critical ecommerce checkout flow
// test('@smoke @e2e User can login and complete checkout', async ({ page, request }) => {
//   await checkAppHealth(request);

//   const loginPage = new LoginPage(page);
//   const productsPage = new ProductsPage(page);
//   const cartPage = new CartPage(page);
//   const  checkoutPage = new CheckoutPage(page);

//   await loginPage.visit();
//   await loginPage.login(users.standard.username, users.standard.password);

//   await expect(page).toHaveURL(/inventory/);

//   await productsPage.addFirstProductToCart();
//   await productsPage.goToCart();

//   await expect(page.getByRole('button', { name:'Checkout' })).toBeVisible();

//   await cartPage.checkout();

//   await checkoutPage.fillInformation();
//   await checkoutPage.finishCheckout();

//   await expect(page).toHaveURL(/checkout-complete/);
// });

// test('@regression Checkout should show error when postal code is missing', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   const productsPage = new ProductsPage(page);
//   const cartPage = new CartPage(page);
//   const checkoutPage = new CheckoutPage(page);

//   await loginPage.visit();
//   await loginPage.login(users.standard.username, users.standard.password);

//   await expect(page).toHaveURL(/inventory/);

//   await productsPage.addFirstProductToCart();
//   await productsPage.goToCart();

//   await cartPage.checkout();

//   await checkoutPage.fillInformationWithoutPostalCode();

//   const errorMessage = checkoutPage.getErrorMessage();
//   await expect(errorMessage).toBeVisible();
//   await expect(errorMessage).toContainText('Postal Code is required');
// });

// test('@regression Login should fail for locked user', async ({ page }) => {
//   const loginPage = new LoginPage(page);

//   await loginPage.visit();
//   await loginPage.login(users.locked.username, users.locked.password);

//   const errorMessage = page.locator('[data-test="error"]');
//   await expect(errorMessage).toBeVisible();
//   await expect(errorMessage).toContainText('locked out');
// });

