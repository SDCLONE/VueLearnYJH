<template>
    <div>
        <h1>我是一个组件</h1>
        <h3>双括号表达式 {{intro}}</h3>
        <div>{{intro+10}}</div>
        <div>{{intro.toUpperCase()}}</div>
        <div>{{showInfo("HELLO")}}</div>
        <hr>

        <h3>强制数据绑定</h3>
        <a v-bind:href="site">学习Vue，撩课学院</a>
        <h3>简写</h3>
        <a :href="site">简写的itlike链接</a>

        <hr>
        <h3>绑定事件监听</h3>
        <p><button v-on:click="study">学习Vue</button></p>
        <h3>简写</h3>
        <p><button @click="study2('Yan Zhibo')">学习Vue简写</button></p>

    </div>
</template>

<script>
    export default {
        name:"Template",
        data(){
            return {
                intro:'like it, it like',
                site:'http://www.itlike.com'
            }
        },
        methods:{
            //可以这样写
            showInfo:function (msg) {
                return "返回info: "+msg;
            },
            //也可以这样写
            study(){
                alert("祝你学有所成");
            },
            study2(name){
                alert(`${name}学有所成`);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
