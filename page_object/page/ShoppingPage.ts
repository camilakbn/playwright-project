import { Locator, Page } from "playwright";
import { ElementosGerais } from "./ElementosGerais";

export class ShoppingPage extends ElementosGerais {
    protected searchBar: Locator;
    protected searchButton: Locator;
    protected searchAdvanced: Locator;
    protected wantedItem: Locator;
    protected addToCart: Locator;
    protected country: Locator;
    protected state: Locator;
    protected estimateShipping: Locator;
    protected wishlishItem: Locator;
    protected addToWishlishButton: Locator;
    protected notificationWishlish: Locator;

    constructor(page: Page) {
        super(page);

        this.searchButton = page.locator('.search-box-button');
        this.searchBar = page.locator('.search-box-text');
        this.searchAdvanced = page.locator('input#As[type="checkbox"]');
        this.wantedItem = page.locator('[class="product-title"] a[href*="cheap"]');
        this.addToCart = page.locator('.add-to-cart [value="Add to cart"]');
        this.country = page.locator('.country-input');
        this.state = page.locator('.state-input');
        this.estimateShipping = page.locator('input[name="estimateshipping"]');
        this.wishlishItem = page.locator('[class="product-title"] a[href="/health"]');
        this.addToWishlishButton = page.locator('[type="button"][value="Add to wishlist"]');
        this.notificationWishlish = page.locator('#bar-notification p.content');
    }
}