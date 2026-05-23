import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/HomePage.vue'
import Contact from '../pages/Contact.vue'
import Skills from "@/pages/Skills.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/skills',
            component: Skills
        }
    ]
})

export default router