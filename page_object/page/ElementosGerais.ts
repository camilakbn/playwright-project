import { Locator, Page } from "playwright";

export class ElementosGerais{
    protected loginLink: Locator; // protected -> restrição de acesso / loginLink -> nome da variavel / Locator -> tipo da variavel
    protected shoppingCartLink: Locator;
    protected wishlist: Locator;

    constructor(page: Page){
        this.loginLink = page.locator(`a[href='/login']`);
        this.shoppingCartLink = page.locator('.header-links a[href="/cart"]');
        this.wishlist = page.locator('.header-links a[href="/wishlist"]');
    }
}