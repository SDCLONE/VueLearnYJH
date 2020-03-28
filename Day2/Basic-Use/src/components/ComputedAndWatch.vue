<template>
<!--    template里面只可以有一个大元素div-->
    <div>
        <h2>这是ComputedAndWatch</h2>
        <label>姓: <input type="text" placeholder="请输入姓氏" v-model="firstName"></label><br>
        <label>名: <input type="text" placeholder="请输入名" v-model="lastName"></label>
        <p>-------------</p>
<!--        单向属性-->
        <label>姓 名: <input type="text" placeholder="请输入姓名" v-model="fullName"></label><br>
<!--    双向-->
        <label>姓 名: <input type="text" placeholder="请输入姓名" v-model="fullNameTwo"></label><br>
        <!--    watch属性fullNameThree-->
        <label>姓 名 watch: <input type="text" placeholder="请输入姓名" v-model="fullNameThree"></label><br>
        <a href="#">{{fullNameThree}}</a>
    </div>
</template>

<script>
    export default {
        name: "ComputedAndWatch",
        data(){
            return{
                firstName:'',
                lastName:'',

                //
                fullNameThree:''
            }
        },
        //计算属性可以在变量改变进行计算，并且可以缓存，双向可用
        computed:{
            //计算属性
            fullName:{
                get(){
                    return this.firstName+'·'+this.lastName
                }
            },
            fullNameTwo:{
                get(){
                    console.log(`调用了fullNameTwo的getter方法`);
                    return this.firstName+'·'+this.lastName;
                },
                set(value){
                    console.log(`调用了fullNameTwo的setter方法,${value}`);
                    //更新firstName LastName
                    let name=value.split("·");
                    console.log(name);

                    if (name.length===2){
                        this.firstName=name[0];
                        this.lastName=name[1];
                    }
                    else {
                        this.firstName="";
                        this.lastName="";
                    }
                }
            }
        },
        //监听属性变化影响另外一个属性,只可以单向
        watch:{
            //监听firstName
            firstName(value){
                console.log(`watch监听到firstName发生改变：${value}`);
                this.fullNameThree=value+'.'+this.lastName;
            },
            //监听lastName
            lastName(value){
                console.log(`watch监听到lastName发生改变：${value}`);
                this.fullNameThree=this.firstName+'.'+value;
            },
        }
    }
</script>

<style scoped>

</style>