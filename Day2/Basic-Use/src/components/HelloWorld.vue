<template>
  <div class="hello">
    <h1>{{message}}</h1>
    <label>
      <input type="text" v-model="message">
    </label>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //data勾子内部放置所有数据
  data(){
    return{
      message:"我们一起学习Vue!!!!"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
