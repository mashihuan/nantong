<template>
  <div class="chart">
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <h3>{{ title }}&nbsp;<small class="date">({{ sjrq || getCurrentDate() }})</small> </h3>
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
    min: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    legend: {
      type: Array,
      default() {
        return []
      }
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
    data2: {
      type: Array,
      default() {
        return []
      }
    },
    data3: {
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
          top: 40,
          bottom: 25,
          right: 0,
          containLabel: true
        },
        // title: {
        //   text: this.title,
        //   left: 0,
        //   textStyle: {
        //     color: 'rgba(255, 255, 255)',
        //     fontWeight: 'normal',
        //     fontSize: 13
        //   }
        // },
        legend: {
          right: 0,
          icon: 'circle',
          textStyle: {
            color: 'rgba(255, 255, 255)'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          },
          formatter: (params) => {
            if(params.length === 1) {
              return `${params[0].name}<br/>
                    ${params[0].marker}${params[0].seriesName}：${params[0].value}${this.unit}`
            }
            if(params.length === 2) {
              return `${params[0].name}<br/>
                    ${params[0].marker}${params[0].seriesName}：${params[0].value}${this.unit}<br/>
                    ${params[1].marker}${params[1].seriesName}：${params[1].value}${this.unit}`
            }
            if(params.length === 3) {
              return `${params[0].name}<br/>
                    ${params[0].marker}${params[0].seriesName}：${params[0].value}${this.unit}<br/>
                    ${params[1].marker}${params[1].seriesName}：${params[1].value}${this.unit}<br/>
                    ${params[2].marker}${params[2].seriesName}：${params[2].value}${this.unit}`
            }
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
            interval: 0,
            fontSize: 10,
            rotate: 45,
          }
        },
        yAxis: {
          min: (value) => {
            let minValue = 0
            const min = value.min
            const max = value.max
            if(max * 0.9 > min) {
              minValue = min
            }else {
              minValue = max * 0.9
            }
            return this.min === 'min' ? value.min : parseInt(minValue)
          },
          axisLine: {
            show: false
          },
          minInterval: 1,
          axisTick: {
            show: false
          },
          axisLabel: {
            color: 'rgba(255, 255, 255, 0.7)',
          },
          splitLine: {
            lineStyle: {
              color: '#2A4493'
            }
          }
        },
        series: [
          {
            name: this.legend[0] || '总数',
            type: 'bar',
            stack: 'count',
            data: this.data3,
            barWidth: 12,
            itemStyle: {
              // barBorderRadius: [5, 5, 0, 0]
            }
          },
          {
            name: this.legend[1] || '增加',
            type: 'bar',
            stack: 'count',
            data: this.data1,
            barWidth: 12,
            itemStyle: {
              // barBorderRadius: [5, 5, 0, 0]
            },
          },
          {
            name: this.legend[2] || '减少',
            type: 'bar',
            stack: 'count',
            data: this.data2,
            barWidth: 12,
            itemStyle: {
              // barBorderRadius: [5, 5, 0, 0]
            }
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
