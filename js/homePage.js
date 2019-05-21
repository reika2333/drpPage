import Vue from 'vue/dist/vue.esm.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// var moment = require('moment')

import 'iview/dist/styles/iview.css';
import iView from 'iview'
Vue.use(iView)

var store = {
    debug: true,
    state: {

    }
}

import header from '../views/homePage/header.vue'
import pic from '../views/picture.vue'
import mainNav from '../views/homePage/mainNav.vue'
import recommendInfo from '../views/homePage/recommendInfo.vue'

import '../dist/0.bundle.js'
import '../dist/1.bundle.js'
import '../dist/5.bundle.js'
import '../dist/6.bundle.js'

import homePageRouter from '../routers/homePageRouter.js'

// 引入接口调用的方法
import { findPage } from '../api/works.js'

var vm = new Vue({
    el: '#app',
    data: {
        userInfo: {
            usr_nm: 'reika',
            usr_id: '22222',
            email: '66666@qq.con',
            tel: '1334838374',
            gender: '0',
            addr: 'sfhkaskfhufbcads',
            id_nmbr: '132332435353254',
            role_ids: [1,2]    //通过数组判断用户角色
        },
        formData: {
            start: 0,
            offset: 10,
            works_name: ''
        },
        searchKey: '',
        recommends: {
            video: [{
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            }],
            issue: [{
                works_memo:'鱼香肉丝，是一道汉族特色传统名菜，以鱼香味调味而得名，属于川菜。相传灵感来自泡椒肉丝，民国年间则是由四川籍厨师创制而成',
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_memo:'鱼香肉丝，是一道汉族特色传统名菜，以鱼香味调味而得名，属于川菜。相传灵感来自泡椒肉丝，民国年间则是由四川籍厨师创制而成',
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_memo:'Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合',
                works_name: 'Vue',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'albb',
                works_id: '222'
            },{
                works_memo:'鱼香肉丝，是一道汉族特色传统名菜，以鱼香味调味而得名，属于川菜。相传灵感来自泡椒肉丝，民国年间则是由四川籍厨师创制而成',
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_memo:'鱼香肉丝，是一道汉族特色传统名菜，以鱼香味调味而得名，属于川菜。相传灵感来自泡椒肉丝，民国年间则是由四川籍厨师创制而成',
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_memo:'鱼香肉丝，是一道汉族特色传统名菜，以鱼香味调味而得名，属于川菜。相传灵感来自泡椒肉丝，民国年间则是由四川籍厨师创制而成',
                works_name: '鱼香肉丝教程',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            }],
            img: [{
                works_name: '年画',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            },{
                works_name: '年画',
                works_rgst_tm: '2017-02-03',
                usr_nm: 'uuuu',
                works_id: '222'
            }],
            music: [{
                works_memo:'懒懒洋洋打扮漂亮 轻轻松松拨个电话 今天的我有些不一样 不想再听什么唠叨',
                works_name: '逍遥游',
                works_rgst_tm: '2017-02-03',
                usr_nm: '小虎队',
                works_id: '222'
            },{
                works_memo:'（吕方）我喜欢一回家就有暖洋洋的灯光在等待（伊能静）我喜欢一起床就看到大家微笑的脸庞（姜育恒）我喜欢一出门就为了家人和自己的理想打拼',
                works_name: '相亲相爱',
                works_rgst_tm: '2017-02-03',
                usr_nm: '飞碟群星',
                works_id: '222'
            },{
                works_memo:'日落西山红霞飞 战士打靶把营归 把营归 胸前红花映彩霞 愉快的歌声满天飞 Mi so la mi so La so mi dao re 愉快的歌声满天飞',
                works_name: '打靶归来',
                works_rgst_tm: '2017-02-03',
                usr_nm: '阎维文',
                works_id: '222'
            },{
                works_memo:'河山只在我梦萦 祖国已多年未亲近 可是不管怎样也改变不了 我的中国心 洋装虽然穿在身 我心依然是中国心 我的祖先早已把我的一切',
                works_name: '我的中国心',
                works_rgst_tm: '2017-02-03',
                usr_nm: '张明敏',
                works_id: '222'
            }]
        }
    },
    methods: {
        // 加载搜索结果-全部
        loadSearchResult(){
            // findPage(this.formData).then(res => {
            //         console.log(res)
            //         this.recommends.video = res.body.dataThree;
            //         this.recommends.issue = res.body.dataTwo;
            //         this.recommends.image = res.body.dataOne;
            //         this.recommends.music = res.body.dataFour;
            // })
        },
        searchByString(){
            console.log(this.formData)
            this.$router.push({
                path: '/searchResult',
                query: {
                    works_name: this.formData.works_name
                }
            })
        }
    },
    components: {
        'app-header': header,
        'app-picture': pic,
        'app-main-nav': mainNav,
        'app-recommend': recommendInfo
    },
    router: homePageRouter,
    created(){
        this.loadSearchResult();
    }
})
