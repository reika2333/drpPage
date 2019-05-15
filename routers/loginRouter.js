import VueRouter from 'vue-router'

import login from '../views/login/login.vue'
import register from  '../views/login/register.vue'

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/login'},
        { path: '/login',name: 'login', component: login},
        { path: '/register', name: 'register', component: register}
    ],
    linkActiveClass: 'link-active'
})