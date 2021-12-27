<script setup lang="ts">
import MyButton from './MyButton.vue'
</script>

<template>
    <div>
        <h1 class="header-title">
            <slot name="title" />
        </h1>
        <h2 class="title-author">
            <slot name="author" />
        </h2>
        <MyButton tooltip="zum registrieren klicken">Registrieren</MyButton>
    </div>
</template>
