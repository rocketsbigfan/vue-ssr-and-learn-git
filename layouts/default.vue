<template>
  <el-container class="container">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="180px">
        <el-menu background-color="#d3dce6" :default-active="key">
          <el-menu-item
            v-for="item in routers"
            :key="item.url"
            :index="item.url"
            @click="goto(item.url)"
          >
            <i class="el-icon-location"></i>
            <span>{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      title: '首页',
      key: this.$route.name,
      routers: [
        {
          url: 'index',
          title: '首页',
          icon: 'el-icon-menu'
        },
        {
          url: 'detail',
          title: '详情页',
          icon: 'el-icon-menu'
        },
        {
          url: 'test',
          title: '测试页',
          icon: 'el-icon-menu'
        }
      ]
    }
  },
  watch: {
    $route() {
      const { name } = this.$route
      this.key = name
    }
  },
  head() {
    return {
      title: this.title
    }
  },
  methods: {
    goto(url) {
      this.$router.push({ name: url })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}
.el-container.container {
  margin: 0 auto;
  height: 100vh;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
