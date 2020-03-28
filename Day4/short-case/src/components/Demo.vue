<template>
    <div>
        <fieldset>
            <legend>指令综合小练习</legend>
            <div>
                <span>姓名：</span>
                <input id="jqueryBox" type="text" placeholder="请输入姓名" v-model="newPerson.name">
            </div>
            <div>
                <span>年龄：</span>
                <input type="text" placeholder="请输入年龄" v-model="newPerson.age">
            </div>
            <div>
                <span>性别：</span>
                <select v-model="newPerson.sex">
                    <option value="男">男</option>
                    <option value="女">女</option>
                </select>
            </div>
            <div>
                <span>手机：</span>
                <input type="text" placeholder="请输入手机号码" v-model="newPerson.phone">
            </div>
            <div>
                <button id="testBtn" @click="testJquery">JQuery测试点击</button>
                <button @click="createNewPerson">创建新用户</button>
            </div>
        </fieldset>
            <table>
                <thead>
                <tr>
                    <td>姓名</td>
                    <td>性别</td>
                    <td>年龄</td>
                    <td>手机</td>
                    <td>删除</td>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(p,index) in persons" :key="index">
                        <td>{{p.name}}</td>
                        <td>{{p.sex}}</td>
                        <td>{{p.age}}</td>
                        <td>{{p.phone}}</td>
                        <td><button @click="delPerson(index)">删除</button></td>
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: "Demo",
        data(){
            return{
                persons:[
                    {name:'张三',age:20,sex:'男',phone:'12345678910'},
                    {name:'李四',age:20,sex:'女',phone:'12345678910'},
                    {name:'王五',age:20,sex:'男',phone:'12345678910'},
                    {name:'赵六',age:20,sex:'男',phone:'12345678910'},
                    {name:'芋头',age:20,sex:'女',phone:'12345678910'}
                ],
                newPerson:{name:'',age:0,sex:'',phone:''}
            }
        },
        methods:{
            testJquery(){
                console.log($("#jqueryBox").val());
            },
            createNewPerson(){
                if (this.newPerson.name===''){
                    alert("姓名不可以为空");
                    return;
                }
                if (this.newPerson.age===0){
                    alert("年龄无效");
                    return;
                }
                if (this.newPerson.sex===''){
                    alert("请选择性别");
                    return;
                }
                if (this.newPerson.phone===''){
                    alert("电话不可以为空");
                    return;
                }
                //this.persons.push(this.newPerson);//加到末尾
                this.persons.unshift(this.newPerson);//加到开头
            },
            delPerson(index){
                this.persons.splice(index,1);   //从第index个开始删除n个
            }
        }
    }
</script>

<style scoped>

</style>