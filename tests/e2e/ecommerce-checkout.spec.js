import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { users } from '../../test-data/users.js';

// Smoke test: critical ecommerce checkout flow
test('@smoke @e2e User can login and complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const  checkoutPage = new CheckoutPage(page);

  await loginPage.visit();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/inventory/);

  await productsPage.addFirstProductToCart();
  await productsPage.goToCart();

  await cartPage.checkout();

  await checkoutPage.fillInformation();
  await checkoutPage.finishCheckout();

  await expect(page).toHaveURL(/checkout-complete/);
});
