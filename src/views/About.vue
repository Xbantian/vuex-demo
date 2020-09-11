<template>
  <div>
    <h2>本组件的值:{{ myCount }}</h2>
    <h1>store的值:{{ count }}</h1>
    <h2>是偶数? {{ isEven }}</h2>
    <button @click="mydecrement">-1</button>
    <button @click="increment">+1</button>
    <div>
      <button @click="addDouble">+2</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
window.onerror = e => {
  console.log(e)
}

console.log(window.onerror)
setTimeout(() => {
  throw new Error('this is the error happened in b.js')
}, 2000)
export default {
  data() {
    return {
      myCount: 0,
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['isEven']),
    isEven1() {
      //NOTE:这么写也行,跟上面一样
      return this.$store.getters.isEven
    },
  },
  methods: {
    addDouble() {
      this.myCount += 2
      //NOTE:你本来得这么写修改值,但是你可以调用辅助函数mapMutations,快速映射
      this.$store.commit('increment', { count: 2 })
    },
    ...mapMutations(['increment']),
    //NOTE:可以换函数名
    ...mapMutations({ mydecrement: 'decrement' }),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
