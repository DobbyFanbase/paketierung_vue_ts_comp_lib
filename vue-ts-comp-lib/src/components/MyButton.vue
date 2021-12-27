<template>
    <button :title="tooltip">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
defineProps<{ tooltip: string }>();
</script>

<style scoped>
button {
    background-color: #4c9eea;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    height: 40px;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 10px 16px;
    text-align: center;
}
button:hover,
button:focus {
    background-color: #82b2f0;
}
</style>