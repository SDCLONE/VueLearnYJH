import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //用户登录状态
    loginStatus:false,
    admin:{},
    adminUsername:'',

    //用户注册flag和找回用户名密码flag
    registerFormVisible:false,
    registerCloseFlag:1,    //0:不需要验证    1需要验证
    getBackUsernamePasswordVisible:false,

    //用户状态码信息
    SUCCESS:0,
    SYSTEM_ERROR:10000,
    USER_HAS_EXISTED:20001,
    USER_NOT_FIND:20002,
    USER_LOGIN_FAIL:20003,
    USER_NOT_LOGIN:20004,
    EMAIL_NOT_EXIST:20005

  },
  //同步操作
  mutations: {
    LOGIN(state){
      state.loginStatus=true;

      //TODO 修改loginId
    },
    LOGOUT(state){
      state.loginStatus=false;
      state.username='';
    },

  },
  //异步操作
  actions: {
  },
  modules: {
  }
})
