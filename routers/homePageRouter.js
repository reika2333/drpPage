import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

const _import = require('./_import.js')

export default new VueRouter({
    routes: [
        { path: '/',
            redirect: '/recommend'
        },
        { path: '/recommend',
            name: 'recommend',
            component: () => import('../views/homePage/recommendInfo.vue')
            // component: _import('/homePage/recommendInfo')
        },
        { path: '/searchResult',
            name: 'searchResult',
            component: () => import('../views/homePage/searchResult.vue')
            // component: _import('/homePage/searchResult')
        }
    ],
    linkActiveClass: 'link_active'
})
