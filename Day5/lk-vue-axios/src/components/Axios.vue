<template>
    <div>
        <button @click="reqData">获取网络数据GET</button>
        <button ></button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Axios",
        methods:{
            reqData(){
                axios.get('http://localhost:7071/yzbTrial/getAllMembers')
                    .then((responseMsg)=>{
                        console.log(responseMsg);
                        console.log(responseMsg.data)
                        ;
                    }).catch((error)=>{
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>

</style>