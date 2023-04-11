<template>
    <h1>{{ msg }}</h1>
    <MyButton></MyButton>
</template>

<script>
    import MyButton from './components/MyButton.vue'
    export default {
        data() {
            return {
                msg:"我超级爱VUE"
            }
        },
        components:{
            MyButton
        }
    }
</script>