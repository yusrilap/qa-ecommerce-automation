export class CheckoutPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');

    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
  }

  async fillInformation() {
    await this.firstName.waitFor({ state: 'visible' });
    await this.firstName.fill('QA');
    await this.lastName.fill('Automation');
    await this.postalCode.fill('12345');
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.waitFor({ state: 'visible' });
    await this.finishButton.click();
  }
}
