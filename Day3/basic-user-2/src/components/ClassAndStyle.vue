<template>
    <div>
        <hr>
        <h3>class动态绑定</h3>
        <div :class="oneClass">样式类可以是字符串</div>
        <div :class="{classOne:true,classTwo:true}">样式类可以是对象</div>
        <div :class="['classOne','classTwo']">样式类可以是数组</div>
        <div :class="[oneClass,twoClass]">样式类可以是数组</div>
        <hr>

        <h3>style的使用</h3>
        <div
            style="width: 300px;height: 150px;margin: 10px auto"
            :style="{backgroundColor:bgColor,fontSize:fSize}"
        >动态改变style</div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "ClassAndStyle",
        data(){
            return{
                oneClass:'classOne',
                twoClass:'classTwo',
                bgColor:'red',
                fSize:'30px'
            }
        }
    }
</script>

<style scoped>
    .classOne{
        font-size: 20px;
        color: red;
    }
    .classTwo{
        width: 200px;
        height: 100px;
        background-color: skyblue;
        margin: 10px auto;
    }
</style>