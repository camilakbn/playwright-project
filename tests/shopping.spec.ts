import { test } from "../page_object/fixtures/Fixtures";

test.describe('Sem login', async () => {
    test('Adicionar item ao carrinho e estimar a entrega', async ({elementosActions, shoppingActions}) => {

        await shoppingActions.pesquisarItem('computer');
        await shoppingActions.adicionarAoCarrinho();
        await elementosActions.clicarEmShoppingCart();
        await shoppingActions.estimarEntrega();
    })
})

test.describe('Com login', async () => {
    test('Adicionar item ao carrinho e estimar a entrega', async ({loginActions, elementosActions, shoppingActions}) => {
        await elementosActions.clicarEmLoginLink();
        await loginActions.inserirEmailDoUsuario('mailtestes312@gmail.com');
        await loginActions.inserirSenhaDoUsuario('mailTestes312');
        await loginActions.clicarNoBotaoDeLogin();
        await shoppingActions.pesquisarItem('computer');
        await shoppingActions.adicionarAoCarrinho();
        await elementosActions.clicarEmShoppingCart();
        await shoppingActions.estimarEntrega();
    })

    test('Adicionar o item à wishlist', async ({loginActions, elementosActions, shoppingActions}) => {
        await elementosActions.clicarEmLoginLink();
        await loginActions.inserirEmailDoUsuario('mailtestes312@gmail.com');
        await loginActions.inserirSenhaDoUsuario('mailTestes312');
        await loginActions.clicarNoBotaoDeLogin();
        await shoppingActions.pesquisarItem('book');
        await shoppingActions.adicionarAWishlist();
        await elementosActions.clicarEmWishlish();

    })
})