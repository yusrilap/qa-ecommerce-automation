import { expect } from '@playwright/test';

export async function checkProductsApiHealth(request) {
  const response = await request.get('https://www.saucedemo.com/inventory.html');
  expect(response.ok()).toBeTruthy();
}
