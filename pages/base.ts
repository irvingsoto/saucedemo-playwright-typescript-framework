import { Page } from "@playwright/test";
import { Browser, chromium } from "playwright-core";
class Base {
  async initBrowser() {
    let browser: Browser;
    browser = await chromium.launch();
    const context = await browser.newContext();
    return await context.newPage();
  }

  async navigateToSauceDemo(page: Page) {
    await page.goto(process.env.URL!);
  }
}

export default Base;
