<template>
    <div>
        <div class="info-card">
            <div class="info-card-head">
                <h3>修改邮箱</h3>
            </div>
            <Form class="info-card-body" label-width="80">
                <Row style="height: 150px;margin-top: 10px">
                    <Col span="20" style="height: 45px">
                        <formItem label="新邮箱：">
                            <Input readonly></Input>
                        </formItem>
                    </Col>
                    <Col span="4" style="height: 45px;text-align: center">
                        <Button type="default">发送验证码</Button>
                    </Col>
                    <Col span="20" style="height: 45px">
                        <formItem label="验证码：">
                            <Input readonly>
                            </Input>
                        </formItem>
                    </Col>
                    <Col span="20" style="text-align: center">
                        <Button type="primary">提交修改</Button>
                    </Col>
                </Row>
            </Form>
        </div>
        <div class="info-card">
            <div class="info-card-head">
                <h3>修改密码</h3>
            </div>
            <Form class="info-card-body" label-width="80">
                <Row style="height: 220px;margin-top: 10px">
                    <Col span="20" style="height: 45px">
                        <formItem label="旧密码：">
                            <Input  type="password"></Input>
                        </formItem>
                    </Col>
                    <Col span="20" style="height: 45px">
                        <formItem label="新密码：">
                            <Input  type="password">
                            </Input>
                        </formItem>
                    </Col>
                    <Col span="20" style="height: 45px">
                        <formItem label="确认密码：">
                            <Input  type="password">
                            </Input>
                        </formItem>
                    </Col>
                    <Col span="20" style="height: 45px">
                        <formItem label="验证码：">
                            <Input>
                            </Input>
                        </formItem>
                    </Col>
                    <Col span="4" style="height: 45px;text-align: center">
                        <Button type="default">发送验证码</Button>
                    </Col>
                    <Col span="20" style="text-align: center">
                        <Button type="primary">提交修改</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "emailChange"
    }
</script>

<style scoped>

</style>
