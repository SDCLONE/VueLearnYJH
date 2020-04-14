import Vue from "vue";
import Router from "vue-router"

//引入页面
import NaviView1 from "./views/NaviView1";
import NaviView2 from "./views/NaviView2";
import NaviView3 from "./views/NaviView3";
import View3Item1 from "./views/View3Item1";
import View3Item2 from "./views/View3Item2";
import View3Item3 from "./views/View3Item3";

Vue.use(Router);

let func=({query})=>{
    return{
        name:query.name
    }
};


export default new Router({
    routes:[
        {path:'/', redirect:'/navi-view1'},
        {path:'/navi-view1',name:'navi-view1',component:NaviView1},
        {path:'/navi-view2',name:'navi-view2',component:NaviView2},
        {
            path:'/navi-view3',
            name:'navi-view3',
            component:NaviView3,
            children:[
                //二级目录配置不需要加斜杠 /
                {path:'/',redirect:'/navi-view3/item2'},
                {path:'item1',name:'item1',component:View3Item1,props:func},
                {path:'item2',name:'item2',component:View3Item2},
                {path:'item3',name:'item3',component:View3Item3},
            ]
        }
        ]
})