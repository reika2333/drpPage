<template>
    <div>
        <div class="info-card">
            <Tabs type="card"  :animated="false">
                <TabPane label="视频">
                    <div class="work-card" v-for="item in data.video" >
                        <a @click="showInfoModal(item.works_id)"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557584574622&di=fbf2341ce3a8e5d83a6ecf3058d2f3ef&imgtype=0&src=http%3A%2F%2Fs1.st.meishij.net%2Frs%2F115%2F102%2F588115%2Fn588115_143825866815933.jpg"></a>
                        <div class="name">{{ item.works_name }}</div>
                        <div class="author">发布：{{  item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="100" show-sizer show-total/>
                    </Row>
                </TabPane>
                <TabPane label="图片">
                    <div class="work-card" v-for="item in data.img" >
                        <a @click="showInfoModal(item.works_id)"><img src="http://pic.qjimage.com/chineseview027/high/jkd-1677.jpg"></a>
                        <div class="name">{{ item.works_name }}</div>
                        <div class="author">发布：{{  item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="100" show-sizer show-total/>
                    </Row>
                </TabPane>
                <TabPane label="文章">
                    <div class="work-issue" v-for="item in data.issue">
                        <a @click="showInfoModal(item.works_id)"><h4>&nbsp{{ item.works_name }}</h4></a>
                        <p>摘要：{{ item.works_memo | lengthControl }}</p>
                        <div class="author">发布：{{ item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="100" show-sizer show-total/>
                    </Row>
                </TabPane>
                <TabPane label="音乐">
                    <div class="work-issue" v-for="item in data.music">
                        <a @click="showInfoModal(item.works_id)"><h4><Icon type="ios-musical-notes" />&nbsp{{ item.works_name }}</h4></a>
                        <p>简述：{{ item.works_memo | lengthControl }}</p>
                        <div class="author">发布：{{ item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
                    </div>
                    <Row style="text-align: center; margin-top: 18px">
                        <Page :total="100" show-sizer show-total/>
                    </Row>
                </TabPane>
                <TabPane label="全部">

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
            <buyModal :details="details"
                      :current="buyInfo.buyCurrent"
                      :orderInfo="buyInfo.orderInfo"
                      @onOrderChange="orderChange"
                      @onAgree="agreeChange"></buyModal>
            <div slot="footer" style="text-align: center">
                <Row>
                    <Col span="4">
                        <Button type="default"  @click="cancelBuy">取消</Button>
                    </Col>
                    <Col span="4" offset="6">
                        <Button type="primary" @click="toNext">{{ buyInfo.nextText }}</Button>
                    </Col>
                    <Col span="4" offset="6">
                        <Button type="primary" ghost="true" v-if="this.buyInfo.buyCurrent != 0">订单详情</Button>
                    </Col>
                </Row>
            </div>
        </Modal>
    </div>
</template>

<script>
    import { worksDetail } from '../../api/works.js'
    import infoModal from './infoModal.vue'
    import buyModal from './buyModal.vue'
    export default {
        name: "searchResult",
        data: function(){
          return {
              showInfo: false,
              showBuy: false,
              details: {},
              currentInfoId: '',
              // 购买
              buyInfo: {
                  buyCurrent: 0,
                  nextText: '下一步',
                  agree: false,
                  buyForm: {},  // 订单表单，提交时用，由子组件传出
                  orderInfo: {   // 订单详情，提交表单后请求
                      info_isvalid_flg: 0   // 订单状态
                  }
              }
          }
        },
        components: { infoModal, buyModal },
        props: {
            data: {
                type: Object,
                default(){
                    return [{
                        works_name: '',
                        works_rgst_tm: '',
                        usr_nm: '',
                        works_id: ''
                    }]
                }
            }
        },
        methods: {
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
            showBuyModal(){
                this.showBuy = true
            },
            cancelBuy(){

            },
            toNext(){
                if(this.buyInfo.buyCurrent === 0){
                    // 验证购买时限是否为空
                    if(this.buyInfo.buyForm.protocol_deadline) {
                        // 1.调用插入订单接口
                        // 2.调用订单详情接口,将返回数据赋值给orderInfo
                        this.buyInfo.buyCurrent += 1
                    }else{
                        this.$Message.error('请先填写购买期限');
                    }
                }else if(this.buyInfo.buyCurrent === 1){
                    // 验证是否勾选同意
                    if(this.buyInfo.agree) {
                        // 1.调用购买接口
                        // 2.调用订单详情接口,将返回数据赋值给orderInfo
                        this.buyInfo.buyCurrent += 1
                    }else{
                        this.$Message.error('请先同意协议内容');
                    }
                }else if(this.buyInfo.buyCurrent === 2){
                    // 判断订单进度
                    this.buyInfo.buyCurrent += 1
                    this.buyInfo.nextText = '完成'
                }
            },
            orderChange(buyForm){
                this.buyInfo.buyForm = buyForm
            },
            agreeChange(agree){
                console.log(agree)
                this.buyInfo.agree = agree
            }
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
