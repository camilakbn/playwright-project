import { test } from "../page_object/fixtures/Fixtures";

test.describe('Login', async () => {    
    test('Sucessful login', async ({elementosActions, loginActions}) => {
        await elementosActions.clicarEmLoginLink();
        await loginActions.inserirEmailDoUsuario('mailtestes312@gmail.com');
        await loginActions.inserirSenhaDoUsuario('mailTestes312');
        await loginActions.clicarNoBotaoDeLogin();
        await loginActions.botaoDeLogout();
    })

    test('Wrong login', async ({elementosActions, loginActions}) => {
        await elementosActions.clicarEmLoginLink();
        await loginActions.inserirEmailDoUsuario('mailtestes312@gmail.com');
        await loginActions.inserirSenhaDoUsuario('wrongpassword');
        await loginActions.clicarNoBotaoDeLogin();
        await loginActions.mensagemDeErro();
    })
})