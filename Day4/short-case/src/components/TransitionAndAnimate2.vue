<template>
    <div>
        <hr>
        <h3>过渡动画2</h3>
        <button @click="flag=!flag">切换</button>
        <p></p>
        <transition name="bounce">
            <img v-if="flag" :src="pic" alt="">
        </transition>
    </div>
</template>

<script>
    import pic from '@/assets/logo.png';
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
        animation: bounce 1s;
    }

    .bounce-leave-active{
        animation: bounce 1s reverse;
    }

    @keyframes bounce {
        0%{
            transform: scale(0);
        }
        25%{
            transform: scale(0.5);
        }
        50%{
            transform:scale(1.5);
        }
        75%{
            transform:scale(1.2);
        }
        100%{
            transform: scale(1);
        }
    }
</style>