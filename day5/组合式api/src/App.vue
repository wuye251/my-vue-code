<script setup>
import {ref} from 'vue'
// 使用ref
const msg = ref("我爱vue")
console.log("ref----",msg)
console.log("ref.value----",msg.value)

</script>

<template>
<h1>{{msg}}</h1>
</template>