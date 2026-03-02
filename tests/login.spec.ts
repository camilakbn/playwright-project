import { test } from "../page_object/fixtures/Fixtures";

test('Login', async ({page, elementosActions, loginActions}) => {
    await page.goto('/');
    
    await elementosActions.clicarEmLoginLink();
    await loginActions.inserirEmailDoUsuario('mailtestes312@gmail.com');
    await loginActions.inserirSenhaDoUsuario('mailTestes312');
    await loginActions.clicarNoBotaoDeLogin();
})