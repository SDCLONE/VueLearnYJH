<template>
    <div id="app">
        <el-container>
            <el-aside width="210px">
                <el-menu
                        default-active="/service1"
                        class="management-navi-vertical"
                        @select="handleSelect"
                        :router="true"
                        :unique-opened="true"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>网络服务</span>
                        </template>
                        <el-menu-item index="/service1">服务列表</el-menu-item>
                        <el-menu-item index="/service2">服务订阅</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>细分功能</span>
                        </template>
                        <el-menu-item index="/func1">任务分发</el-menu-item>
                        <el-menu-item index="/func2">任务卸载</el-menu-item>
                        <el-menu-item index="/func3">任务监控</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>个人中心</span>
                        </template>
                        <el-menu-item index="/user-list">用户列表</el-menu-item>
                        <el-menu-item index="/personal-info">个人信息</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <!--            设置路由出口-->
                <router-view></router-view>
                <div class="test-box"></div>
                <div class="test-box"></div>
                <div class="test-box"></div>
                <div class="test-box"></div>
                <div class="test-box"></div>
            </el-main>
        </el-container>

        
    </div>
</template>

<script>
    export default {
        name: "ManagementNav",
        methods:{
            handleSelect(key,keyPath){
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
.management-navi-vertical{
    width: 200px;
    min-height: 550px;
}
    .el-main,.el-aside{
        border: 1px solid pink;
    }
    .test-box{
        width: 200px;
        height: 200px;
        border: 1px solid #000;
    }
</style>