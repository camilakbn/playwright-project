import { test } from "../page_object/fixtures/Fixtures";

test.describe('Login', async () => {    

    //Happy path
    test('Sucessful login', async ({elementsActions, loginActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await loginActions.logoutButtonVisible();
    })

    //Wrong paths
    test('Wrong password', async ({elementsActions, loginActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('wrongPassword');
        await loginActions.clickOnLoginButton();
        await loginActions.loginErrorMessageVisible();
    })

    test('Wrong email', async ({elementsActions, loginActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('wrongemail@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await loginActions.loginErrorMessageVisible();
    })

    test('Wrong email without @', async({elementsActions, loginActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await loginActions.emailValidationErrorVisible();
    })

    test('Wrong credentials', async({elementsActions, loginActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('wrongemail@gmail.com');
        await loginActions.insertPassword('wrongPassword');
        await loginActions.clickOnLoginButton();
        await loginActions.loginErrorMessageVisible();
    })
})