<template>
    <header class="bottom-shadow">
        <div class="header-content">
            <h2><b>D</b>RP</h2>
            <h3><a href="../homePage/homePage.html">主页</a></h3>
            <div class="head-search">
                <form action="">
                    <input type="text" placeholder="输入作品名或作者名称搜索" v-model="publicKey">
                    <Button type="default" ghost @click="search">站内搜索</Button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header",
        data: function(){
            return {
                publicKey: ''
            }
        },
        methods: {
            search(){
                window.location.href = '../homePage/homePage.html#/searchResult?works_name=' + this.publicKey
            }
        }
    }
</script>

<style scoped>

</style>
