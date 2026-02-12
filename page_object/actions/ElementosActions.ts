import { Page } from "playwright";
import { ElementosGerais } from "../page/ElementosGerais";
import { expect } from "playwright/test";

export class ElementosActions extends ElementosGerais {
    // Extends -> Hierarquia. Significa que ElementosActions é filho de ElementosGerais
    constructor(page: Page) {
        super(page);
    }

    public async clicarEmLoginLink() {
        await expect(this.loginLink).toBeVisible();
        await this.loginLink.click();
    }

    public async clicarEmShoppingCart(){
        await expect(this.shoppingCartLink).toBeVisible();
        await this.shoppingCartLink.click();
    }
}