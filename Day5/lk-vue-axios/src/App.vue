<template>
  <div id="app">
    <Axios/>
  </div>
</template>

<script>
import Axios from "./components/Axios";
export default {
  name: 'App',
  components: {
    Axios
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
