<template>
  <el-container>
    <el-header class="header" height="46px">
      <my-header />
    </el-header>
    <el-main class="main">
      <div class="main-inner">
        <nuxt />
      </div>
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
    background: $main-bg;
    overflow: unset;
    .main-inner {
      width: 1190px;
      height: 100%;
      margin: 0 auto;
    }
  }
}

</style>
