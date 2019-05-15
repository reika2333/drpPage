<template>
    <header class="bottom-shadow">
        <div class="header-content">
            <h2><b>D</b>RP</h2>
            <h3><a href="../homePage/homePage.html">主页</a></h3>
            <div class="head-img">
                <a href="../personal/myMainPage.html"><img src="../../img/head_default.jpeg"></a>
                <div>{{ user.usr_nm }} | ID:{{ user.usr_id }}</div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "header",
        props: [
            'user'
        ]
    }
</script>

<style scoped lang="less">
    .head-img {
        height: 61px;
        position: relative;
        img {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            border: solid 3px white;

            display: inline;
            position: absolute;
            top: -50px;
            left: 1100px;

        }
        div {
            display: inline;
            bottom: 20px;
            position: absolute;
            left: 1170px;
            top: -40px;

            color: white;
            font-size: 15px;
        }
    }
</style>
