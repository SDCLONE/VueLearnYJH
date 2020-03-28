<template>
    <div>
        <h3>事件修饰符</h3>
        <button @click="clickBtn(1,$event)">点我</button>
        <p></p>
<!--                                        .prevent阻止后续跳转-->
        <a href="http://www.itlike.com" @click.prevent="aClick">撩课</a>

<!--        使用.stop来阻止点击子标签触发点击父标签事件-->
        <div style="width: 100px;height: 100px;background-color: red;" @click="divClick">
            <button @click.stop="btnClick">点击</button>
        </div>

        <h3>按键修饰符</h3>
<!--                            当按键为触发-->
        <input type="text" @keyup.enter="dealKey()" v-model="inputValue">
    </div>
</template>

<script>
    export default {
        name: "DealEvents",
        data(){
            return{
                inputValue:''
            }
        },
        methods:{
            //event为事件对象
            clickBtn(args,event){
                alert(args);
                console.log(args);
                console.log(event);
            },
            aClick(){
                alert(0);
            },
            btnClick(){
                alert('点击了子标签');
            },
            divClick(){
                alert('点击了父标签');
            },

            dealKey(){
                alert(`输入了："${this.inputValue}"`);
            }
        }
    }
</script>

<style scoped>

</style>