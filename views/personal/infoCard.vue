<template>
    <div class="info-card">
        <div class="info-card-head">
            <h3>{{ title }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "infoCard",
        data: function () {
            return {
                title: '个人资料'
            }
        }
    }
</script>

<style scoped>

</style>