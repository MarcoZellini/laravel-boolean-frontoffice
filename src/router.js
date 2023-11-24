import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import HomeView from './views/HomeView.vue';
import CategoryView from './views/CategoryView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/chi-siamo', component: AboutView },
    { path: '/contatti', component: ContactsView },

    {
        path: '/category/:slug',
        name: 'category',
        component: CategoryView,
    },

];

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes
    },

)

export { router }