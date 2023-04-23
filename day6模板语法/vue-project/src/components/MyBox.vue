<script setup>

const props = defineProps(["a","b","c"])
console.log(props.a)
console.log(props.b)
console.log(props.c)
</script>

<template>
    <h1>{{ props.a }}</h1>
</template>

<style scoped>
    .box1{
        background-color: aqua;
    }
</style>