<template>
    <div>
<!--        v-text   v-html  -->
        <hr>
        <h2>其他Vue指令的用法</h2>
        <p>{{content}} LIKE IT, IT LIKE</p>
<!--        v-text替换掉标签内全部文字-->
        <p v-text="content"></p>
        <p v-html="contentHtml"></p>

<!--        v-pre跳过Vue编译过程-->
        <p v-pre>{{content}}</p>

<!--        当数据未渲染完成不进行展示-->
        <p v-cloak>{{message}}</p>
<!--        元素仅仅渲染一遍-->
        <p v-once>{{message}}</p>
        <p>{{message}}</p>
        <input type="text" v-model="message"/>

<!--        ref-->
        <p ref="fish">我是一只鱼</p>
        <p ref="monkey">我是一只猴</p>
        <button @click="log">输出内容</button>

<!--        使用自定义指令-->
        <p v-upper-word="word1"></p>
        <p v-lower-word="word2"></p>
    </div>
</template>

<script>
    export default {
        name: "OtherInstruct",
        data(){
            return{
                content:'撩课学院',
                contentHtml:'<a href="http://www.itlike.com">撩课学院</a>',
                message:'还有半个小时上课啦',

                word1:'it like, like it',
                word2:'ITLIKE, LIKEIT'
            }
        },
        methods:{
            log(){
                console.log(this.$refs.fish);
                console.log(this.$refs.monkey.innerHTML);
            }
        },

        //自定义局部指令
        directives:{
            'lower-word'(el,binding){
                el.textContent=binding.value.toLowerCase();
            }
        }
    }
</script>

<style scoped>
    [v-cloak]{
        display: none;
    }
</style>