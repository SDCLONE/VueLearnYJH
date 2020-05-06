<template>
    <div id="app">
        <el-container>
            <el-header>
                <NaviPart/>
            </el-header>
            <el-main>
                <ManagementNav/>
            </el-main>
        </el-container>


    </div>
</template>

<script>
    import NaviPart from "./NaviPart";
    import ManagementNav from "./ManagementNav";
    export default {
        name: "ManagementPage",
        components: {ManagementNav, NaviPart},
        data(){
            return{

            }
        },
        methods:{


        }
    }
</script>

<style scoped>
.el-header,.el-main{
    padding:0;
}
</style>