import { test } from "../page_object/fixtures/Fixtures";

test.describe('Without login', async () => {
    test('Add an item to cart and estimate shipping', async ({elementsActions, shoppingActions}) => {

        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.estimateItemShipping();
    })
})

test.describe('With login', async () => {

    //Shopping cart
    test('Add and item to cart and estimate shipping', async ({loginActions, elementsActions, shoppingActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.estimateItemShipping();
    })

    test('Update items quantity at cart', async({loginActions, elementsActions, shoppingActions}) =>{
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('computer');
        await shoppingActions.addItemToCart();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.updateItemQuantityAtCart('5');
    })

    test('Remove all items from cart', async({loginActions, elementsActions, shoppingActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await elementsActions.clickOnShoppingCart();
        await shoppingActions.deleteItemFromShoppingCart('0');
    })

    //Wishlist
    test('Add an item to wishlist', async ({loginActions, elementsActions, shoppingActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await shoppingActions.searchItem('book');
        await shoppingActions.addItemToWishlist();
        await elementsActions.clickOnWishlish();
    })

    test('Remove item from wishlist', async ({loginActions, elementsActions, shoppingActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await elementsActions.clickOnWishlish();
        await shoppingActions.removeItemFromWishlist();
    })
})