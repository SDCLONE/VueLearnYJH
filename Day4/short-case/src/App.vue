<template>
  <div id="app">
    <Demo/>
    <hr>
    <DealEvents/>
    <hr>
    <LKFilter/>
    <hr>
    <TransitionAndAnimation/>
    <hr>
    <TransitionAndAnimate2/>
    <hr>
    <TransitionAndAnimate3/>
    <hr>
    <LifeCycle/>
  </div>
</template>

<script>
import Demo from "./components/Demo";
import DealEvents from "./components/DealEvents";
import LKFilter from "./components/LKFilter";
import TransitionAndAnimation from "./components/TransitionAndAnimation";
import TransitionAndAnimate2 from "./components/TransitionAndAnimate2";
import TransitionAndAnimate3 from "./components/TransitionAndAnimate3";
import LifeCycle from "./components/LifeCycle";

export default {
  name: 'App',
  components: {
    Demo,
    DealEvents,
    LKFilter,
    TransitionAndAnimation,
    TransitionAndAnimate2,
    TransitionAndAnimate3,
    LifeCycle
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
