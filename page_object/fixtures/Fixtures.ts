import {test as base} from '@playwright/test';
import { ElementosActions } from '../actions/ElementosActions';
import { LoginActions } from '../actions/LoginActions';
import { ShoppingActions } from '../actions/ShoppingActions';

// Pesquisar sobre test.BeforeEach / test.Before
// Implementar um jeito de realizar actions gerais
// Pesquisar sobre Fixtures
// Pesquisar um jeito reusável de manejar os dados (ex: criar um util class para guardar os dados em json)
// Pesquisar um jeito de guardar as credenciais de forma segura

type MyFixtures = {
    elementosActions: ElementosActions;
    loginActions: LoginActions;
    shoppingActions: ShoppingActions;
}

export const test = base.extend<MyFixtures>({
    elementosActions: async ({page}, use) => {
        await use(new ElementosActions(page));
    },

    loginActions: async ({page}, use) => {
        await use(new LoginActions(page));
    },

    shoppingActions: async ({page}, use) => {
        await use(new ShoppingActions(page));
    },
})