<template>
  <div class="chart">
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <h3>{{ title }}&nbsp;<small class="date">({{ sjrq || getCurrentDate() }})</small></h3>
      <div ref="myChart" class="myChart" />
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
    list1: {
      type: Array,
      default: () => {
        return []
      }
    },
    list2: {
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
      default: ''
    },
    subTitle1: {
      type: String,
      default: ''
    },
    subTitle2: {
      type: String,
      default: ''
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
    list1: {
      handler() {
        this._drawChart()
        this.myChart.hideLoading()
      },
      deep: true
    },
    list2: {
      handler() {
        this._drawChart()
        this.myChart.hideLoading()
      },
      deep: true
    }
  },
  mounted() {
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
    _drawChart(title, list, dom, num) {
      let option = {
        color: this.color,
        tooltip: {
        trigger: 'item',
          formatter: `{b}: {c}${this.unit} ({d}%)`
        },
        grid: {
          left: 0,
          top: 25,
          bottom: 25,
          right: 0,
          containLabel: true
        },
        title: [
          {text: ''},
          {
            subtext: this.subTitle1,
            left: '48%',
            top: '20.5%',
            textAlign: 'center'
          },
          {
            subtext: this.subTitle2,
            left: '49%',
            top: '67.5%',
            textAlign: 'center'
          }
        ],
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['35%', '50%'],
            center: ['50%', '50%'],
            data: this.list1,
            label: {
              color: 'rgba(255, 255, 255, 0.7)',
              formatter: (val) => {
                return val.name + ' ' + val.percent + '%'
              }
            },
            labelLine: {
              length: 5,
              length2: 5
            },
            left: 'center',
            top: '-45%',
          },
          {
            name: '',
            type: 'pie',
            radius: ['35%', '55%'],
            center: ['50%', '50%'],
            data: this.list2,
            label: {
              color: 'rgba(255, 255, 255, 0.7)',
              formatter: (val) => {
                return val.name + ' ' + val.percent + '%'
              }
            },
            labelLine: {
              length: 5,
              length2: 5
            },
            left: 'center',
            top: '49%',
          }
        ]
      }
      this.myChart.setOption(option)
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
.chart {
  height: 5.375rem;
  .myChart {
    height: 4.875rem !important;
  }
}
</style>
