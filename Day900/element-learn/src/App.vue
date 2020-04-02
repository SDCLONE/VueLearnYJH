<template>
  <div id="app">
    <Buttons/>
    <hr>
    <Layout/>
    <hr>
    <Container/>
    <hr>
    <IconsAndLinks/>
    <hr>

    <FormComponents/>
    <hr>
    <FormExample/>
  </div>
</template>

<script>
import Buttons from "./components/Buttons";
import Layout from "./components/Layout";
import Container from "./components/Container";
import IconsAndLinks from "./components/IconsAndLinks";
import FormComponents from "./components/FormComponents";
import FormExample from "./components/FormExample";

export default {
  name: 'app',
  components: {
    Buttons,Layout,Container,IconsAndLinks,
    FormComponents,FormExample
  }
}
</script>

<style>
#app {
  margin-bottom: 300px;
}
</style>
