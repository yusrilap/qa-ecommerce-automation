import { expect } from '@playwright/test';

export async function checkProductsApiHealth(request) {
  const response = await request.get('https://www.saucedemo.com');

  expect([200, 302]).toContain(response.status());
}
