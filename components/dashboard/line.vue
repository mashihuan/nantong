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
    dataX: {
      type: Array,
      default: () => {
        return []
      }
    },
    data1: {
      type: Array,
      default: () => {
        return []
      }
    },
    color: {
      type: Array,
      default: () => {
        return []
      }
    },
    unit: {
      type: String,
      default: '个'
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
          formatter: `{b}: {c}${this.unit}`
        },
        xAxis: {
          type: 'category',
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
            interval: 0,
            rotate: 45
          }
        },
        yAxis: {
          type: 'value',
          // name: '单位：人',
          nameTextStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          min: (value) => {
            // return parseInt(value.min)
            let minValue = 0
            const min = value.min
            const max = value.max
            if(max * 0.8 > min) {
              minValue = min
            }else {
              minValue = max * 0.8
            }
            return this.title === '从业人数' ? minValue : null
          },
          minInterval: 1,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#2A4493'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          splitLine: {
            lineStyle: {
              color: '#2A4493'
            }
          }
        },
        series: [{
          data: this.data1,
          type: 'line'
        }]
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

<style lang="scss" scoped>
@import '~@/assets/styles/chart.custom.scss';

</style>
