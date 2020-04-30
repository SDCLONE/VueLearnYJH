<template>
  <div id="app">
    <LoginPage v-show="!getLoginStatus()"/>
    <ManagementPage v-show="getLoginStatus()"/>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage";
import ManagementPage from "./components/ManagementPage";

export default {
  name: 'app',
  components: {
    ManagementPage,
    LoginPage
  },
  methods:{
    getLoginStatus(){
      // console.log("登录状态: "+this.$store.state.loginStatus);
      return this.$store.state.loginStatus;
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    height: 100%;
    width: 100%;
  }
#app {

}
</style>
