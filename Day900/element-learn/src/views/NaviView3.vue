<template>
    <div id="app">
        <el-row>
            <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="3">
                <el-menu
                        default-active="/navi-view3/item2"
                        class="el-menu-vertical-demo"
                        @select="handleSelect"
                        :router="true"
                >
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="/navi-view3/item1?name=zhangsan">选项1</el-menu-item>
                            <el-menu-item index="/navi-view3/item1?name=lisi">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="/navi-view3/item1?name=yanzhibo">选项3</el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>
                    <el-menu-item index="/navi-view3/item2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="/navi-view3/item3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航禁用</span>
                    </el-menu-item>
                    <el-menu-item index="/navi-view3/item3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                </el-menu>
            </el-col>

            <el-col :span="15">
<!--                设置二级路由出口-->
                <router-view></router-view>
            </el-col>
        </el-row>


    </div>
</template>

<script>
    export default {
        name: "NaviView3",
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
    .el-menu-vertical-demo{
        border-right: 1px #DCDFE6 solid;
        /*width: 250px;*/
    }
</style>