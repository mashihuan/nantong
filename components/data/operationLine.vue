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
    },
    data3: {
      type: Array,
      default() {
        return []
      }
    },
    data4: {
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
        legend: {
          right: 0,
          icon: 'circle',
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: 0,
          top: 45,
          bottom: 25,
          right: 0,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // type: 'none'
          },
          formatter: (arr) => {
            if(arr.length === 1) {
              return `${arr[0].name}<br />
                      ${arr[0].marker}${arr[0].seriesName}：${arr[0].value}家<br />
                    `
            }else if(arr.length === 2) {
              return `${arr[0].name}<br />
                      ${arr[0].marker}${arr[0].seriesName}：${arr[0].value}家<br />
                      ${arr[1].marker}${arr[1].seriesName}：${arr[1].value}家<br />
                    `
            }else if(arr.length === 3) {
              return `${arr[0].name}<br />
                      ${arr[0].marker}${arr[0].seriesName}：${arr[0].value}家<br />
                      ${arr[1].marker}${arr[1].seriesName}：${arr[1].value}家<br />
                      ${arr[2].marker}${arr[2].seriesName}：${arr[2].value}家
                    `
            }else if(arr.length === 4) {
              return `${arr[0].name}<br />
                      ${arr[0].marker}${arr[0].seriesName}：${arr[0].value}家<br />
                      ${arr[1].marker}${arr[1].seriesName}：${arr[1].value}家<br />
                      ${arr[2].marker}${arr[2].seriesName}：${arr[2].value}家<br/>
                      ${arr[2].marker}${arr[3].seriesName}：${arr[3].value}家
                    `
            }else {
              return ''
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
            interval: 0,
            color: 'rgba(255, 255, 255, 0.7)'
          }
        },
        yAxis: {
          name: '单位：家',
          type: 'value',
          scale: true,
          nameTextStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
          },
          // min: function(value) {
          //   let minValue = 0
          //   const min = value.min
          //   const max = value.max
          //   if(max * 0.8 > min) {
          //     minValue = min
          //   }else {
          //     minValue = max * 0.8
          //   }
          //   return parseInt(value.min)
          // },
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
            name: '在业',
            type: 'line',
            // stack: '总量',
            data: this.data1,
          },

          {
            name: '注销',
            type: 'line',
            // stack: '总量',
            data: this.data2,
          },
          {
            name: '吊销',
            type: 'line',
            // stack: '总量',
            data: this.data3,
          },
          // {
          //   name: '新增',
          //   type: 'line',
          //   // stack: '总量',
          //   data: this.data4,
          // },
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
