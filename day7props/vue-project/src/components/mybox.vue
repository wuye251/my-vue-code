<script setup>
    const props = defineProps(["count"])
</script>

<template>
    <h2>我是子组件MyBox</h2>
    <p>{{ props.count }}</p>
    <button @click="count++">子组件+1</button>
</template>