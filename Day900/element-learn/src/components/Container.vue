<template>
    <div>
        <h2>Container容器</h2>
        <el-row>
            <el-col :xl="16" :lg="16" :md="24" :sm="24">
                <h4>简单容器</h4>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>Main</el-main>
                </el-container>

                <h4>header-main-footer容器</h4>
                <el-container>
                    <el-header>Header</el-header>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>

                <h4>aside容器</h4>
                <el-container>
                    <el-aside width="20%">aside</el-aside>
                    <el-main>Main</el-main>
                </el-container>

                <h4>完整容器</h4>
                <el-container>
                    <el-header>Header</el-header>
                    <el-container>
<!--                        <el-aside width="20%">Aside</el-aside>-->
                        <el-aside width="150px">Aside</el-aside>
                        <el-main>Main</el-main>
                    </el-container>
                    <el-footer>Footer</el-footer>
                </el-container>

                <h4>嵌套容器</h4>
                <el-container>
                    <el-header>Whole Header</el-header>

                    <el-container>
                        <el-aside width="20%">Aside</el-aside>
                        <el-container>
                            <el-main>Main</el-main>
                            <el-footer>Footer</el-footer>
                        </el-container>
                    </el-container>

                    <el-container>
                        <el-aside width="20%" style="background-color: powderblue;">Aside</el-aside>
                        <el-container>
                            <el-header>Header</el-header>
                            <el-main>Main</el-main>
                            <el-footer>Footer</el-footer>
                        </el-container>
                    </el-container>
                </el-container>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>
    .el-header{
        background-color: skyblue;
        text-align: center;
        line-height: 60px;
    }
    .el-footer{
        background-color: lightsteelblue;
        text-align: center;
        line-height: 60px;
    }
    .el-main{
        background-color: lightgoldenrodyellow;
        text-align: center;
        line-height: 160px;
    }
    .el-aside{
        background-color: aliceblue;
        /* main内部有20px的padding，aside没有 */
        line-height: 200px;
        text-align: center;
    }
</style>