import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import MainView from '../views/MainView.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/members',
        name: 'Members',
        component: MainView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;