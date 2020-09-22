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
    data1: {
      type: Array,
      default() {
        return []
      }
    },
    unit: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  computed: {
    getCurrentDate() {
      return getCurrentDate
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
          top: 20,
          bottom: 25,
          right: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params) => {
            return `${params[0].marker}${params[0].name}：${params[0].value}${this.unit}`
            // return `${params.marker}${params.name}：${params.value}${this.unit}`
          },
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          data: this.dataX,
          name: '',
          interval: 10,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0,
            color: 'rgba(255, 255, 255, 0.7)',
            rotate: 45,
            fontSize: 10,
            width: 10,
          }
        },
        yAxis: {
          nameTextStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          axisLine: {
            show: false
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
        series: [
          {
            name: '',
            type: 'bar',
             data: this.data1,
            barWidth: 12,
            itemStyle: {
              barBorderRadius: [15, 15, 0, 0]
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
