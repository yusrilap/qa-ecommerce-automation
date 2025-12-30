export class CartPage {
    constuctor(page) {
        this.page = page;
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }

    async checkout() {
        await this.checkoutButton.click();
    }
}