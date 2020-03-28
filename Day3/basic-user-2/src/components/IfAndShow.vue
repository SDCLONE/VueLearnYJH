<template>
    <div>
        <h3>v-if的使用</h3>
        <div v-if="flag">今晚要上课</div>
        <div v-else>今晚不上课</div>
        <div><button @click="flag=!flag">点击变换</button></div>
        <hr>
        <p>--------------</p>
        <h3>v-show的使用</h3>
        <div v-show="flag">今晚要上课</div>
        <div v-show="!flag">今晚不上课</div>
        <div><button @click="flag=!flag">点击变换</button></div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "IfAndShow",
        data(){
            return{
                flag:true
            }
        }
    }
</script>

<style scoped>

</style>