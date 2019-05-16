import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

const _import = require('./_import.js')

export default new VueRouter({
    routes: [
        { path: '/',
            redirect: '/formalUser'
        },
        { path: '/formalUser',
            name: 'formalUser',
            component: () => import('../views/personal/formalUser.vue')
        },
        { path: '/author',
            name: 'author',
            component: () => import('../views/personal/author.vue')
        },
        { path: '/agent',
            name: 'agent',
            component: () => import('../views/personal/agent.vue')
        },
        { path: '/charactorApply',
            name: 'charactorApply',
            component: () => import('../views/personal/charactorApply.vue')
        },
        { path: '/worksRegister',
            name: 'worksRegister',
            component: () => import('../views/personal/worksRegister.vue')
        }
    ],
    linkActiveClass: 'link_active'
})
