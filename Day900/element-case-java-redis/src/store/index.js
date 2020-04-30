import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus:false,
    username:''
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
    }
  },
  //异步操作
  actions: {
  },
  modules: {
  }
})
