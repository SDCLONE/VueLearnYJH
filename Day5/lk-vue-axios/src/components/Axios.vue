<template>
    <div>
        <button @click="getData">获取网络数据GET</button>
        <button @click="getData2">获取网络数据GET带参数</button>
        <button @click="getDataWithParam">带参数的GET2</button>
        <hr>
        <button @click="postData1">带参数的POST1</button>
        <button @click="postData2">带参数的POST2</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import qs from 'querystring';
    /*
               由于post方法 SpringMVC @RequestParam和axios中的json处理方式冲突，
               需要引入Qs进行解决
            */
    export default {
        name: "Axios",
        methods:{
            getData(){
                axios.get('http://localhost:7071/yzbTrial/getAllMembers')
                    .then((responseMsg)=>{
                        console.log(responseMsg);
                        console.log(responseMsg.data)
                        ;
                    }).catch((error)=>{
                        console.log(error);
                    })
            },
            /**
             * get方法参数使用params选项
             *
             */

            getData2(){
                let data={
                    page:2,
                    pageSize:6
                };
                axios.get('http://localhost:7071/yzbTrial/getMembersByPage',{
                    params:data
                })
                    .then((responseMsg)=>{
                        console.log(responseMsg);
                        console.log(responseMsg.data)
                        ;
                    }).catch((error)=>{
                    console.log(error);
                })
            },
            getDataWithParam(){
                let data={
                    page:2,
                    pageSize:6
                };
                axios({
                    method:'get',
                    url:'http://localhost:7071/yzbTrial/getMembersByPage',
                    params:data
                }).then((res)=>{
                    console.log(res);
                    console.log(res.data);
                }).catch(err=>{
                    console.log(err);
                })
            },
            /**
             * post方法参数使用data选项
             * 并且需要使用qs.stringify来让post参数可以被springmvc接收
             */
            postData1(){
                let data={
                    page:2,
                    pageSize:5
                };
                axios.post("http://localhost:7071/yzbTrial/getMembersByPage",qs.stringify(data))
                    .then(res=>{
                        console.log(res);
                        console.log(res.data);
                    }).catch(err=>{
                    console.log(err);
                })
            },
            postData2(){
                let data={
                    page:2,
                    pageSize:5
                };
                axios({
                    method:'post',
                    url:'http://localhost:7071/yzbTrial/getMembersByPage',
                    data:qs.stringify(data)
                }).then((res)=>{
                    console.log(res);
                    console.log(res.data);
                }).catch(err=>{
                    console.log(err);
                })
            }

        }
    }
</script>

<style scoped>

</style>