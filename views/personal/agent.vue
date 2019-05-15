<template>
    <div class="info-card">
        <Collapse id="mybalabala" accordion simple value="我的代理">
            <Panel name="我的代理">
                我的代理
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
            <Panel name="代理申请">
                代理申请
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
            <Panel name="作者的代理邀请">
                作者的代理邀请
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
            <Panel name="作品订单">
                作品订单
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
    </div>
</template>

<script>
    export default {
        name: "agent",
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
    #mybalabala .ivu-collapse-header {
        font-size: 16px !important;
    }
</style>
