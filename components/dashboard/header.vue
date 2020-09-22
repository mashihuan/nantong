<template>
  <header>{{ title }}</header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 13.1rem;
  height: .575rem;
  margin: 0 auto;
  text-align: center;
  line-height: .575rem;
  font-size: .3125rem;
  background-image: url('~@/assets/img/header-bg.png');
  background-size: 100% 100%;
  color: #B1E5FB;
}
</style>
