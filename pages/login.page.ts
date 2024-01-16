import { Locator, Page } from "@playwright/test";

class Login {
  page: Page;
  userNameField: Locator;
  userPasswordField: Locator;
  loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userNameField = this.page.locator("#user-name");
    this.userPasswordField = this.page.getByPlaceholder("Password");
    this.loginButton = this.page.locator("[data-test='login-button']");
  }

  async fillUserName(userName: string) {
    await this.userNameField.fill(userName);
  }

  async fillPasswordName(userPassword: string) {
    await this.userPasswordField.fill(userPassword);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}
export default Login;
