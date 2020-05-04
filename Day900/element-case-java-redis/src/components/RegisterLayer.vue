<template>
<!--    不可以在外层嵌套div，否则主页上会出现大面积空白-->
    <el-dialog
            title="注册用户"
            :visible="getRegisterFormVisible()"
            @close="closeRegisterLayer()"
            @closed="initLayerState()"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :width="'700px'"

    >
        <h2>hello</h2>
        <h3>hello</h3>
        <el-button type="primary" @click="closeWithoutVerify()">确 定</el-button>
        </el-dialog>

</template>

<script>
    export default {
        name: "RegisterLayer",
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
            },
            closeWithoutVerify(){
                //切换成不需要验证
                this.$store.state.registerCloseFlag=0;
                this.$store.state.registerFormVisible=false;
            }

        }
    }
</script>

<style scoped>

</style>