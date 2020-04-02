import Vue from 'vue';
import Router from 'vue-router';

//引入页面
import Home from "./views/Home";
import About from "./views/About";
import Mine from "./views/Mine";
import Mine2 from "./views/Mine2";
import Mine3 from "./views/Mine3";

Vue.use(Router);

let func=({params,query})=>{
    return{
        name:params.name,
        sex:params.sex,
        height:query.height
    }
};

export default new Router({
    routes:[
        // {path:'/',redirect:'/home'},
        // {path:'/',redirect: {name:'/home'}},
        {path:'/',redirect: to=>{return '/home'}},
        {path:'/home',name:'home',component:Home},
        {path:'/about',name:'about',component:About},
        //路由传递参数方式1    /:<param>/:<param2>
        {path:'/mine/:name/:age',name:'mine',component:Mine},
        //路由传递参数方式2    ?<param>=<value>&<param2>=<value2>
        {path:'/mine2',name:'mine2',component:Mine2},
        //路由传参属性传递  属性中query的值必须通过函数传递
        // {path:'/mine3',name:'mine3',component:Mine3,props:{name:'小撩',sex:'女'}}
        //{path:'/mine3/:name/:sex',name:'mine3',component:Mine3,props:true}
        {path:'/mine3/:name/:sex',name:'mine3',component:Mine3,props:func}
    ],
    mode:'history'
})