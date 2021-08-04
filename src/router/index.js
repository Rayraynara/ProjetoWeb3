import { createWebHashHistory, createRouter } from "vue-router";


import Login from '../views/Login.vue'
import Cadastrar from '../views/Cadastrar.vue'
import CadastrarProd from '@/views/CadastrarProd.vue'
import Principal from '@/views/Principal.vue'

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/cadastrar-usuario",
        name: "Cadastrar",
        component: Cadastrar,
    },
    {
        path: "/cadastrar-produto",
        name: "CadastrarProd",
        component: CadastrarProd,
    },
    {
        path: "/principal",
        name: "principal",
        component: Principal,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;