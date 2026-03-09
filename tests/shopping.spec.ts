import { test } from "../page_object/fixtures/Fixtures";

test.describe('Sem login', async () => {
    test('Adicionar item ao carrinho e estimar a entrega', async ({elementosActions, shoppingActions}) => {

        await shoppingActions.pesquisarItem('computer');
        await shoppingActions.adicionarAoCarrinho();
        await elementosActions.clicarEmShoppingCart();
        await shoppingActions.estimarEntrega();
    })
})