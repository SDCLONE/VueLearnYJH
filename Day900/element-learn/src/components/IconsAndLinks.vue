<template>
    <div>
        <h2>Icons图标</h2>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <p>-----------------</p>
        <el-button type="text" icon="el-icon-setting"></el-button>

        <h2>Links链接</h2>
        <div>
<!--                                                target在新标签页中弹出链接-->
            <el-link href="https://www.baidu.com" target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
        </div>

        <h4>禁用状态</h4>
        <div>
            <el-link disabled>默认链接</el-link>
            <el-link type="primary" disabled>主要链接</el-link>
            <el-link type="success" disabled>成功链接</el-link>
            <el-link type="warning" disabled>警告链接</el-link>
            <el-link type="danger" disabled>危险链接</el-link>
            <el-link type="info" disabled>信息链接</el-link>
        </div>

        <h4>设置下划线</h4>
        <div>
            <el-link :underline="false">无下划线</el-link>
            <el-link>有下划线</el-link>
        </div>

        <h4>图标link</h4>
        <div>
            <el-link icon="el-icon-edit"></el-link>
            <el-link>查看<i class="el-icon-view el-icon--right"></i></el-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IconsAndLinks"
    }
</script>

<style scoped>
.el-link{
    margin-right: 10px;
}
</style>