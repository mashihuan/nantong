<template>
  <div class="total-num">
    <div class="icon-wrap" :style="{background: color}">
      <img class="icon" src="@/assets/img/data.png" alt="icon">
    </div>
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#4D73F4'
    }
  }
}
</script>

<style lang="scss" scoped>
.total-num {
  display: flex;
  align-items: center;
  padding: 14px 20px;
  border-left: 2px solid #4D73F4;
  background: #111842;
  .icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #4D73F4;
    .icon {
      width: 20px;
      height: 20px;
    }
  }
  span {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 2px;
  }
}
</style>
