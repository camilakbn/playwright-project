import { test } from "../page_object/fixtures/Fixtures";

test.describe('Login', async () => {    
    test('Sucessful login', async ({elementsActions, loginActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('mailTestes312');
        await loginActions.clickOnLoginButton();
        await loginActions.logoutButtonVisible();
    })

    test('Wrong login', async ({elementsActions, loginActions}) => {
        await elementsActions.clickOnLoginLink();
        await loginActions.insertEmail('mailtestes312@gmail.com');
        await loginActions.insertPassword('wrongpassword');
        await loginActions.clickOnLoginButton();
        await loginActions.loginErrorMessageVisible();
    })
})