<template>
    <div>
        <h2>这个是管理界面</h2>
        <p>真是有趣</p>
        <button @click="handleLogout">退出登录</button>
    </div>
</template>

<script>
    export default {
        name: "ManagementPage",
        methods:{
            handleLogout(){
                console.log("退出登录");
                this.$store.commit('LOGOUT');
            }
        }
    }
</script>

<style scoped>

</style>