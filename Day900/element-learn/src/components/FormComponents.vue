<template>
    <div>
        <h2>表单元素</h2>

        <h4>Radio</h4>
        <el-radio v-model="radio" label="1">选项1</el-radio>
        <el-radio v-model="radio" label="2">选项2</el-radio>
        <p>单选组</p>
        <el-radio-group v-model="radio_group" @change="logValue">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>


    </div>
</template>

<script>
    export default {
        name: "FormComponents",
        data(){
            return{
                radio:'2',
                radio_group:3
            }
        },
        methods:{
            logValue(){
                console.log(this.radio_group);
            }
        }
    }
</script>

<style scoped>

</style>