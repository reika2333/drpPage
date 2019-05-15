<template>
    <div class="info-card">
        <Collapse id="mybalabala" accordion simple value="我的足迹">
            <Panel name="我的足迹">
                我的足迹
                <div class="info-card-body" slot="content">
                    <!--列表-->
                    <Table class="mytable" :columns="myColumns" :data="myAgentList"></Table>
                    <!--分页-->
                    <Row style="height: 40px;margin-top: 10px">
                        <Col style="text-align: right">
                            <Page :total="10"
                                  show-sizer/>
                        </Col>
                    </Row>
                </div>
            </Panel>
            <Panel name="我的购买">
                我的购买
                <div class="info-card-body" slot="content">
                    <!--列表-->
                    <Table class="mytable" :columns="myColumns" :data="myAgentList"></Table>
                    <!--分页-->
                    <Row style="height: 40px;margin-top: 10px">
                        <Col style="text-align: right">
                            <Page :total="10"
                                  show-sizer/>
                        </Col>
                    </Row>
                </div>
            </Panel>
        </Collapse>
        <!--<div class="info-card-head">-->
            <!--<h3>我的足迹</h3>-->
        <!--</div>-->
        <!--<div class="info-card-body">-->

        <!--</div>-->
        <!--<div class="info-card-head">-->
            <!--<h3>我的购买</h3>-->
        <!--</div>-->
        <!--<div class="info-card-body">-->

        <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "formalUser",
        props: [
            'formalUserInfo'
        ],
        data: function () {
            return {
                myColumns: [
                    {
                        title: '序号',
                        type: 'index',
                        align: 'center',
                        width: 80
                    },
                    {
                        title: '作品名称',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '作者',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '申请时间',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '代理期限',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '分成',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '协议状态',
                        key: 'works_name',
                        align: 'center'
                    }
                ],
                myAgentList: []
            }
        }
    }
</script>

<style lang="less">

</style>
