import { Locator, Page } from "@playwright/test";

class Home {
  page: Page;
  shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shoppingCart = this.page.locator("#shopping_cart_container");
  }

  async getShoppingCart() {
    return this.shoppingCart;
  }
}
export default Home;
