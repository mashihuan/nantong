<template>
  <div class="chart">
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <h3>{{ title }}&nbsp;<small class="date">({{ sjrq || getCurrentDate() }})</small></h3>
      <div ref="myChart" class="myChart" />
      <slot />
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import {getCurrentDate} from '@/common/date'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    sjrq: {
      type: String,
      default: ''
    },
    color: {
      type: Array,
      default() {
        return []
      }
    },
    dataX: {
      type: Array,
      default() {
        return []
      }
    },
    data: {
      type: Array,
      default() {
        return []
      }
    },
    nums: {
      type: Array,
      default() {
        return []
      }
    },
    total: {
      type: Array,
      default() {
        return []
      }
    },
    rate: {
      type: Array,
      default() {
        return []
      }
    },
    unit: {
      type: String,
      default: '人'
    }
  },
  computed: {
    getCurrentDate() {
      return getCurrentDate
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  watch: {
    dataX: {
      handler() {
        this._drawChart()
        this.myChart.hideLoading()
      },
      deep: true
    }
  },
  mounted () {
    const myChart = echarts.init(this.$refs.myChart);
    this.myChart = myChart
    this.myChart.showLoading({
      maskColor: 'rgba(255, 255, 255, 0)',
      textColor: '#fff',
    })
    this._drawChart()
  },
  methods: {
    // 绘制图表
    _drawChart() {
      this.myChart.setOption({
        color: this.color,
        grid: {
          left: 0,
          top: 25,
          bottom: 25,
          right: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            if(this.nums.length > 0) {
              return `${params[0].marker}${params[0].name}
              <br />老年人数：${this.nums[params[0].dataIndex]}人
              <br/>人口总数：${this.total[params[0].dataIndex]}人
              <br/>老人占比：${this.rate[params[0].dataIndex]}%`
            }else {
              return `${params[0].marker}${params[0].name}：${params[0].value}${this.unit}`
            }
          },
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          data: this.dataX,
          name: '',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            rotate: 30,
            interval: 0,
            fontSize: 10
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          minInterval: 1,
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
            formatter: (val, index) => {
              return this.unit == '%' ? (val + '%') : val
            }
          },
          splitLine: {
            lineStyle: {
              color: '#2A4493'
            }
          }
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: this.data,
            barWidth: 12,
            itemStyle: {
              barBorderRadius: [5, 5, 0, 0]
            }
          }
        ]
      })
      window.addEventListener('resize', this.resize)
    },
    resize() {
      this.myChart.resize()
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/chart.custom.scss';
</style>
