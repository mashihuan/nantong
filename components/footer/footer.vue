<template>
  <div class="wrapper">
    <div class="top">
      <el-row class="top-bar">
        <a href="javascript:;">设为首页</a>|
        <a href="javascript:;">帮助中心</a>|
        <a href="javascript:;">使用反馈</a>|
        <a href="javascript:;">联系我们</a>
      </el-row>
    </div>
    <div class="bottom">
      <el-row class="bottom-bar">
        CopyRight © 2015-2019 杭州数梦工场科技有限公司 版权所有。保留一切权利。
      </el-row>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.wrapper {
  .top {
    height: 50px;
    background: $bar-bg;
  }
  .bottom {
    height: 32px;
    background: $footer-bg;
  }
  .top-bar, .bottom-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1190px;
    height: 100%;
    margin: 0 auto;
    color: #fff;
    font-size: 12px;
  }
  a {
    margin: 0 40px;
    color: #fff;
  }
}
</style>
