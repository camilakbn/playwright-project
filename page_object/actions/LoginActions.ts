import { Page } from "playwright";
import { LoginPage } from "../page/LoginPage";
import { expect } from "playwright/test";

export class LoginActions extends LoginPage {
    constructor(page: Page) {
        super(page);
    }

    public async insertEmail(email: string) {
        // email -> PARAMETRO / Quem chamar esse metodo, tem que informar um email do tipo string
        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(email);
        await expect(this.emailInput).toHaveValue(email);
    }

    public async insertPassword(senha: string){
        await expect(this.senhaInput).toBeVisible();
        await this.senhaInput.fill(senha);
        await expect(this.senhaInput).toHaveValue(senha);
    }

    public async clickOnLoginButton(){
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
    }

    public async logoutButtonVisible(){
        await expect(this.logoutButton).toBeVisible();
    }

    public async loginErrorMessageVisible(){
        await expect(this.loginErrorMessage).toBeVisible();
    }

    public async emailValidationErrorVisible(){
        await expect(this.emailValidationError).toBeVisible();
    }
}