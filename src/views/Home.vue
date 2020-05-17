<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld
      :obj="obj"
      class="qwe"
      style="zxc"
      data="asdasd"
      alt="asdasd"
      asd="asd"
      msg="Welcome to Your Vue.js App"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
  data() {
    return {
      obj: {
        a: 1,
      },
    }
  },
}
</script>
