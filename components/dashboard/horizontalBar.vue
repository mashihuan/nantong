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
    dataY1: {
      type: Array,
      default() {
        return []
      }
    },
    dataY2: {
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
    },
    color: {
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
  computed: {
    getCurrentDate() {
      return getCurrentDate
    }
  },
  watch: {
    dataY1: {
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
        grid: {
          left: 0,
          top: 30,
          bottom: 25,
          right: 20,
          containLabel: true
        },
        xAxis: [
          {
            type: 'value',
            name: '',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false,
              color: 'rgba(255, 255, 255, 0.7)'
            },
            splitLine: {
              lineStyle: {
                color: '#2A4493'
              }
            }
          }
        ],
        yAxis: [
          {
            data: this.dataY1,
            type: 'category',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: 'rgba(255, 255, 255, 0.7)',
              interval: 0
            },
            splitLine: {
              show: false
            }
          },
          {
            data: this.dataY2,
            type: 'category',
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
              color: 'rgba(255, 255, 255, 0.7)',
              interval: 0
            },
            splitLine: {
              show: false
            }
          },
        ],
        tooltip: {
          trigger: 'item',
          show: false
        },
        series: [
          {
            name: '比例',
            type: 'bar',
            data: this.data1,
            // yAxisIndex: 1,
            barWidth: 12,
            zlevel: 1,
            itemStyle: {
              barBorderRadius: [0, 5, 5, 0],
              color:(params) => {
                var num = this.color.length
                return this.color[params.dataIndex % num]
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: function(params) {
                console.log(params)
                return `${params.name}：${params.value}%`
              }
            },
            label: {
              show: true,
              position: this.title === '学历分布' ? 'right' : 'inside',
              color: '#fff',
              formatter: '{c}%'
            }
          },
          {
            name: '背景',
            type: 'bar',
            data: this.data2,
            // yAxisIndex: 0,
            // z: 1,
            barGap: '-100%',
            barWidth: 12,
            itemStyle: {
              barBorderRadius: [0, 5, 5, 0],
              color: '#122867'
            },
            tooltip: {
              show: false
            },
          },
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
