<template>
    <div>
        <h2>小芋头Table小案例</h2>
        <el-table :data="tableData" style="width: 900px" >
            <!--                使用prop获取和使用slot-scope获取类似
                                prop直接将值打印在表格上
                                slot-scope可以将值取出再进行模板渲染（比如放到标签里面）
                                -->
            <el-table-column label="ID号" prop="id"></el-table-column>
            <el-table-column label="姓名" prop="name"></el-table-column>
            <el-table-column label="年龄">
                <template slot-scope="scope">
                    <i class="el-icon-apple"></i>
                    <span style="margin-left: 5px">{{scope.row.age}}</span>
                </template>
            </el-table-column>
            <el-table-column label="性别">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.gender==='男'?'primary':'success' "
                            size="medium">{{scope.row.gender}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="checkRowInfo(scope.$index,scope.row)">
                        查看
                    </el-button>
                    <el-button size="mini" type="danger" @click="deleteRow(scope.$index,scope.row)">
                        删除
                    </el-button>

                </template>
            </el-table-column>
        </el-table>



    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "TableCaseWithJavaServer",
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
            checkRowInfo(index,row){
                this.$alert(`id: ${row.id}, name: ${row.name}, age: ${row.age}, gender: ${row.gender}`, '消息提示'
                            ,{confirmButtonText:'确定'}
                    );
                // console.log(index,row);
            },
            deleteRow(index,row){
                this.$confirm('此操作将永久删除该行, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.tableData.splice(index,1);
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        mounted() {
            axios.post('http://localhost:7071/yzbTrial/getAllMembers')
                .then((res)=>{
                    this.tableData=res.data;
                    console.log(this.tableData);
                }).catch((error)=>{
                    console.log(error);
                })
        }
    }
</script>

<style scoped>

</style>