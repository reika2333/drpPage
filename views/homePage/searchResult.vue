<template>
    <div>
        <div class="info-card">
            <Tabs type="card"  :animated="false">
                <TabPane label="视频">
                    <div class="work-card" v-for="item in listVideo" >
                        <a @click="showInfoModal(item.works_id)"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557584574622&di=fbf2341ce3a8e5d83a6ecf3058d2f3ef&imgtype=0&src=http%3A%2F%2Fs1.st.meishij.net%2Frs%2F115%2F102%2F588115%2Fn588115_143825866815933.jpg"></a>
                        <div class="name">{{ item.works_name }}</div>
                        <div class="author">发布：{{  item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="videoTotal"
                              show-sizer
                              :page-size-opts="[10,20,50]"
                              :current="searchVideo.start"
                              :page-size="searchVideo.offset"
                              show-elevator
                              @on-change="startVideoChange"
                              @on-page-size-change="offsetVideoChange"
                              show-total/>
                    </Row>
                </TabPane>
                <TabPane label="图片">
                    <div class="work-card" v-for="item in listPic" >
                        <a @click="showInfoModal(item.works_id)"><img src="http://pic.qjimage.com/chineseview027/high/jkd-1677.jpg"></a>
                        <div class="name">{{ item.works_name }}</div>
                        <div class="author">发布：{{  item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="picTotal"
                              show-sizer
                              :page-size-opts="[10,20,50]"
                              :current="searchPic.start"
                              :page-size="searchPic.offset"
                              show-elevator
                              @on-change="startPicChange"
                              @on-page-size-change="offsetPicChange"
                              show-total/>
                    </Row>
                </TabPane>
                <TabPane label="文章">
                    <div class="work-issue" v-for="item in listIssue">
                        <a @click="showInfoModal(item.works_id)"><h4>&nbsp{{ item.works_name }}</h4></a>
                        <p>摘要：{{ item.works_memo | lengthControl }}</p>
                        <div class="author">发布：{{ item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="issueTotal"
                              show-sizer
                              :page-size-opts="[10,20,50]"
                              :current="searchIssue.start"
                              :page-size="searchIssue.offset"
                              show-elevator
                              @on-change="startIssueChange"
                              @on-page-size-change="offsetIssueChange"
                              show-total/>
                    </Row>
                </TabPane>
                <TabPane label="音乐">
                    <div class="work-issue" v-for="item in listMusic">
                        <a @click="showInfoModal(item.works_id)"><h4><Icon type="ios-musical-notes" />&nbsp{{ item.works_name }}</h4></a>
                        <p>简述：{{ item.works_memo | lengthControl }}</p>
                        <div class="author">发布：{{ item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="musicTotal"
                              show-sizer
                              :page-size-opts="[10,20,50]"
                              :current="searchMusic.start"
                              :page-size="searchMusic.offset"
                              show-elevator
                              @on-change="startMusicChange"
                              @on-page-size-change="offsetMusicChange"
                              show-total/>
                    </Row>
                </TabPane>
                <TabPane label="全部">
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="allTotal"
                              show-sizer
                              :page-size-opts="[10,20,50]"
                              :current="searchAll.start"
                              :page-size="searchAll.offset"
                              show-elevator
                              @on-change="startAllChange"
                              @on-page-size-change="offsetAllChange"
                              show-total/>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
        <!--作品详情-->
        <Modal
                v-model="showInfo"
                :title="details.works_name">
            <infoModal :details="details"></infoModal>
            <div slot="footer">
                <Button type="success" @click="showBuyModal(details.works_id)">购买</Button>
                <Button type="primary">代理</Button>
            </div>
        </Modal>
        <!--购买-->
        <Modal
                v-model="showBuy"
                width="700"
                id="buyModal">
            <div slot="header">
                <Row>
                    <Col span="18" offset="2">
                        <Steps :current="buyInfo.buyCurrent" size="small">
                            <Step title="订单填写"></Step>
                            <Step title="签署协议"></Step>
                            <Step title="线下交易"></Step>
                            <Step title="下载"></Step>
                        </Steps>
                    </Col>
                </Row>
            </div>
            <buyModal :details="details" ref="buymodal" @currentChange="currentChange"></buyModal>
            <div slot="footer" style="text-align: center">
                <Row>
                    <Col span="4">
                        <Button type="default" @click="cancelBuy">取消</Button>
                    </Col>
                    <Col span="4" offset="6">
                        <Button type="primary" @click="toNext">{{ buyInfo.nextText }}</Button>
                    </Col>
                    <Col span="10" style="text-align: right">
                        <Button type="primary" v-if="this.buyInfo.buyCurrent != 0">订单详情</Button>
                        <Button type="error" v-if="this.buyInfo.buyCurrent != 0" @click="cancelOrder">取消订单</Button>
                    </Col>
                </Row>
            </div>
        </Modal>
    </div>
</template>

<script>
    import { worksDetail, findPage, findPagePic, findPageMusic, findPageVideo, findPageIssue } from '../../api/works.js'
    import infoModal from './infoModal.vue'
    import buyModal from './buyModal.vue'

    var recommends = {
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
    export default {
        name: "searchResult",
        data: function(){
          return {
              searchAll: {
                  searchKey: '',
                  start: 1,
                  offset: 10
              },
              searchPic: {
                  searchKey: '',
                  start: 1,
                  offset: 10
              },
              searchVideo: {
                  searchKey: '',
                  start: 1,
                  offset: 10
              },
              searchMusic: {
                  searchKey: '',
                  start: 1,
                  offset: 10
              },
              searchIssue: {
                  searchKey: '',
                  start: 1,
                  offset: 10
              },
              listAll: [],
              listPic: [],
              listVideo: [],
              listMusic: [],
              listIssue: [],
              allTotal: 0,
              musicTotal: 0,
              videoTotal: 0,
              picTotal: 0,
              issueTotal: 0,
              showInfo: false,
              showBuy: false,
              details: {},
              currentInfoId: '',
              // 购买
              buyInfo: {
                  buyCurrent: 0,
                  nextText: '下一步'
              }
          }
        },
        components: { infoModal, buyModal },
        methods: {
            // 加载搜索结果-全部
            findPage(){
                // findPage(this.searchAll).then(res => {
                //     this.listAll = res.body
                // })
                this.listAll = recommends
            },
            // 加载搜索结果-图片
            findPagePic(){
                // findPagePic(this.searchPic).then(res => {
                //     this.listPic = res.body
                // })
                this.listPic = recommends.img
            },
            // 加载搜索结果-音乐
            findPageMusic(){
                // findPageMusic(this.searchMusic).then(res => {
                //     this.listMusic = res.body
                // })
                this.listMusic = recommends.music
            },
            // 加载搜索结果-视频
            findPageVideo(){
                // findPageVideo(this.searchVideo).then(res => {
                //     this.listVideo = res.body
                // })
                this.listVideo = recommends.video
            },
            // 加载搜索结果-文章
            findPageIssue(){
                // findPageIssue(this.searchIssue).then(res => {
                //     this.listIssue = res.body
                // })
                this.listIssue = recommends.issue
            },
            // 换页
            startAllChange(start){
                this.searchAll.start = start
                this.findPage()
            },
            startVideoChange(start){
                this.searchVideo.start = start
                this.findPageVideo()
            },
            startPicChange(start){
                this.searchPic.start = start
                this.findPagePic()
            },
            startMusicChange(start){
                this.searchMusic.start = start
                this.findPageMusic()
            },
            startIssueChange(start){
                this.searchIssue.start = start
                this.findPageIssue()
            },
            // 修改每页数量
            offsetVideoChange(offset){
                this.searchVideo.offset = offset
                this.findPageVideo()
            },
            offsetPicChange(offset){
                this.searchPic.offset = offset
                this.findPagePic()
            },
            offsetMusicChange(offset){
                this.searchMusic.offset = offset
                this.findPageMusic()
            },
            offsetIssueChange(offset){
                this.searchIssue.offset = offset
                this.findPageIssue()
            },
            offsetAllChange(offset){
                this.searchAll.offset = offset
                this.findPage()
            },

            // 作品详情
            showInfoModal(id){
                // 先判断现有的详情是不是请求的详情
                if(this.currentInfoId != id){
                    // 1.调用接口 获取详情信息
                    // worksDetail(id).then(res => {
                    //     this.details = res
                    // })
                    // 先模拟一个静态数据
                    this.details = {
                        works_id: '23423424234234',
                        works_name: '鱼香肉丝教程',
                        works_spec: '4M',  // 作品大小
                        works_format: '.mp3', // 格式
                        works_cate: '1',     // 音频3，视频2，文档1，图片0
                        works_memo: '鱼香肉丝as dfl aj sflajfl',     // 作品摘要
                        works_issu_dt: '20170804',   // 作品发布日期
                        usr_name: 'uuuu',        // 作者名称
                        keywords: '美味',        // 作品关键字
                        works_hdgt: '5',       // 作品预估费用
                        type: '科学'
                    }
                    // 更新现有详情id
                    this.currentInfoId = id
                }
                // 2.打开弹窗
                this.showInfo = true
            },
            // 购买
            showBuyModal(){
                this.showBuy = true
            },
            // 取消
            cancelBuy(){
                this.showBuy = false
                this.$refs.buymodal.clearForm()
            },
            // 下一步
            toNext(){
                if(this.buyInfo.nextText === '完成'){
                    this.$refs.buymodal.clearForm()
                    this.showBuy = false
                }else {
                    this.$refs.buymodal.toNext()
                }
            },
            cancelOrder(){
                this.$refs.buymodal.cancelOrder()
            },
            // 改变当前步骤
            currentChange(value,text){
                this.buyInfo.buyCurrent = value
                this.buyInfo.nextText = text
            }
        },
        created(){
            this.findPage()
            this.listPic = this.listAll.img
            this.listMusic = this.listAll.music
            this.listVideo = this.listAll.video
            this.listIssue = this.listAll.issue
            console.log(this.listPic)
        },
        filters: {
            lengthControl(value){
                if(value.length > 40){
                    return value.slice(0,40).concat(' ...')
                }else{
                    return value
                }
            }
        }
    }
</script>

<style scoped>
</style>
