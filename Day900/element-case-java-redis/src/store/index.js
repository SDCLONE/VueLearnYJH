import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus:false
  },
  //同步操作
  mutations: {
    LOGIN(state){
      state.loginStatus=true;
    },
    LOGOUT(state){
      state.loginStatus=false;
    }
  },
  //异步操作
  actions: {
  },
  modules: {
  }
})
