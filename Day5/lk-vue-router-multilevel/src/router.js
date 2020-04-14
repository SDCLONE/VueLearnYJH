import Vue from 'vue';
import Router from 'vue-router';

//引入页面
import Home from "./views/Home";
import About from "./views/About";
import Mine from "./views/Mine";


//引入页面二级
import News from "./views/News";
import Shops from "./views/Shops";

Vue.use(Router);



export default new Router({
    routes:[
        {path:'/',redirect: to=>{return '/home'}},
        {
            path:'/home',
            name:'home',
            component:Home,
            //利用children属性配置二级路由
            children:[
                //配置重定向
                {path:'/',redirect:'/home/news'},
                //配置二级路由
                {path:'news',name:'news',component:News},
                {path:'shops',name: 'shops',component: Shops}
            ]
        },
        {path:'/about',name:'about',component:About},
        {path:'/mine',name:'mine',component:Mine},
        ],
    //设置前端是否展示#号  history
    // mode:'history'
})