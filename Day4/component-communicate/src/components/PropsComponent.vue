<template>
    <div>
        <h4>姓名：{{name}} </h4>
        <h4>年龄：{{age}} </h4>
        <ul v-for="(v,k) in person">
            <li>{{k}}: {{v}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PropsComponent",
        //props来接收父组件的值
        // props:['name','age']
        props:{
            //自定义参数类型
            name:String,
            age:Number,
            person:Object
        }
    }
</script>

<style scoped>

</style>