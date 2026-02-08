import { Locator, Page } from "playwright";

export class ElementosGerais{
    protected loginLink: Locator; // protected -> restrição de acesso / loginLink -> nome da variavel / Locator -> tipo da variavel
    
    constructor(page: Page){
        this.loginLink = page.locator(`a[href='/login']`);
    }

 
}