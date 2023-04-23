<script setup>
  import mybox from './components/mybox.vue';
  import {ref} from "vue"
  const count = ref(0)
</script>

<template>
  <h1>哈哈哈</h1>
  <mybox :count="count"></mybox>
  <mybox :count="count"></mybox>
  <button @click="count++">父组件+1</button>
</template>