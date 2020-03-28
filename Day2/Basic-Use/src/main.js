import Vue from 'vue'
import App from './App.vue'

//阻止启动生产消息
Vue.config.productionTip = false;
//整个工程的入口
/*

 render:function(createElement){
    return createElement(App);
 }

 render(createElement){
    return createElement(App);
 }

 render(h){
    return h(App);
 }

 render:h=>h(App)
 */
new Vue({
  render: h => h(App),
}).$mount('#app');
//$mount手动挂载
//生成的所有组件都在#app上

