<template>
    <div>
        <p>{{count}}, 这是一个 {{evenOrOdd}}</p>
        <button @click="increment">增加1</button>
        <button @click="decreasement">减少1</button>
        <button @click="incrementIfEven">偶数加1</button>
        <button @click="asyncIncrement">异步加1</button>
    </div>
</template>

<script>
    /**
     * 使用这几个内置属性直接对应store中的方法和变量
     * 简化代码
     */
    import {mapState,mapGetters,mapActions} from 'vuex';

    //拿到store中的值
    export default {
        name: "CounterVuex_plus",
        methods:{
            increment(){
                //建议写法
                this.$store.commit('INCREMENT');
            },
            decreasement(){
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
            //直接注入属性
            ...mapState(['count']),
            ...mapGetters(['evenOrOdd'])
        }
    }
</script>

<style scoped>

</style>