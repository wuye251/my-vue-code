<script setup>
  const arr = ["box1", "box2", "box3"]
</script>

<template>
  <h1 class="header">我爱vue</h1>
  <div :class="arr">我是div</div>
</template>

<style scoped>
  .header {
    background-color: orange;
  }
</style>