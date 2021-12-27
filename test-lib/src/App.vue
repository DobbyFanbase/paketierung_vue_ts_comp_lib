<script setup lang="ts">
import { MyButton, MyInput, MyHeader } from 'comp-lib-tgz'
import 'comp-lib-tgz/dist/style.css'
</script>

<template>
  <MyButton tooltip="tooltip tgz">TGZ</MyButton>
  <MyInput input-value="42"></MyInput>
  <MyHeader>
    <template #title>Titel</template>
    <template #author>Max</template>
  </MyHeader>
</template>

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
