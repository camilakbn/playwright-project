import { test } from "../page_object/fixtures/Fixtures";

test.describe('Wishlist with login', async () => {

    /*test.afterEach('Remove all itens from wishlist', async ({shoppingActions }) => {
    await shoppingActions.removeItemFromWishlist();
    })*/

    test('Add an item to wishlist', async ({ loginActions, elementsActions, shoppingActions }) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('book');
        await shoppingActions.addItemToWishlist();
        await elementsActions.clickOnWishlish();
    })
})