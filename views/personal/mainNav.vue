<template>
    <nav class="main-nav">
        <div class="head-img">
            <img src="../../img/head_default.jpeg">
            <div>{{ user.usr_nm }} | ID:{{ user.usr_id }}</div>
        </div>
        <ul>
            <li><router-link to="/formalUser">普通用户</router-link></li>
            <li v-if="author"><router-link to="/author">作者</router-link></li>
            <li v-if="agent"><router-link to="/agent">代理商</router-link></li>
            <li><router-link to="/charactorApply">新的角色</router-link></li>
            <li><button class="r-btn r-btn-s r-btn-b-white">下载我的公钥</button></li>
        </ul>
        <div style="clear: both"></div>
    </nav>
</template>

<script>
    export default {
        name: "mainNav",
        props: [
            'user'
        ],
        data: function () {
            return {
                agent: !(this.user.role_ids.indexOf(2) === -1),
                author: !(this.user.role_ids.indexOf(1) === -1),
                // user: this.user
            }
        },

    }
</script>

<style scoped>

</style>
