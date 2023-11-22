import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import HomeView from './views/HomeView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/chi-siamo', component: AboutView },
    { path: '/contatti', component: ContactsView }
];

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    })



export { router }