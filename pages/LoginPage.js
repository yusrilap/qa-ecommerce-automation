export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async visit() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await Promise.all([
      this.page.waitForURL(/inventory/),
      this.loginButton.click(),
    ]);
  }

  async attemptLogin(username, password) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
