import {createRouter, createWebHistory} from "vue-router"
import homeView from "@/views/homeView.vue"
import SignUpView from '@/views/signupView.vue'
import loginView from "@/views/loginView.vue"
import readMangaView from '@/views/readMangaView.vue'
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
    },
    {
        path: '/read/:manga_id',
        name: 'read Manga',
        component: readMangaView
    }
]


const router = createRouter({
    history:createWebHistory(),routes,
});

export default router