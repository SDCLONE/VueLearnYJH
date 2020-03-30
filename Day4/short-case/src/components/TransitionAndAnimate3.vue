<template>
    <div>
        <hr>
        <h3>过渡动画3,使用animate第三方库</h3>
        <button @click="flag=!flag">切换</button>
        <p></p>
        <transition
            enter-active-class="animated jackInTheBox"
            leave-active-class="animated rollOut"
            duration="{ enter: 500, leave: 800 }"
        >
            <img v-if="flag" :src="pic" alt="">
        </transition>
    </div>
</template>

<script>
    import pic from '@/assets/logo.png';
    import animate from 'animate.css';  //在package.json中rule中加入未使用变量报错，off

    //https://github.com/daneden/animate.css   animate.css地址
    export default {
        name: "TransitionAndAnimate2",
        data(){
            return{
                pic:pic,
                flag:true
            }
        }
    }
</script>

<style scoped>
    .bounce-enter-active{

    }

    .bounce-leave-active{

    }


</style>