<template>
    <div>
        <input type="text" :value="inputValue" />
    </div>
</template>

<script setup lang="ts">
defineProps<{ inputValue: string }>();
</script>

<style scoped>
input {
    margin: 1rem;
}
</style>