<template>
    <div class="info-card">
        <div class="info-card-head">
            <h3>作品注册</h3>
        </div>
        <div class="info-card-body">
            <form class="lr-form">
                <div class="form-cell">
                    <input type="file" >
                    <label>文件上传</label>
                </div>
                <div class="form-cell">
                    <input type="file" >
                    <label>密钥上传</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>作品名称</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>作品类型</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>作品格式</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>作品主题</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>关键字</label>
                </div>
                <div class="form-cell">
                    <input type="text" >
                    <label>作品简介</label>
                </div>
                <div class="form-cell">
                    <input type="radio" name="isFree" value="0">
                    <input type="radio" name="isFree" value="1">
                    <label>关键字</label>
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
        name: "worksRegister"
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
            [type="radio"]{
                display: inline-block;
                position: absolute;
                margin-left: 10px;
            }
            label{
                right: 560px;
            }
        }

    }

</style>