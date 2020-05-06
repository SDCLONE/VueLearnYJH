<template>
    <div>
        <el-row class="nav-part">
            <el-col :span="10">
                <i class="el-icon-platform-eleme"></i> Element
            </el-col>
            <el-col :span="13">
                <el-link :underline="false" v-show="getLoginStatus()">
                    <el-dropdown >
                        <span class="el-dropdown-link">
                            {{this.$store.state.adminUsername}}<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <el-link :underline="false" href="http://www.baidu.com" target="_blank">个人中心</el-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <el-link :underline="false" @click="handleLogout">退出登录</el-link>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-link>
                <el-link :underline="false">En</el-link>
                <el-link :underline="false">关于我们</el-link>
                <el-link :underline="false">首页</el-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from "axios";
    import qs from "querystring";   //当发送post请求需要用到
    axios.defaults.withCredentials=true;

    export default {
        name: "NaviPart",
        data(){
            return{

            }
        },
        methods:{
            getLoginStatus(){
                // console.log("登录状态: "+this.$store.state.loginStatus);
                return this.$store.state.loginStatus;
            },
            handleLogout(){
                console.log("退出登录");
                this.$store.commit('LOGOUT');

                //TODO 退出登录的逻辑
                axios({
                    method:'get',
                    url:'http://localhost:7770/admin/logout'
                }).then(()=>{
                    this.$message({
                        showClose:true,
                        message:'退出登录',
                        duration:1500
                    })
                })
            }
        }
    }
</script>

<style scoped>
    .nav-part{
        width: 100%;
        height: 60px;
        background-color: #252a2f;
    }
    .nav-part .el-col{
        line-height: 60px;
        text-align: center;
        font-size: 30px;
        color: #FFFFFF;
    }
    .nav-part .el-col:first-child{
        font-size: 35px;
        text-align: left;
        padding-left: 30px;
    }
    .nav-part .el-link{
        float: right;
        margin-left: 20px;
        margin-right: 20px;
        color: #FFFFFF;
    }
    .el-dropdown-link{
        color: white;
    }
    .el-dropdown-link:hover{
        color: #409EFF;
    }
</style>