<template>
    <div class="info-card">
        <div class="info-card-head">
            <h3>添加新的角色</h3>
        </div>
        <div class="info-card-body">
            <!--<form class="lr-form">
                <div class="form-cell">
                    <input type="text" >
                    <label>角色</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>资质证书</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>备注</label>
                </div>
                <div class="form-footer">
                    <button class="btn btn-blue btn-s">提交申请</button>
                </div>
            </form>-->
            <Form :label-width="110">
                <Row>
                    <Col span="22">
                        <FormItem label="角色：">
                            <Input readonly v-model.trim="formData.char_type"></Input>
                        </FormItem>
                    </Col>
                    <Col span="22">
                        <FormItem label="资质证书：">
                            <Input readonly v-model.trim="formData.card"></Input>
                        </FormItem>
                    </Col>
                    <Col span="22">
                        <FormItem label="备注：">
                            <Input readonly v-model.trim="formData.remark">
                            </Input>
                        </FormItem>
                    </Col>
                    <Col span="22" style="text-align: center">
                        <Button type="primary">提交申请</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "charactorApply",
        data: function () {
            return {
                formData: {
                    char_type: '',
                    card: '',
                    remark: ''
                }
            }
        }
    }
</script>

<style scoped lang="less">
.info-card-body{
    /*top: 0;*/
    /*width: 100%;*/
}
</style>
