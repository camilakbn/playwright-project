import { test } from "../page_object/fixtures/Fixtures";

test('Login', async ({elementosActions, loginActions}) => {
    
    await elementosActions.clicarEmLoginLink();
    await loginActions.inserirEmailDoUsuario('mailtestes312@gmail.com');
    await loginActions.inserirSenhaDoUsuario('mailTestes312');
    await loginActions.clicarNoBotaoDeLogin();
})