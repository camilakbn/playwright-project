import { Page } from "playwright";
import { ElementosGerais } from "../page/ElementosGerais";
import { expect } from "playwright/test";

export class HomeActions extends ElementosGerais {
    // Extends -> Hierarquia. Significa que HomeActions é filho de ElementosGerais
    constructor(page: Page) {
        super(page);
    }

    public async clicarEmLoginLink() {
        await expect(this.loginLink).toBeVisible();
        await this.loginLink.click();
    }
}