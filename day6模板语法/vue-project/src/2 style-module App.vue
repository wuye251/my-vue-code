<script setup>
  import MyBox from "./components/MyBox.vue"
  import {ref } from "vue"
  const imgPath = ref("/favicon.ico")
  function changeImg() {
     imgPath.value = "/test.png"
  }
  const msg = ref("hahaha")
</script>

<template>
  <!-- '/'默认访问当前项目public/路径 -->
  <div :class="$style.box1">App中的box1</div>
  <MyBox></MyBox>
</template>

<style module>
  .box1{
    background-color:blue;
  }
</style>