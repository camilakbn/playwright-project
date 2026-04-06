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
        await expect(this.emailInput).toHaveValue(email);
    }

    public async inserirSenhaDoUsuario(senha: string){
        await expect(this.senhaInput).toBeVisible();
        await this.senhaInput.fill(senha);
        await expect(this.senhaInput).toHaveValue(senha);
    }

    public async clicarNoBotaoDeLogin(){
        await expect(this.loginButton).toBeVisible();
        await this.loginButton.click();
    }

    public async botaoDeLogout(){
        await expect(this.logoutButton).toBeVisible();
    }

    public async mensagemDeErro(){
        await expect(this.loginErrorMessage).toBeVisible();
    }
}