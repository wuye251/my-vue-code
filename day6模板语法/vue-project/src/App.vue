<script setup>
import MyBox from "./components/MyBox.vue"
  const arr = ["box1", "box2", "box3"]
</script>

<template>
  <h1 class="header">我爱vue</h1>
  <div :class="arr">我是div</div>
  <MyBox a="哈哈哈" b="嘻嘻嘻" c="嘿嘿嘿"></MyBox>
</template>

<style scoped>
  .header {
    background-color: orange;
  }
</style>