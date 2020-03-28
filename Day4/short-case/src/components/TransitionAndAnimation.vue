<template>
    <div>
        <hr>
        <h3>过渡动画</h3>
        <button @click="show=!show">切换</button>
        <transition name="fade">
            <div class="box" v-if="show">撩课学院</div>
        </transition>

    </div>
</template>

<script>
    export default {
        name: "TransitionAndAnimation",
        data(){
            return{
                show:true
            }
        }
    }
</script>

<style scoped>
    .box{
        width: 100px;
        height: 100px;
        background-color: red;
        color: #fff;
        font-size: 20px;
        margin: 10px auto;

    }

    .fade-enter,.fade-leave-to{
        opacity: 0;
        transform: translateX(200px) scale(2);
    }
    .fade-enter-active,.fade-leave-active{
        transition: all 2s ease-in-out;
    }
</style>