export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.getByText('Add to cart').first();
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.cartIcon.click();
    await this.page.waitForURL(/cart/);
  }
}
