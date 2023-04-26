<script setup>
  import mybutton from './components/mybutton.vue'
  import A from "./components/A.vue"
</script>

<template>
  <h1>App组件</h1>
  <mybutton>
    <!-- 通过slotProps接收到插槽传出的值 -->
    <template #bbb="slotProps">
      <!-- 将text内容传给A子组件 -->
      <A :text="slotProps.text"></A>
    </template>
  </mybutton>
</template>