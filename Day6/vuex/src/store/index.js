import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  //存储公共数值
  state: {
    count:0 //初始化数据
  },
  //同步操作
  mutations: {
    INCREMENT(state){
      state.count++;
    },
    DECREASEMENT(state){
      state.count--
    }
  },
//异步操作
  actions: {
    increment({commit}){
      commit('INCREMENT');
    },
    decreasement({commit}){
      commit('DECREASEMENT');
    },
    incrementIfEven({commit,state}){
      if (state.count%2===0){
        commit('INCREMENT');
      }
    },
    //模拟异步操作
    incrementAsync({commit}){
      setTimeout(()=>{
        commit('INCREMENT');
      },1000);
    }
  }
  ,
  modules: {
  },
  getters:{
    evenOrOdd(state){
      return state.count % 2 === 0 ? '偶数':'奇数';
    }
  }
})
