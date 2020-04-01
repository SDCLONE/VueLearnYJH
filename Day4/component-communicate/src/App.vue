<template>
  <div id="app">
<!--    给子组件传值，除了string类型，其他都需要加上:  -->
    <PropsComponent name="小撩" :age=25 :person=p />
  </div>
</template>

<script>
import PropsComponent from "./components/PropsComponent";

export default {
  name: 'App',
  data(){
    return{
      p:{
        name:'yzb',
        age:19
      }
    }
  },
  components: {
    PropsComponent
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
