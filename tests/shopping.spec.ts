import { test } from "../page_object/fixtures/Fixtures";

test.describe('Sem login', async () => {
    test('Adicionar item ao carrinho e estimar a entrega', async ({elementsActions, shoppingActions}) => {

        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.estimateItemShipping();
    })
})

test.describe('Com login', async () => {
    test('Adicionar item ao carrinho e estimar a entrega', async ({loginActions, elementsActions, shoppingActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.estimateItemShipping();
    })

    test('Adicionar o item à wishlist', async ({loginActions, elementsActions, shoppingActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('book');
        await shoppingActions.addItemToWishlist();
        await elementsActions.clickOnWishlish();
    })

    test('Atualizar a quantidade de itens no carrinho', async({loginActions, elementsActions, shoppingActions}) =>{
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.updateItemQuantityAtCart('5');
    })
})