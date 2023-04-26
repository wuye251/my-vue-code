<script setup>
    const props = defineProps(["text"])
</script>
<template>
    <h2>A组件接收的name值:{{props.text}}</h2>
</template>