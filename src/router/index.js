import {createRouter, createWebHistory} from "vue-router"
import homeView from "@/views/homeView.vue"
import SignUpView from '@/views/signupView.vue'
import loginView from "@/views/loginView.vue"

const routes=[
    {
        path: "/",
        name: 'home',
        component: homeView
    },
    {
        path: "/signup",
        name: 'signup',
        component: SignUpView
    },
    {
        path: '/login',
        name: 'login',
        component: loginView
    }
]


const router = createRouter({
    history:createWebHistory(),routes,
});

export default router