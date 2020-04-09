<template>
    <div>
        <h2>分页控制</h2>
<!--
        layout代表进度条布局
        total代表总条目数
        默认是每页10条
        默认展示7个页码选项
-->
        <h4>基本样式</h4>
        <el-pagination
            layout="prev,pager,next"
            :total="500"
        >
        </el-pagination>

<!--
        :page-size设置每页条目数
        :pager-count设置总共展示页码选项

-->
        <el-pagination
                :page-size="20"
                :pager-count="11"
                layout="prev, pager, next"
                :total="1000">
        </el-pagination>

<!--
        完整页码栏
-->
        <h4>完整页码</h4>
<!--
        @size-change  pageSize改变发生  回调参数是每页条数
        @current-change  currentPage改变发生 回调当前页
        @prev-click  点击上一页发生   回调当前页           同时也会调用currentchange
        @next-click 点击下一页发生 回调后一页           同时也会调用currentchange
-->
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
        </el-pagination>
        <p></p>


    </div>
</template>

<script>
    export default {
        name: "Pagination",
        data(){
            return {
                currentPage4:3
            }
        },
        methods:{
            handleSizeChange(pageSize){
                console.log(pageSize);
            },
            handleCurrentChange(page){
                console.log(page);
            }
        }
    }
</script>

<style scoped>

</style>