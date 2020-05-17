<template>
  <div>
    {{ count }}
    <button @click="decrement">-1</button>
    <button @click="increment">+1</button>
  </div>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapMutations } = createNamespacedHelpers('some/nested/module/a')
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    // ...mapState(['count']),
    ...mapState('b', {
      count: state => state.count,
    }),
  },
  methods: {
    ...mapMutations('b', ['increment', 'decrement']),
  },
}
</script>
