<template>
    <form>
        <input type="text" name="name" placeholder="请输入用户名" v-model="registerObj.usr_nm">
        <span v-if="name_hint">用户名已存在</span>
        <input type="password" name="password" placeholder="请输入密码" v-model="registerObj.usr_pwd">
        <input type="email" name="email" placeholder="请输入邮箱" v-model="registerObj.newEmail" @keyup="emailCertify">
        <span v-if="email_hint">此邮箱已被使用</span>
        <input type="text" name="code" placeholder="请输入收到的验证码" v-model="registerObj.validCode" id="validCode">
        <a @click="sendEmailCode">发送验证码</a>
        <button @click="register">
            注册
        </button>
    </form>
</template>

<script>
    export default {
        name: "register",
        data: function () {
            return {
                registerObj: {
                    usr_nm: '',
                    newEmail: '',
                    usr_pwd: '',
                    validCode: ''
                },
                name_hint: false,
                email_hint: false,
                old_name: '',
                old_email: ''
            }
        },
        methods: {
            nameCertify(){
                // 当被聚焦时发送验证请求
                if(document.activeElement.name == 'name'){
                    if(this.old_name != this.registerObj.usr_nm){
                        this.old_name = this.registerObj.usr_nm
                        // 验证用户名是否已存在
                        this.$http.post('http://192.168.1.104:8080/drp/validUserIsExist',JSON.stringify({
                            usr_nm: this.registerObj.usr_nm
                        }),JSON.stringify({validCode: this.registerObj.validCode}),{emulateJSON: true}).then(res => {
                            if(!!res.body.dataOne){
                                this.name_hint = true
                            }else {
                                this.name_hint = false
                            }
                        })
                    }
                }

            },
            emailCertify(){
                // 当被聚焦时发送验证请求
                if(document.activeElement.name == 'email'){
                    if(this.old_email != this.registerObj.newEmail){
                        this.old_email = this.registerObj.newEmail
                        // 验证邮箱是否已存在
                        this.$http.post('http://192.168.1.104:8080/drp/validEmailIsExist',this.registerObj.newEmail).then(res => {
                            if(!!res.body.dataOne){
                                this.email_hint = true
                            }else {
                                this.email_hint = false
                            }
                        })
                    }
                }
            },
            sendEmailCode(){
                // 先判断验证码是否正确
                if(!this.email_hint && this.registerObj.newEmail){
                    // 发送验证码
                    this.$http.post('http://192.168.1.104:8080/drp/sendValidCode',this.registerObj.newEmail).then(res => {
                        if(!res.dataOne){
                            alert('验证码已发送至您的邮箱，请注意查收')
                        }else{
                            alert(res.msg)
                        }
                    })
                }
            },
            register(ev){
                // 注册
                if(!this.name_hint && this.registerObj.usr_pwd && !this.email_hint && this.registerObj.validCode){
                    this.$http.post('http://192.168.1.104:8080/drp/register',JSON.stringify(this.registerObj),
                        {emulateJSON: true}).then(res => {
                            if(!res.body.dataOne){
                                alert('恭喜你！注册成功')
                                this.$router.push({
                                    path: '/'
                                })
                            }else{
                                alert(res.msg)
                            }
                    })
                }
                ev.preventDefault()
            }
        },
        mounted(){
            setInterval(this.nameCertify,2000)
            setInterval(this.emailCertify,2000)
        }
    }
</script>

<style scoped>
    input{
        margin-top: 15px;
    }
    button{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    #validCode{
        width: 70%;
    }
    a{
        cursor: pointer;
        display: inline-block;
        padding-left: 4px;
    }
    span{
        color: brown;
    }
</style>