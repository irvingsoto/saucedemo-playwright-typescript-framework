import { Page, expect, test } from "@playwright/test";
import Base from "../pages/base";
import { assert } from "console";

let page: Page;
let base = new Base();

test("Valid user is able to Login", async () => {
  page = await base.initBrowser();
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.locator("[data-test='login-button']").click();

  await expect(page.locator("#shopping_cart_container")).toBeVisible();

});

