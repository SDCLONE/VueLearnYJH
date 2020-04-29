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
    <hr>
    <FormExampleWithVerify/>
    <hr>

    <Table/>
    <hr>
    <TableCaseWithJavaServer/>
    <hr>
    <Tags/>
    <hr>
    <Pagination/>
    <hr>
    <PaginationCaseWithJavaServer/>
    <hr>

    <NaviMenu/>
    <hr>
    <NaviMenuCaseWithVueRouter/>
    <hr>

    <Dialog/>
  </div>
</template>

<script>
import Buttons from "./components/Buttons";
import Layout from "./components/Layout";
import Container from "./components/Container";
import IconsAndLinks from "./components/IconsAndLinks";
import FormComponents from "./components/FormComponents";
import FormExample from "./components/FormExample";
import FormExampleWithVerify from "./components/FormExampleWithVerify";
import Table from "./components/Table";
import TableCaseWithJavaServer from "./components/TableCaseWithJavaServer";
import Tags from "./components/Tags";
import Pagination from "./components/Pagination";
import PaginationCaseWithJavaServer from "./components/PaginationCaseWithJavaServer";
import NaviMenu from "./components/NaviMenu";
import NaviMenuCaseWithVueRouter from "./components/NaviMenuCaseWithVueRouter";
import Dialog from "./components/Dialog";

export default {
  name: 'app',
  components: {
    Buttons,Layout,Container,IconsAndLinks,
    FormComponents,FormExample,FormExampleWithVerify,
    Table,TableCaseWithJavaServer, Tags,Pagination,PaginationCaseWithJavaServer,
    NaviMenu,NaviMenuCaseWithVueRouter,
    Dialog
  }
}
</script>

<style>
#app {
  margin-bottom: 300px;
}
</style>
