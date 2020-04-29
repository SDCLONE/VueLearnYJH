

<template>
    <div>
        <h2>这个是登录界面</h2>
        <button @click="handleLogin">点击登录</button>
    </div>
</template>

<script>
    export default {
        name: "LoginPage",
        methods:{
            handleLogin(){
                console.log("确认登录");
                this.$store.commit('LOGIN');
            }
        }
    }
</script>

<style scoped>

</style>