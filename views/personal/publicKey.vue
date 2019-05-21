<template>
    <div class="info-card">
        <div class="info-card-head">
            <h3>公钥查找结果</h3>
        </div>
        <div class="info-card-body">
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
    </div>
</template>

<script>
    export default {
        name: "publicKey",
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
                        title: '用户名',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '用户ID',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '公钥',
                        key: 'works_name',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: 'works_name',
                        align: 'center',
                        render: (h, params) => {
                            return  h('div', [
                                h('div', {
                                    domProps: {
                                        innerHTML: `<a src="">下载</a>`
                                    }
                                })
                            ])
                        }
                    }
                ],
            }
        }
    }
</script>

<style scoped>

</style>
