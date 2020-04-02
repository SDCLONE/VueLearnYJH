<template>
    <div id="mine">
        <h2>个人中心params参数</h2>
        <hr>
<!--        获取参数-->
        <p>name: {{this.$route.params.name}}</p>
        <p>age: {{this.$route.params.age}}</p>

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

            /**
             * /:<param> 参数在this.$route中的params中
             * ?<param>=<value>&<param2>=<value2> 参数在this.$route中的query中
             */
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