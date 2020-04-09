<template>
    <div>
        <h2>分页小实例</h2>
        <el-table :data="tableData" style="width: 900px">
            <el-table-column label="ID" prop="id"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="年龄" prop="age"/>
            <el-table-column label="性别">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.gender==='男'?'primary':'success'"
                            size="medium">{{scope.row.gender}}</el-tag>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[3,5,7]"
                :page-size="currentPageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalNumber">
        </el-pagination>

    </div>
</template>

<script>
    import axios from 'axios';
    import Qs from 'querystring'

    export default {
        name: "PaginationCaseWithJavaServer",
        data(){
            return{
                totalNumber: 0,
                tableData:[],
                currentPage:1,
                currentPageSize:5
            }
        },
        methods:{
            handleSizeChange(pageSize){
                console.log("现在的pageSize: "+pageSize);
                this.currentPageSize=pageSize;
                this.postForData();

            },
            handleCurrentChange(page){
                console.log("现在的页码: "+page);
                this.currentPage=page;
                this.postForData();
            },
            //用来向后端发送数据
            postForData(){
                let data={
                    page:this.currentPage,
                    pageSize:this.currentPageSize
                };
                /*
                由于SpringMVC @RequestParam和axios中的json处理方式冲突，
                需要引入Qs进行解决
             */
                axios({
                    url:"http://localhost:7071/yzbTrial/getMembersByPage",
                    method: 'post',
                    data:Qs.stringify(data)
                }).then(res=>{
                    this.tableData=res.data.members;
                    this.totalNumber=res.data.count;
                })
            }
        },
        mounted() {
            //当组件生命周期结束进行数据获取
            this.postForData();
        }

    }
</script>

<style scoped>

</style>