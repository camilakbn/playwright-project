import { Page } from "playwright";
import { ShoppingPage } from "../page/ShoppingPage";
import { expect } from "playwright/test";

export class ShoppingActions extends ShoppingPage {
    constructor(page: Page) {
        super(page);
    }

    public async pesquisarItem (item: string){
        await expect(this.searchBar).toBeVisible();
        await this.searchBar.fill(item);
        await expect(this.searchBar).toHaveValue(item);
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();
        await expect(this.searchAdvanced).toBeVisible();
    }

    public async adicionarAoCarrinho (){
        await expect(this.wantedItem).toBeVisible();
        await this.wantedItem.click();
        await expect(this.addToCart).toBeVisible();
        await this.addToCart.click();
    }

    public async estimarEntrega () {
        await expect(this.country).toBeVisible();
        await this.country.selectOption('United States');
        await expect(this.country).toHaveValue('1');
        await expect(this.state).toBeVisible();
        await this.state.selectOption('Alabama');
        await expect(this.state).toHaveValue('3');
        await expect(this.estimateShipping).toBeVisible();
        await this.estimateShipping.click();
    }
}