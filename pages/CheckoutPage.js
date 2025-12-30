export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postalCode = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByPlaceholder('button', { name: 'Continue' });
        this.finishButton = page.getByPlaceholder('button', { name: 'Finish' });
    }

    async fillInformation() {
        await this.firstName.fill('QA');
        await this.lastName.fill('Automation');
        await this.postalCode.fill('12345');
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}