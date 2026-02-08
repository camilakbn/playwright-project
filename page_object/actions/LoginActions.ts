import { Page } from "playwright";
import { LoginPage } from "../page/LoginPage";
import { expect } from "playwright/test";

export class LoginActions extends LoginPage {
    constructor(page: Page) {
        super(page);
    }

    public async inserirEmailDoUsuario(email: string) {
        // email -> PARAMETRO / Quem chamar esse metodo, tem que informar um email do tipo string
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);
        await expect(this.emailInput).toHaveValue(email)
    }

}