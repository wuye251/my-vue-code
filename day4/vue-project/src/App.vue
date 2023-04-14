<script>
export default {
  data() {
    return {
      msg:{
        name:"孙悟空",
        age:18,
        gender:"男"
      }
    }
  },
  methods: {
    updateAge() {
      this.msg.age = 17
    }
  },
  /* 用来指定计算属性
  */
  computed:{
    // info变量计算方法 只监听msg.age变量  其他变化不会调用
    info(){
       return this.msg.age >= 18 ? "成人了" : "未成年"
    }
  }
}
</script>


<template>
  <span>{{msg.name}} - {{msg.age}} - {{msg.gender}}</span>
  <h2> {{msg.age >= 18 ? "成年人" : "未成年人"}}</h2>
  <button @click="updateAge">点我</button>
  <h2>{{info}}</h2>
</template>