<template>
    <div>
        <h2>导航栏结合vue-router小案例</h2>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect"
                 menu-trigger="click"
                 :router="true"
                 >
            <el-menu-item index="navi-view1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="/navi-view2">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="navi-view3">订单管理</el-menu-item>
        </el-menu>
<!--        设置路由出口-->
        <router-view></router-view>

    </div>
</template>

<script>


    export default {
        name: "NaviMenuCaseWithVueRouter",
        data(){
            return{
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods:{
            //当菜单被选中回调
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                //key对应标签的index属性  keyPath对应上到下的index数组
            }
        }
    }
</script>

<style scoped>

</style>