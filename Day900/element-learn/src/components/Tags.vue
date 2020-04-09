<template>
    <div>
        <h2>Tags 标签</h2>

        <h4>普通标签</h4>
        <el-tag>标签一</el-tag>
        <el-tag type="success">标签二</el-tag>
        <el-tag type="info">标签三</el-tag>
        <el-tag type="warning">标签四</el-tag>
        <el-tag type="danger">标签五</el-tag>

        <h4>可以移除的标签</h4>
<!--        需要和data中的数据绑定-->
        <el-tag v-for="tag in allTags" :key="tag"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
            {{tag}}
        </el-tag>

        <h4>不同尺寸的标签</h4>
        <el-tag >默认标签</el-tag>
        <el-tag size="medium">中等标签</el-tag>
        <el-tag size="small">小型标签</el-tag>
        <el-tag size="mini">超小标签</el-tag>
    </div>
</template>

<script>
    export default {
        name: "Tags",
        data(){
            return {
                allTags:['tag1','tag2','tag3','tag4']
            }
        },
        methods:{
            handleClose(tag){
                console.log(tag);   //返回标签内容 例如tag3
                this.allTags.splice(this.allTags.indexOf(tag),1);
            }
        }
    }
</script>

<style scoped>

</style>