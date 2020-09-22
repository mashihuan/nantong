<template>
  <div class="chart">
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <!-- <count-to :end-val="data1" /> <span class="unit">{{ type === 'person' ? '人' : '家' }}</span> -->
      <div v-for="(item, index) of list" class="item" :Key="index">
        <img class="item-icon" :src="item.icon" alt="">
        <div class="item-right">
          <div class="right-title" :style="{borderColor: item.color}">
            {{ item.title }}
          </div>
          <div class="right-num" :style="{color: item.color}">
            <count-to :end-val="nums[index] || 0" class="num" /><span>家</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import countTo from 'vue-count-to'
export default {
  components: {countTo},
  props: {
    nums: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      list: [
        {
          icon: require('@/assets/img/employed.png'),
          title: '当前全市正常运营企业数',
          color: '#00F3BA'
        },
        {
          icon: require('@/assets/img/logout.png'),
          title: '本年度共计注销企业数',
          color: '#01BBF2'
        },
        {
          icon: require('@/assets/img/revoke.png'),
          title: '本年度共计吊销企业数',
          color: '#6399FF'
        },
        {
          icon: require('@/assets/img/new.png'),
          title: '本年度新增企业数',
          color: '#1956D4'
        },
      ]
    }
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/chart.custom.scss';
.chart {
  height: 3rem;
  .content {
    display: flex;
    align-items: center;
    padding: 0 .25rem;
    .item {
      display: flex;
      align-items: center;
      flex: 3;
      min-height: 2rem;
      padding-left: .2rem;
      margin-right: .3rem;
      border: 1px solid #3620FF;
      color: #fff;
      .item-icon {
        width: .7rem;
        height: .7rem;
        margin-right: .2rem;
        flex-shrink: 0;
      }
      .right-title {
        padding-left: .05rem;
        border-left: 4px solid #00F3BA;
        border-radius: 2px;
        font-size: 16px;
      }
      .right-num {
        margin-top: .25rem;
        font-size: .425rem;
        line-height: .475rem;
        color: #00F3BA;
        .num {
          font-size: .425rem;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
}

</style>
