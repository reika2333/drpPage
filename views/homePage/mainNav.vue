<template>
    <nav class="main-nav">
        <div class="header-content">
            <div class="head-search">
                <form>
                    <input type="text"
                           placeholder="输入作品名或作者名称搜索"
                           @input="handleInput"
                           :value="currentValue"
                           ref="input">
                    <button class="btn btn-s btn-b-white"
                            @click="handleClick">站内搜索</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "mainNav",
        model: {
            prop: 'searchKey', //v-model绑定的数据，相当于别名，可以和父组件中的变量名称不一样。
            event: 'searchInfo' // 自定义组件发送的信号名称。
        },
        props: {
            searchKey: {
                type: [String, Number],
                default: ''
            }
        },
        data: function () {
            return {
                currentValue: this.searchKey
            }
        },
        methods: {
            handleInput(event){
                let value = event.target.value;
                console.log(value)
                this.$emit('searchInfo', value);
            },
            handleClick(event){
                this.$emit('click', event);
            }
        }
    }
</script>

<style scoped lang="less">
    .head-search{
        line-height: 50px;
        margin-right: 15px;
    }
</style>
