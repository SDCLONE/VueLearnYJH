<template>
    <div>
        <h3>搜索列表</h3>
        <input type="text" placeholder="请输入搜索的姓名" v-model="searchName">
<!--        <input type="text" placeholder="请输入搜索的姓名" :value="searchName">-->
        <ul>
            <li v-for="(p,index) in filterPersons" :key="personKeys[index]">
                {{index+1}}) 姓名:{{p.name}}----性别:{{p.sex}}---年龄:{{p.age}}
            </li>
        </ul>
        <hr>
        <p>-------</p>
        <h3>列表排序</h3>
        <button @click="orderByAge(2)">年龄升序</button>
        <button @click="orderByAge(1)">年龄降序</button>
        <button @click="orderByAge(0)">默认</button>
    </div>
</template>

<script>
    import shortId from 'shortid';
    export default {
        name: "ListRenderTwo",
        data(){
            return{
                searchName:'',
                persons: [
                    {name:'张三',age:18,sex:'男'},
                    {name:'李四',age:28,sex:'女'},
                    {name:'王五',age:38,sex:'男'},
                    {name:'赵六',age:48,sex:'女'},
                    {name:'张三三',age:17,sex:'男'},
                    {name:'李四四',age:27,sex:'女'},
                    {name:'王五五',age:37,sex:'男'},
                    {name:'赵六六',age:47,sex:'女'},
                    {name:'张三b',age:25,sex:'男'},
                    {name:'李四c',age:35,sex:'女'},
                    {name:'王五d',age:45,sex:'男'},
                    {name:'赵六e',age:55,sex:'女'},
                ],
                personKeys:[],
                orderType:0
            }
        },
        //当生命周期结束时
        mounted() {


            //                                回调函数
            this.personKeys=this.persons.map(()=>shortId.generate())
        },
        computed:{
            filterPersons(){
                //1.获取数据
                let {searchName,persons,orderType}=this;
                //2.取出数组中的数据
                let arr=[...persons];
                console.log(arr);
                //3.过滤数组
                    //去掉开头结尾处的空格
                if (searchName.trim()){
                                /*
                                .filter用法
                                arr.filter(<取出物格式> => <过滤条件>)
                                arr.filter(item => item.age>40)
                                arr.filter((item,index,array) => item.age>40)

                                 */
                    arr=persons.filter((p)=>p.name.indexOf(searchName)!==-1);
                }
                //4.排序
                if (orderType>0){
                    arr.sort((p1,p2)=>{
                        //降序
                        if (orderType===1){
                            return p2.age-p1.age;
                        }
                        //升序
                        else{
                            return p1.age-p2.age;
                        }
                    })
                }
                return arr;
            }
        },
        methods:{
            orderByAge(orderType){
                this.orderType=orderType;

            }
        }
    }
</script>

<style scoped>
    ul{
        list-style: none;
    }
    ul li{
        margin: 10px 0;
    }
</style>