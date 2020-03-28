<template>
    <div>
        <h3>过滤器使用</h3>
        <h3>格式化人民币</h3>
        <p>------局部格式化--------</p>
        <p>{{money | moneyFormat(money)}}</p>
        <p>------全局格式化--------</p>
        <p>{{money | globalMoneyFormat}}</p>
        <p>---格式化日期---</p>
        <p>{{time}}</p>
        <p>{{time | timeFormat}}</p>
        <p>{{time | timeFormat('YYYY-MM-DD')}}</p>
        <p>{{time | timeFormat('HH:mm:ss')}}</p>

    </div>
</template>

<script>
    import moment from 'moment';
    export default {
        name: "LKFilter",
        data(){
            return {
                money:22345,
                time:new Date()
            }
        },
        filters:{
            moneyFormat(value){
                return '￥'+Number(value).toFixed(2);
            },
            timeFormat(value,format='YYYY-MM-DD HH:mm:ss'){
                return moment(value).format(format);
            }
        },
        //组件渲染完进入这里
        mounted() {
            //每隔一秒触发一次
            setInterval(()=>{
                this.time=new Date();
            },1000)
        }
    }
</script>

<style scoped>

</style>