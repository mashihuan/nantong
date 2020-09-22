<template>
  <el-container>
    <el-header class="header" height="46px">
      <my-header />
    </el-header>
    <el-main class="main">
      <nuxt />
    </el-main>
  </el-container>
</template>

<script>
import MyHeader from '@/components/header/header'

export default {
  components: {
    MyHeader
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
.el-container {
  height: 100%;
  .header {
    background: $bar-bg;
  }
  .main {
    padding: .15rem .625rem 0rem;
    background: $main-bg;
    overflow: unset;
  }
}
</style>
