<template>
<!--    不可以在外层嵌套div，否则主页上会出现大面积空白-->
    <el-dialog
            title="注册用户"
            :visible="getRegisterFormVisible()"
            @close="closeRegisterLayer()"
            @closed="initLayerState()"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :width="'650px'"
    >

        <el-form ref="registerForm"
                 :rules="rules"
                 :model="registerForm"
                 label-width="100px"
                 :status-icon="true" size="small">
            <el-form-item label="用户名" prop="username">
                <el-col :span="20">
                    <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="密码" prop="password" >
                <el-col :span="20" >
                    <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" >
                <el-col :span="20" >
                    <el-input type="password" v-model="registerForm.checkPass" placeholder="确认输入密码"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="电子邮箱" prop="email" >
                <el-col :span="20" >
                    <el-input  v-model="registerForm.email" placeholder="请输入邮箱" ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="邮箱验证码" prop="verifyCode" >
                <el-col :span="11" >
                    <el-input  v-model="registerForm.verifyCode" placeholder="请输入验证码" ></el-input>
                </el-col>
                <el-col :span="9" :offset="1">
                    <el-button type="primary" @click="getVerifyCode()">获取邮箱验证码</el-button>
                </el-col>
            </el-form-item>
            <el-form-item label="手机（选填）" prop="phone" >
                <el-col :span="20" >
                    <el-input  v-model="registerForm.phone" placeholder="请输入手机号" ></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitRegisterInfo('registerForm')" native-type="submitLogin">确认信息</el-button>
                <el-button @click="resetForm('registerForm')">重置</el-button>
            </el-form-item>
        </el-form>

    </el-dialog>

</template>

<script>
    import axios from 'axios';
    import qs from 'querystring';
    axios.defaults.withCredentials=true;
    export default {
        name: "RegisterLayer",
        data(){
            //自定义校验规则
            //最后成功必须要加上callback()否则会一直无法验证成功
            let validateUsername=(rule,value,callback)=>{
                if (value===''){
                    callback(new Error('请输入用户名'));
                }
                else if(value.length<3){
                    callback(new Error('用户名至少为3位'));
                }
                else{
                    axios({
                        method:'get',
                        url:'http://localhost:7770/admin/adminExist/'+this.registerForm.username,
                    }).then(res=>{
                        //该用户名已经存在
                        if (res.data.data===true){
                            callback(new Error('用户名已经存在'));
                        }
                        //正确
                        else {
                            callback();
                        }
                    })
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }
                else if(value.length<=5){
                    callback(new Error("密码长度至少6位"));
                }
                else {
                    if (this.registerForm.checkPass !== '') {
                        this.$refs.registerForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            let validateCheckPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.registerForm.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            let validateEmail = (rule, value, callback) =>{
                let emailReg=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
                if (value===''){
                    callback(new Error('电子邮箱不可以为空'));
                }
                else if(!emailReg.test(value)){
                    callback(new Error('电子邮箱格式不正确'));
                }
                else{
                    callback();
                }
            };
            let validateVerifyCode=(rule,value,callback)=>{
                let codeReg=/^\d+$/;
                if(value===''){
                    callback(new Error('请输入验证码'));
                }
                else if (!codeReg.test(value)){
                    callback(new Error('请输入正确的验证码'));
                }
                else {
                    callback();
                }

            };
            let validatePhone=(rule,value,callback)=>{
                let phoneReg=/^\d+$/;
                if(value===''){
                    callback();
                }
                else if (!phoneReg.test(value)){
                    callback(new Error('请输入正确的电话号码'));
                }
                else {
                    callback();
                }

            };
            return{
                //表单元素
                registerForm:{
                    username:'',
                    password:'',
                    checkPass:'',
                    email:'',
                    verifyCode:'',
                    phone:'',
                },
                //校验规则
                rules:{
                    username:[
                        {required:true,validator:validateUsername,trigger:'blur'},
                    ],
                    password: [
                        {required:true, validator:validatePass, trigger:'blur'}
                    ],
                    checkPass:[
                        {required:true, validator:validateCheckPass, trigger:'blur'}
                    ],
                    email:[
                        {required:true, validator:validateEmail, trigger:'blur'}
                    ],
                    verifyCode:[
                        {required:true,validator:validateVerifyCode,trigger:'blur'}
                    ],
                    phone:[
                        {required:false, validator:validatePhone,trigger:'blur'}
                    ]

                }
            }
        },
        methods:{
            getRegisterFormVisible(){
                return this.$store.state.registerFormVisible;
            },
            closeRegisterLayer(){
                //需要验证
                if (this.$store.state.registerCloseFlag===1){
                    this.$confirm('是否确认退出注册流程？','提示',{
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(()=>{
                        this.$store.state.registerFormVisible=false;
                    }).catch(()=>{})
                }
                //不需要退出验证
                else{
                    this.$store.state.registerFormVisible=false;
                }

            },
            //关闭结束恢复layer初始状态
            initLayerState(){
                this.$store.state.registerCloseFlag=1;
                //重置表单
                this.resetForm('registerForm');
            },

            //提交注册表单
            submitRegisterInfo(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // alert('submit!');
                        let data={
                            username:this.registerForm.username,
                            password:this.registerForm.password,
                            email:this.registerForm.email,
                            phone:this.registerForm.phone,
                            verifyCode:this.registerForm.verifyCode
                        };
                        axios({
                            method:'post',
                            url:'http://localhost:7770/admin/createAdmin',
                            data:qs.stringify(data)
                        }).then(res=>{
                            //验证码错误
                            if (res.data.status===this.$store.state.VERIFY_INCORRECT){
                                this.$message.error(res.data.desc);
                            }
                            //验证码正确
                            else {
                                this.$message.success("注册成功");
                                this.$store.state.registerCloseFlag=0;
                                this.$store.state.registerFormVisible=false;
                            }
                        });
                        return false;
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            //重置表单
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
            //获取邮箱验证码
            getVerifyCode(){
                this.$refs.registerForm.validateField('email',err=>{
                    //邮箱验证通过
                    if (err===''){
                        console.log("邮箱验证通过，可以发送邮件啦");
                        axios({
                            method:'get',
                            url:'http://localhost:7770/admin/emailVerifyCode/'+this.registerForm.email,
                        }).then(res=>{
                            //判断是否为频繁请求
                            if (res.data.status===this.$store.state.FREQUENT_CODE_REQUEST){
                                this.$notify.error({
                                    title:'错误',
                                    message:res.data.desc
                                })
                            }
                            //如果不是频繁请求
                            else{
                                this.$notify.success({
                                    title:'成功',
                                    message:'验证码发送成功'
                                })
                            }

                        });
                    }
                    //邮箱验证失败
                    else{
                        console.log("邮箱验证失败："+err);
                        this.$notify.error({
                            title:'错误',
                            message:err
                        })
                    }

                });
            }

        }
    }
</script>

<style scoped>

</style>