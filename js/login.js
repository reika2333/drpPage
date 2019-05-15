import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import loginRouter from '../routers/loginRouter.js'

var vm = new Vue({
    el: '#app',
    data:{
        usr_nm: '',
        newEmail: '',
        registerObj: {
            usr_nm: '',
            usr_pwd: '',
            usr_phone: '',
            usr_email: '',
            validCode: ''
        }
    },
    methods:{

    },
    router: loginRouter
})