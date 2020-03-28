<!--
.vue文件由模板、脚本、样式三部分构成
开发的时候在这三个


-->


<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    HelloWorld对应components中的HelloWorld.vue-->
    <HelloWorld/>
  </div>
</template>

<!--App.vue是整个工程组件的汇总，小组件都在components里面-->

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  //注册组件
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
