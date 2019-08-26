<template>
  <div class="container">
    <div>这是首页？怎么搞？搞不赢</div>
    <h3>{{ $store.state.test }}</h3>
    <el-button @click="changeName('xxx')">修改!!!</el-button>
  </div>
</template>

<script>
import axios from 'axios'
// import { mapMutations } from 'vuex'
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      title: '首页'
    }
  },
  computed: {
    ...mapState('app', {
      name: (state) => state.name
    })
  },
  async asyncData() {
    const { data } = await axios.get('https://api.myjson.com/bins/8gdmr')
    return { asyncdata: data }
  },
  head() {
    return {
      title: this.title
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    ...mapMutations({
      changeName: 'app/changeName'
    })
  }
}
</script>

<style></style>
