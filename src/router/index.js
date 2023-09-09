import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Team from '../views/Team.vue';
import Contact from '../views/Contact.vue';
import Login from '../views/Login.vue';
import Search from '../views/Search.vue';
import Signup from '../views/Signup.vue';
import Read from '../views/Read.vue'
import ReadManga from '../components/Readmanga.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/team',
            component: Team
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/signup',
            component: Signup
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/read',
            component: Read,

        },
        {
            path: '/readmanga',
            name: 'Readmanga',
            component: ReadManga,
            props: true  // This allows passing props via the route
        },

    ]
})

export default router;