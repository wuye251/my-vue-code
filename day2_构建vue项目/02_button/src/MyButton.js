export default {
    data() {
        return {
            count:0
        }
    },
    template:`
    <button @click="count++">点我</button>{{count}}
    `
}