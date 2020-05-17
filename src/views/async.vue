<template>
  <div>
    <div v-for="(item, name) in currentUser" :key="item">{{ name + ':' + item }}</div>
    <hr />
    <div v-for="(item, name) in orgConfig" :key="item">{{ name + ':' + item }}</div>

    <div>
      <button @click="updateUser">更新user</button>
      <button @click="updateOrg">更新org</button>
      <button @click="updateUserAndCount">带参数更新user</button>
      <button @click="mutationsUpdateUser">mutationsUpdateUser更新user</button>
      <button @click="mutationsUpdateUserAndCount">mutationsUpdateUserAndCount</button>
    </div>
    <div>更新成功{{ myCount }}</div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      myCount: 1,
    }
  },
  computed: {
    ...mapState(['currentUser', 'orgConfig']),
  },
  methods: {
    ...mapActions(['updateUser', 'updateOrg']),
    async updateUserAndCount() {
      await this.$store.dispatch('updateUser', { num: this.myCount })
      this.myCount++
    },
    ...mapMutations(['mutationsUpdateUser']),
    async mutationsUpdateUserAndCount() {
      await this.$store.commit('mutationsUpdateUser', {})
      this.myCount++
    },
  },
}
</script>
