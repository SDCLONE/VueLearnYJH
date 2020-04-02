<template>
  <div id="app">
<!--    设置路由导航-->
    <div id="nav">
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
<!--        带参数的路由-->
        <router-link to="/mine/zhangsan/24">个人中心参数1</router-link>
        <router-link to="/mine2?name=zhangsan&age=25">个人中心参数2</router-link>
        <router-link to="/mine3/小撩/女?height=150">个人中心参数3</router-link>
    </div>
<!--   设置路由出口-->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

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
  #nav{
    padding: 30px
  }
  #nav a{
    font-size: 18px;
    color:blue;
    margin: 0 10px;
  }
  #nav a.router-link-exact-active{
    color:red;
  }
</style>
