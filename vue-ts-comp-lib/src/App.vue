<script setup lang="ts">
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <div>
    <MyHeader>
      <template #title>Mein erster Header</template>
      <template #author>Max Mustermann</template>
    </MyHeader>
    <MyInput input-value="Bitte einen Text eingeben"></MyInput>
    <MyButton tooltip="zum absenden auf den Button klicken">absenden</MyButton>
  </div>
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