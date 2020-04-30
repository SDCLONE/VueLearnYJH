

<template>
    <div id="app">
        <el-row class="nav-part">
            <el-col :span="10">
                <i class="el-icon-platform-eleme"></i> Element
            </el-col>
            <el-col :span="11" :offset="1">
                <el-link :underline="false">En</el-link>
                <el-link :underline="false">关于我们</el-link>
                <el-link :underline="false">首页</el-link>
            </el-col>
        </el-row>
        <el-row class="main-part">
            <el-col :span="14">
                <div class="description">
                    <div><i class="el-icon-platform-eleme"></i> 后台管理系统</div>
                    <div>一个使用简单的多功能系统，<br>在这里可以对任务状态进行查看，也可以进行模拟操作</div>
                </div>
            </el-col>
            <el-col :span="9">
                <el-form ref="loginForm" hide-required-asterisk :rules="rules" :model="loginForm" label-width="80px">
                    <p class="form-title">密码登录</p>
                    <el-form-item label="用户名" prop="username">
                        <el-col :span="21">
                            <el-input v-model="loginForm.username"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-col :span="21">
                            <el-input type="password" v-model="loginForm.password"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitLogin('loginForm')" native-type="submitLogin">登录</el-button>
                        <el-button @click="doRegister">注册</el-button>
                        <el-button type="text" @click="doLoginHelp">忘记用户名或密码？</el-button>
                    </el-form-item>
                </el-form>

            </el-col>
        </el-row>
        <footer>
            This is footer
        </footer>

    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        data(){
            return{
                loginForm:{
                    username:'',
                    password:''
                },
                rules:{
                    username:[
                        {required:true,message:'请输入用户名',trigger:'change'}
                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:'change'}
                    ]
                }
            }
        },
        methods:{

            submitLogin(formName){
                //表单校验
                this.$refs[formName].validate((valid)=>{
                    if (valid){
                        //TODO 连接服务器进行表单验证

                        console.log("确认登录");
                        this.$store.commit('LOGIN');
                    }
                })
            },
            doRegister(){
                //TODO 完成注册逻辑
                alert("注册步骤")
            },
            doLoginHelp(){
                //TODO 完成用户名密码找回逻辑
                alert("用户名密码找回步骤")
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
                //key对应标签的index属性  keyPath对应上到下的index数组
            }
        }
    }
</script>

<style scoped>
    #app{
        width: 100%;
        height: 100%;
        position: absolute;
    }
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
    .main-part{
        width: 100%;
        border: 1px solid #000;
        height: 85%;
        position: relative;
        /*background: url("../assets/login_background2.jpg") no-repeat;*/
        /*background-size: 100% 100%;*/
        background-color: #F2F6FC;

    }
    .description{
        /*border: 2px solid #e8e8e8;*/
        margin: 170px 15%;
    }
    .description div:first-child{
        font-size: 40px;
        margin-bottom: 15px;
    }
    .description div{
        font-size: 17px;
    }
    
    .el-form{
        background-color:rgba(255,255,255,0.9);
        margin-top: 150px;
        width: 450px;
        border: 1px solid #DCDFE6;
        transition: 0.5s;
        /*padding-top: 40px;*/
    }
    .el-form:hover{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        transition: 0.5s;
    }
    .form-title{
        margin-left: 25px;
        font-size: 20px;
    }
    footer{
        width: 100%;
        background-color: #252a2f;
        height: 15%;
        position: relative;
    }
</style>