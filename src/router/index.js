import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Design from '@/pages/Design'
import Blog from '@/pages/Blog'
import Projects from '@/pages/Projects'
import Contact from "@/pages/Contact";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/design',
        name: 'Design',
        component: Design
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
