<template>
  <div>
    {{ count }}
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
    <div>如果报错去main里切换store为模块化store</div>
  </div>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapMutations } = createNamespacedHelpers('some/nested/module/a')
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    // ...mapState(['count']),
    ...mapState('a', {
      count: state => state.count,
    }),
  },
  methods: {
    ...mapMutations('a', ['increment', 'decrement']),
  },
}
</script>
