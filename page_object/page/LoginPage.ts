import { Locator, Page } from "playwright";
import { ElementosGerais } from "./ElementosGerais";

export class LoginPage extends ElementosGerais {
    protected emailInput: Locator;
    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('#Email');
    }
}