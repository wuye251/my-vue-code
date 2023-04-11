<template>
    <button @click="count++">点我</button>{{count}}
</template>

<script>
    export default {
        data() {
            return {
                count:0
            }
        }
    }
</script>