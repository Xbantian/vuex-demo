<template>
  <div>
    <h1>vuex练手</h1>
    <h2>模拟vuex的一些使用场景</h2>
    <h2>
      <a href="https://vuex.vuejs.org/zh/guide/actions.html" target="_bank">文档</a>
    </h2>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string
  created() {
    // eslint-disable-next-line no-console
    console.log(this.$attrs)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
