import { Page, expect, test } from "@playwright/test";
import Base from "../pages/base";
import Login from "../pages/login.page";
import Home from "../pages/home.page";

let page: Page;
let base = new Base();
let loginPage: Login;
let homePage: Home;

test.describe("Sauce Demo", async () => {
  test.beforeEach(async ({}) => {
    page = await base.initBrowser();
    await base.navigateToSauceDemo(page);
    loginPage = new Login(page);
    homePage = new Home(page);
  });

  test("Valid user is able to Login", async () => {
    await loginPage.fillUserName(process.env.USER_NAME!);
    await loginPage.fillPasswordName(process.env.USER_PASSWORD!);
    await loginPage.clickLoginButton();
    await expect(await homePage.getShoppingCart()).toBeVisible();
  });
});
