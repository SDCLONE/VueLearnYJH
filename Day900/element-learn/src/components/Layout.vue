<template>
    <div>
        <h2>Layout布局</h2>
        <h4>基础24分栏</h4>
        <el-row>
            <el-col :span="24"><div class="grid-content1"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="12"><div class="grid-content2"></div></el-col>
            <el-col :span="12"><div class="grid-content1"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="8"><div class="grid-content2"></div></el-col>
            <el-col :span="8"><div class="grid-content1"></div></el-col>
            <el-col :span="8"><div class="grid-content2"></div></el-col>
        </el-row>
        <el-row>
            <el-col :span="6"><div class="grid-content1"></div></el-col>
            <el-col :span="12"><div class="grid-content2"></div></el-col>
            <el-col :span="6"><div class="grid-content1"></div></el-col>
        </el-row>

        <h4>分栏有间隔</h4>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content1"></div></el-col>
            <el-col :span="6"><div class="grid-content1"></div></el-col>
            <el-col :span="6"><div class="grid-content1"></div></el-col>
            <el-col :span="6"><div class="grid-content1"></div></el-col>
        </el-row>

        <h4>分栏偏移</h4>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content1"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content1"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6" :offset="6"><div class="grid-content1"></div></el-col>
            <el-col :span="6" :offset="6"><div class="grid-content1"></div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6"><div class="grid-content1"></div></el-col>
        </el-row>

        <h4>响应式布局</h4>
        <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content1"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content2"></div></el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content1"></div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content2"></div></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 10px;
    }
    .grid-content1{
        background-color: skyblue;
        min-height: 30px;
    }
    .grid-content2{
        background-color: lightyellow;
        min-height: 30px;
    }

</style>