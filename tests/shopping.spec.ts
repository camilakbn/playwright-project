import test from "@playwright/test";
import { ElementosActions } from "../page_object/actions/ElementosActions";
import { ShoppingActions } from "../page_object/actions/ShoppingActions";

test.describe('Sem login', async () => {
    test('Adicionar item ao carrinho e estimar a entrega', async ({ page }) => {
        await page.goto('/');

        const elementosActions = new ElementosActions(page);
        const shoppingActions = new ShoppingActions(page);

        await shoppingActions.pesquisarItem('computer');
        await shoppingActions.adicionarAoCarrinho();
        await elementosActions.clicarEmShoppingCart();
        await shoppingActions.estimarEntrega();
    })
})

