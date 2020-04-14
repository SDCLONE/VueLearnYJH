<template>
    <div id="mine">
        <h2>个人中心params参数</h2>
        <hr>

    </div>
</template>

<script>
    export default {
        name: "Mine",
        //获取url中的参数
        created() {
            console.log(this.$route);
            console.log(this.$router);

            console.log(this.$route.params);


        }
    }
</script>

<style scoped>
    #mine{
        width: 300px;
        height: 500px;
        background-color: green;
        margin: 0 auto;
    }
    h2{
        color: lightyellow;
    }
</style>