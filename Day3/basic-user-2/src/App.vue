<template>
  <div id="app">
    <ClassAndStyle/>
    <IfAndShow/>
    <ListRender/>
    <ListRenderTwo/>
    <OtherInstruct/>

  </div>
</template>

<script>
import ClassAndStyle from "./components/ClassAndStyle";
import IfAndShow from "./components/IfAndShow";
import ListRender from "./components/ListRender";
import ListRenderTwo from "./components/ListRenderTwo";
import OtherInstruct from "./components/OtherInstruct";
export default {
  name: 'App',
  components: {
    ClassAndStyle,
    IfAndShow,
    ListRender,
    ListRenderTwo,
    OtherInstruct

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
