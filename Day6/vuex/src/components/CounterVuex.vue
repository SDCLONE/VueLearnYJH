<template>
    <div>
        <p>{{count}}, 这是一个 {{getEvenOrOdd}}</p>
        <button @click="increment">增加1</button>
        <button @click="decreasement">减少1</button>
        <button @click="incrementIfEven">偶数加1</button>
        <button @click="asyncIncrement">异步加1</button>
    </div>
</template>

<script>
    //拿到store中的值
    //import {mapMutations} from 'vuex';
    export default {
        name: "CounterVuex",
        methods:{
            //...mapMutations(['INCREMENT','DECREASEMENT']),
            increment(){
                //this.INCREMENT();
                //建议写法
                this.$store.commit('INCREMENT');
            },
            decreasement(){
                //this.DECREASEMENT();

                //建议(同步操作)
                //this.$store.commit('DECREASEMENT');

                //或者(处理异步操作)
                this.$store.dispatch('decreasement');

            },
            incrementIfEven(){
                this.$store.dispatch('incrementIfEven');
            },
            //异步操作必须经过action，同步操作可以不经过action，直接经过mutation
            asyncIncrement(){
                this.$store.dispatch('incrementAsync');
            }
        },
        computed:{
            count(){
                //取出state内部的count
                return this.$store.state.count;
            },
            getEvenOrOdd(){
                return this.$store.getters.evenOrOdd;
            }
        }
    }
</script>

<style scoped>

</style>