import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

export default new VueRouter({
    routes: [
        { path: '/',
            redirect: '/recommend'
        },
        { path: '/recommend',
            name: 'recommend',
            component: () => import('../views/homePage/recommendInfo.vue')
        },
        { path: '/searchResult',
            name: 'searchResult',
            component: () => import('../views/homePage/searchResult.vue')
        }
    ],
    linkActiveClass: 'link_active'
})
