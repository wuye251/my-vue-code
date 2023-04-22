<script setup>
  import {ref } from "vue"
  const imgPath = ref("/favicon.ico")
  function changeImg() {
     imgPath.value = "/test.png"
  }
  const msg = ref("hahaha")
</script>

<template>
  <!-- '/'默认访问当前项目public/路径 -->
  <h1>{{ msg }}</h1>
  <img :src="imgPath" alt="梅西">
  <button @click="changeImg">切换图片</button>
</template>
<!-- 
<style scoped>
  h1{
    background-color: aqua;
  }
</style> -->