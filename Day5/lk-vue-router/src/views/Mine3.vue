<template>
    <div id="mine">
        <h2>个人中心props参数</h2>
        <hr>
        <!--        props获取参数-->
        <p>name: {{name}}</p>
        <p>sex: {{sex}}</p>
        <p>height: {{height}}</p>
    </div>
</template>

<script>
    export default {
        name: "Mine",
        //props获取参数
        props:['name','sex','height']
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