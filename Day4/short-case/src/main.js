import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

//定义全局过滤器
Vue.filter('globalMoneyFormat',(value)=>{
  return `￥${Number(value).toFixed(4)}`;
});

new Vue({
  render: h => h(App),
}).$mount('#app');
