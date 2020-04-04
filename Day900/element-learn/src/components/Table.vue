<template>
    <div>
        <h2>Table数据表格</h2>
        <h4>普通表格</h4>
        <el-table :data="tableData">
            <el-table-column prop="date" label="日期" ></el-table-column>
            <el-table-column prop="name" label="姓名" ></el-table-column>
            <el-table-column prop="address" label="地址" ></el-table-column>
        </el-table>

        <h4>带操作的表格</h4>
        <el-table :data="tableData">
            <el-table-column label="日期">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" >
                <template slot-scope="scope">
                    {{scope.row.name}}
                </template>
            </el-table-column>
            <el-table-column label="地址" >
                <template slot-scope="scope">
                    {{scope.row.address}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <h4>带多选的表格</h4>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" @selection-change="handleSelectionChange">
            <el-table-column type="selection"></el-table-column>
<!--            <el-table-column label="日期">-->
<!--                <template slot-scope="scope">{{ scope.row.date }}</template>-->
<!--            </el-table-column>-->
            <el-table-column label="日期" prop="date"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data(){
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                multipleSelection:[]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
                console.log('编辑：'+row.date+"; "+row.name+"; "+row.address);
            },
            handleDelete(index, row) {
                console.log(index, row);
                console.log('删除：'+row.date+"; "+row.name+"; "+row.address);
                this.tableData.splice(index,1);
            },

            //多选操作
            toggleSelection(rows) {
                if (rows) {
                    console.log(rows);  //Array(2)
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
                console.log(this.multipleSelection)
            }
        }
    }
</script>

<style scoped>

</style>