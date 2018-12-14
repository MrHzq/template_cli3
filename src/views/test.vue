<template>
    <div class="test">
        <div>我是：Cli 3 + Base</div>
    </div>
</template>

<script>
    export default {
        name: 'test',
        created() {
            this.$api
                .login({
                    phone: '13402318457',
                    code: '123458'
                })
                .then(res => console.log(res))
        }
    }
</script>

<style lang="scss" scoped>
    .test {
        color: red;
    }
</style>
