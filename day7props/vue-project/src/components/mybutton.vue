<template>
    <div>
        子组件
        <slot name="bbb" :text="text"></slot>
    </div>
</template>

<style scoped>
    div{
        width: 200px;
        height: 100px;
        background-color: aquamarine;
    }
</style>

<script setup>
const text = "hahaha"
</script>
