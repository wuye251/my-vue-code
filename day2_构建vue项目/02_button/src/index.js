// 引入vue
import {createApp} from "vue/dist/vue.esm-bundler.js"
import MyButton from "./MyButton"
// 创建根组件
const App = {
    data() {
        return {
            count:0
        }
    },
    components: {
        MyButton
    },
    template:`
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    <MyButton></MyButton>
    `
}

// 挂载组件
createApp(App).mount("#app")