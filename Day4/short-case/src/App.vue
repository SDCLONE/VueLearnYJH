<template>
  <div id="app">
    <Demo/>
    <hr>
    <DealEvents/>
    <hr>
    <LKFilter/>
    <hr>
    <TransitionAndAnimation/>
  </div>
</template>

<script>
import Demo from "./components/Demo";
import DealEvents from "./components/DealEvents";
import LKFilter from "./components/LKFilter";
import TransitionAndAnimation from "./components/TransitionAndAnimation";

export default {
  name: 'App',
  components: {
    Demo,DealEvents,LKFilter,TransitionAndAnimation
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
