<template>
  <div class="chart">
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <h3>{{ title }}</h3>
      <div ref="myChart" class="myChart" />
      <slot />
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  props: {
    title: {
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
    data2: {
      type: Array,
      default() {
        return []
      }
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
          top: 45,
          bottom: 25,
          right: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} <br/> {a}:{c}人'
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
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        yAxis: {
          name: '单位：人',
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
            name: '常口',
            type: 'bar',
             data: this.data1,
            barWidth: 15,
            itemStyle: {
              barBorderRadius: [15, 15, 0, 0]
            }
          },
          {
            name: '流口',
            type: 'bar',
            data: this.data2,
            barWidth: 15,
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
