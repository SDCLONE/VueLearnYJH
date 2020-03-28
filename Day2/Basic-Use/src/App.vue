<!--
.vue文件由模板、脚本、样式三部分构成
开发的时候在这三个


-->


<template>
  <div id="app">
    <Template/>
    <hr>
    <hr>
    <hr>

    <ComputedAndWatch/>

  </div>
</template>

<!--App.vue是整个工程组件的汇总，小组件都在components里面-->

<script>
import Template from "./components/Template";
import ComputedAndWatch from "./components/ComputedAndWatch";

export default {
  name: 'App',
  //注册组件
  components: {
    Template,
    ComputedAndWatch
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
