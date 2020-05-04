

<template>
    <div id="app">
        <el-row>
            <NaviPart/>
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
                    <el-row>
                        <el-col :span="6" class="form-title">
                            密码登录
                        </el-col>
                        <el-col :span="10" class="login-fail-hint" v-show="hintStatus">
                            用户名或密码错误
                        </el-col>
                    </el-row>

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
        <el-row class="footer">
            <div class="help-links">
                <el-link :underline="false">关于我们</el-link>
                <el-link :underline="false">法律声明及隐私权政策</el-link>
                <el-link :underline="false">举报投诉</el-link>
                <el-link :underline="false">联系我们</el-link>
            </div>
            <div class="help-links">
                © 2009-2019 Aliyun.com 版权所有 浙ICP备12022327号 增值电信业务经营许可证： 浙B2-20080101
            </div>
        </el-row>
        <RegisterLayer/>
    </div>
</template>

<script>
    import NaviPart from "./NaviPart";
    import RegisterLayer from "./RegisterLayer";
    import axios from "axios";
    import qs from "querystring";   //当发送post请求需要用到

    export default {
        name: "LoginPage",
        components: {NaviPart,RegisterLayer},
        data(){
            return{
                hintStatus:false,
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
                        axios({
                            method:'post',
                            url:'http://localhost:7770/admin/login',
                            data:qs.stringify(this.loginForm)
                        }).then(res=>{
                            console.log(res);
                            //用户名或者密码错误
                            if (res.data.status===this.$store.state.USER_LOGIN_FAIL){
                                console.log(res.data.desc);
                                this.hintStatus=true;
                                this.$message({
                                    showClose:true,
                                    message:'登录失败',
                                    type:'error',
                                    duration:1500
                                })
                            }
                            //正确登录
                            else{
                                this.hintStatus=false;
                                console.log("确认登录");
                                this.$store.commit('LOGIN');
                                this.$store.state.adminUsername=this.loginForm.username;
                                console.log(this.$store.state.adminUsername);
                                this.$message({
                                    showClose:true,
                                    message:'成功',
                                    type:'success',
                                    duration:1500
                                })
                            }

                        });

                    }
                })
            },
            doRegister(){
                //TODO 完成注册逻辑
                // alert("注册步骤")
                this.$store.state.registerFormVisible=true;
                console.log(this.$store.state.registerFormVisible);
            },
            doLoginHelp(){
                //TODO 完成用户名密码找回逻辑
                alert("用户名密码找回步骤")
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
    .main-part{
        width: 100%;
        height: 80%;
        /*position: relative;*/
        /*background: url("../assets/login_background2.jpg") no-repeat;*/
        /*background-size: 100% 100%;*/
        background-color: #F2F6FC;

    }
    .description{
        /*border: 2px solid #e8e8e8;*/
        margin: 170px 15% 0;
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
        margin:20px 0;
        padding-left: 25px;
        font-size: 20px;
        line-height: 25px;
        /*border: 1px solid #000;*/
    }
    .login-fail-hint{
        margin:20px 0;
        padding-left: 10px;
        font-size: 12px;
        line-height: 25px;
        /*border: 1px solid #000;*/
        color: #F56C6C;
    }
    .footer{
        width: 100%;
        background-color: #252a2f;
        height: 20%;
        position: relative;
        color: #C0C4CC;
    }
    .footer .help-links{
        margin: 20px 10%;
        width: 80%;
    }
    .footer .el-link{
        color: #C0C4CC;
        margin-right: 20px;
    }
</style>