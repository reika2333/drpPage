<template>
    <div class="info-card">
        <div class="info-card-head">
            <h3>添加新的角色</h3>
        </div>
        <div class="info-card-body">
            <form class="lr-form">
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
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "charactorApply"
    }
</script>

<style scoped lang="less">
.info-card-body{
    top: 0;
    width: 70%;
    form{
        input{
            width: 500px;
        }
        label{
            right: 560px;
        }
    }

}
</style>