import { Locator, Page } from "playwright";
import { ElementosGerais } from "./ElementosGerais";

export class LoginPage extends ElementosGerais {
    protected emailInput: Locator;
    protected senhaInput: Locator;
    protected loginButton: Locator;
    protected logoutButton: Locator;
    protected loginErrorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.locator('#Email');
        this.senhaInput = page.locator('#Password');
        this.loginButton = page.locator('.login-button');
        this.logoutButton = page.locator('[class="ico-logout"]');
        this.loginErrorMessage = page.locator('[class="validation-summary-errors"]');
    }
}