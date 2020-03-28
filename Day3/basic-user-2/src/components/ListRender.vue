<template>
    <div>
        <hr>
        <h3>遍历数组</h3>
        <ul>
<!--            for遍历对象数组必须要加上key，这个key可以用shortid插件完成-->
            <li v-for="(person,index) in persons" :key="personKeys[index]">
                ID: {{personKeys[index]}}  姓名:{{person.name}}, 年龄:{{person.age}}, 性别:{{person.sex}}
<!--                {{person.name}}-->
            </li>
        </ul>
        <hr>

        <h3>遍历对象</h3>
        <ul>
            <li v-for="(item,key,index) in persons[0]" :key="index">
                {{key}}---{{item}}
            </li>
        </ul>
    </div>
</template>

<script>
    import shortId from 'shortid';
    export default {
        name: "ListRender",
        data(){
            return{
                persons:[
                    {name:'张三',age:18,sex:'男'},
                    {name:'李四',age:28,sex:'女'},
                    {name:'王五',age:38,sex:'男'},
                    {name:'赵六',age:48,sex:'女'},
                ],
                personKeys:[]
            }
        },
        //当生命周期结束时
        mounted() {
            //                                回调函数
            this.personKeys=this.persons.map(()=>shortId.generate())
        }
    }

</script>

<style scoped>
ul{
    list-style: none;
}
</style>