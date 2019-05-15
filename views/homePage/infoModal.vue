<template>
    <div>
        <Form :label-width="85">
            <Row>
                <Col span="8">
                    <FormItem label="作品大小：">
                        <p>{{details.works_spec}}</p>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="作品格式：">
                        <p>{{details.works_format}}</p>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="发布日期：">
                        <p>{{details.works_issu_dt}}</p>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="作者：">
                        <p>{{details.usr_name}}</p>
                    </FormItem>
                </Col>
                <Col span="8">
                    <FormItem label="价格：">
                        <p>{{details.works_hdgt}}/月</p>
                    </FormItem>
                </Col>
                <Col span="16">
                    <FormItem label="关键字：">
                        <p>{{details.keywords}}</p>
                    </FormItem>
                </Col>
                <Col span="24">
                    <FormItem label="作品介绍：">
                        <p>{{details.works_memo}}</p>
                    </FormItem>
                </Col>
            </Row>
        </Form>
    </div>
</template>

<script>
    export default {
        name: "infoModal",
        props: {
            details: {
                type: Object,
                default: {
                    works_name: '',
                    works_spec: '4M',  // 作品大小
                    works_format: '.mp3', // 格式
                    works_cate: '1',     // 音频3，视频2，文档1，图片0
                    works_memo: '鱼香肉丝as dfl aj sflajfl',     // 作品摘要
                    works_issu_dt: '20170804',   // 作品发布日期
                    usr_name: 'uuuu',        // 作者名称
                    keywords: '美味',        // 作品关键字
                    works_hdgt: '0.00'       // 作品预估费用
                }
            }
        }
    }
</script>

<style scoped>
    .ivu-col{
        height: 40px;
    }

</style>
