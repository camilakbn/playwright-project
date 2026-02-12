import test from "@playwright/test";
import { ElementosActions } from "../page_object/actions/ElementosActions";
import { LoginActions } from "../page_object/actions/LoginActions";

// Primeiro de tudo: Fazer os fluxos
// Mandatório: Pesquisar sobre test.BeforeEach / test.Before
// Mandatório: Implementar um jeito de realizar actions gerais
// Mandatório: Pesquisar sobre Fixtures
// Seria uma boa: Pesquisar um jeito reusável de manejar os dados (dica: criar um util class para guardar os dados em json)
// Seria uma boa: Pesquisar um jeito de guardar as credenciais de forma segura

test('Login', async ({ page }) => {
    await page.goto('/');
    /*
        Actions vai ser minha classe de ações
        Page vai ser o parametro que eu preciso passar
        Os metodos clicar em login e inserir email do usuario estão dentro de home actions
        O parametro email, do tipo string, tem que ser passado para o inserir email do usuario
    */
    const elementosActions = new ElementosActions(page); // PESQUISAR SOBRE FIXTURES
    const loginActions = new LoginActions(page);
    
    await elementosActions.clicarEmLoginLink();
    await loginActions.inserirEmailDoUsuario('mailtestes312@gmail.com');
    await loginActions.inserirSenhaDoUsuario('mailTestes312');
    await loginActions.clicarNoBotaoDeLogin();
})