<template>
    <form>
        <input type="text" v-model="loginObj.usr_nm" placeholder="请输入用户名">
        <input type="password" v-model="loginObj.usr_pwd" placeholder="请输入密码">
        <button @click="login">登录</button>
    </form>
</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                loginObj: {
                    usr_nm: '',
                    usr_pwd: ''
                }
            }
        },
        methods: {
            login(){
                if(this.loginObj.usr_nm && this.loginObj.usr_pwd){
                    this.$http.post('http://192.168.1.104:8080/drp/loginSubmit',JSON.stringify(this.loginObj),{emulateJSON: true}).then(res => {
                        console.log(res)
                        if(!res.body.dataOne){
                            // 表示登录成功
                            window.location.href = '../personal/myMainPage.html'
                        }else{
                            alert(res.body.msg)
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped>
input{
    margin-top: 30px;
}
button{
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>