import { test } from "../page_object/fixtures/Fixtures";

test.describe('Shopping cart without login', async () => {

    test('Add an item to cart and estimate shipping', async ({ elementsActions, shoppingActions }) => {
        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.estimateItemShipping();
    })
})

test.describe(' Shopping cart with login', async () => {

    /*test.afterEach('Remove all items from shopping cart', async ({shoppingActions }) => {
        await shoppingActions.deleteItemFromShoppingCart();
    })*/

    test('Add and item to cart and estimate shipping', async ({ loginActions, elementsActions, shoppingActions }) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.estimateItemShipping();
    })
    
    test('Update items quantity at cart', async ({ loginActions, elementsActions, shoppingActions }) => {
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