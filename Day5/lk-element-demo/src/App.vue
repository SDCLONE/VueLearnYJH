<template>
  <div id="app">

    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>

    <TestDate/>
    <hr>
    <TestContainer/>
  </div>
</template>

<script>
import TestDate from "./components/TestDate";
import TestContainer from "./components/TestContainer";
export default {
  name: 'app',
  components: {
    TestContainer,
    TestDate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
