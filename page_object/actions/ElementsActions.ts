import { Page } from "playwright";
import { GeneralElements } from "../page/GeneralElements";
import { expect } from "playwright/test";

export class ElementsActions extends GeneralElements {
    // Extends -> Hierarquia. Significa que ElementsActions é filho de GeneralElements
    constructor(page: Page) {
        super(page);
    }

    public async clickOnLoginLink() {
        await expect(this.loginLink).toBeVisible();
        await this.loginLink.click();
    }

    public async clickOnShoppingCart(){
        await expect(this.shoppingCartLink).toBeVisible();
        await this.shoppingCartLink.click();
    }

    public async clickOnWishlish(){
        await expect(this.wishlist).toBeVisible();
        await this.wishlist.click();
    }
}