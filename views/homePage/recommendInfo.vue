<template>
    <div class="info-card">
        <!--视频-->
        <div class="info-card-head">
            <h3>视频推荐</h3>
            <a href="#">更多>></a>
        </div>
        <div class="info-card-body-flex">
            <div class="work-card" v-for="item in data.video" >
                <a href=""><img src="http://pic39.nipic.com/20140308/9370364_103332481000_2.jpg" alt=""></a>
                <div class="name">{{ item.works_name }}</div>
                <div class="author">发布：{{  item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
            </div>
        </div>
        <!--文章-->
        <div class="info-card-head">
            <h3>文章推荐</h3>
            <a href="#">更多>></a>
        </div>
        <div class="info-card-body">
            <div class="work-issue" v-for="item in data.issue">
                <a href=""><h4>&nbsp{{ item.works_name }}</h4></a>
                <p>摘要：{{ item.works_memo | lengthControl }}</p>
                <div class="author">发布：{{ item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
            </div>
        </div>
        <!--图片-->
        <div class="info-card-head">
            <h3>图片推荐</h3>
            <a href="#">更多>></a>
        </div>
        <div class="info-card-body-flex">
            <div class="work-card" v-for="item in data.img" >
                <a href=""><img src="http://pic.qjimage.com/chineseview027/high/jkd-1677.jpg" alt=""></a>
                <div class="name">{{ item.works_name }}</div>
                <div class="author">发布：{{  item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
            </div>
        </div>
        <!--音乐-->
        <div class="info-card-head">
            <h3>音乐推荐</h3>
            <a href="#">更多>></a>
        </div>
        <div class="info-card-body">
            <div class="work-issue" v-for="item in data.music">
                <a href=""><h4>&nbsp{{ item.works_name }}</h4></a>
                <p>简述：{{ item.works_memo | lengthControl }}</p>
                <div class="author">发布：{{ item.works_rgst_tm }} &nbsp作者：<a href="">{{ item.usr_nm }}</a></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "recommendInfo",
        data: function () {
            return {

            }
        },
        props: {
            data: {
                type: Object,
                default(){
                    return [{
                        works_name: '',
                        works_rgst_tm: '',
                        usr_nm: ''
                    }]
                }
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
