<template>
  <div id="app">
    <CounterVuex/>
    <hr>
    <CounterVuex_plus/>
  </div>
</template>

<script>
import CounterVuex from "./components/CounterVuex";
import CounterVuex_plus from "./components/CounterVuex_plus";

export default {
  name: 'App',
  components: {
    CounterVuex,
    CounterVuex_plus
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
