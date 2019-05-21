import Vue from 'vue/dist/vue.esm.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import header from '../views/header.vue'
import pic from '../views/picture.vue'
import mainNav from '../views/personal/mainNav.vue'

import 'iview/dist/styles/iview.css';
import iView from 'iview'
Vue.use(iView)

import '../dist/0.bundle.js'
import '../dist/1.bundle.js'
import '../dist/2.bundle.js'
import '../dist/3.bundle.js'
import '../dist/4.bundle.js'
import '../dist/5.bundle.js'
import '../dist/6.bundle.js'
import '../dist/7.bundle.js'

import personalRouter from '../routers/personalRouter.js'

var vm = new Vue({
    el: '#app',
    data:{
        userInfo: {},
        recommendInfo: {},
        certList: [{
            value: '0',
            label: '身份证'
        },{
            value: '1',
            label: '户口簿'
        },{
            value: '2',
            label: '护照'
        },{
            value: 'x',
            label: '其他'
        }],
        publicKey: ''
    },
    router: personalRouter,
    methods:{
        // 1.加载个人信息
        loadUserInfo(){
            // this.$http.post('http://192.168.1.104:8080/drp/showUserBasicInfo').then(function (res) {
            //     console.log(res)
            // })
            this.userInfo = {
                usr_nm: 'reika',
                usr_id: '22222',
                email: '66666@qq.con',
                tel: '1334838374',
                gender: '0',
                addr: 'sfhkaskfhufbcads',
                id_nmbr: '132332435353254',
                role_ids: [1,2],   //通过数组判断用户角色
                password: '123123123'
            }
        },
        toChangeEmail(){
            this.$router.push({
                path: '/emailPasswordChange'
            })
        },
        toPublicKey(){
            this.$router.push({
                path: '/publicKey',
                query: {
                    keyWord: this.publicKey
                }
            })
        }
    },
    created(){
        this.loadUserInfo()
    },
    components:{
        'app-header': header,
        'app-picture': pic,
        'app-main-nav': mainNav,
    }
})
