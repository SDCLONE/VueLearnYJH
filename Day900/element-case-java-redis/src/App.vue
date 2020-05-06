<template>
  <div id="app">
    <LoginPage v-show="!getLoginStatus()"/>
    <ManagementPage v-show="getLoginStatus()"/>
  </div>
</template>

<script>
import LoginPage from "./components/LoginPage";
import ManagementPage from "./components/ManagementPage";

import axios from 'axios';
import qs from 'querystring';
axios.defaults.withCredentials=true;

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
  },
  mounted() {
    // alert("页面加载完毕");
    //页面加载完毕发送session验证
    //如果session中存在登录信息就跳过登录
    axios({
      method:'get',
      url:'http://localhost:7770/admin/getUsernameBySession'
    }).then(res=>{
      console.log("这个是页面加载完毕的输出",res.data);
      //session中有登录信息
      if (res.data.status===0){
        this.$store.commit('LOGIN',res.data.data);
      }
      //session中没有登录信息
      else{
        this.$store.commit('LOGOUT');
      }
    })
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
