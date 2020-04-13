import Vue from "vue";
import Router from "vue-router"

//引入页面
import NaviView1 from "./views/NaviView1";
import NaviView2 from "./views/NaviView2";
import NaviView3 from "./views/NaviView3";

Vue.use(Router);

export default new Router({
    routes:[
        {path:'/', redirect:'/navi-view1'},
        {path:'/navi-view1',name:'navi-view1',component:NaviView1},
        {path:'/navi-view2',name:'navi-view2',component:NaviView2},
        {path:'/navi-view3',name:'navi-view3',component:NaviView3}
    ]
})