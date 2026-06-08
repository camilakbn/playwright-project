import {test as base} from '@playwright/test';
import { ElementsActions } from '../actions/ElementsActions';
import { LoginActions } from '../actions/LoginActions';
import { ShoppingActions } from '../actions/ShoppingActions';

// test.BeforeEach / test.Before
// Implementar um jeito de realizar actions gerais
// Estudar mais fixtures
// Pesquisar um jeito reusável de manejar os dados (ex: criar um util class para guardar os dados em json)
// Pesquisar um jeito de guardar as credenciais de forma segura

type MyFixtures = {
    elementsActions: ElementsActions;
    loginActions: LoginActions;
    shoppingActions: ShoppingActions;
    forEachTest: void;
}

export const test = base.extend<MyFixtures>({
    forEachTest: [async ({ page }, use) => {
        // This code runs before every test
        await page.goto('/');
        await use();
        // This code runs after every test
        await page.context().clearCookies();
    }, { auto: true }], // automatically starts for every test


    elementsActions: async ({page}, use) => {
        await use(new ElementsActions(page));
    },

    loginActions: async ({page}, use) => {
        await use(new LoginActions(page));
    },

    shoppingActions: async ({page}, use) => {
        await use(new ShoppingActions(page));
    },
})