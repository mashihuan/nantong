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
    list: {
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
    list: {
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
          bottom: 0,
          right: 0,
          containLabel: true
        },
        title: {
          show: true,
          text: this.title,
          top: '48%',
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 14,
            fontWeight: '400'
          }
        },
        tooltip: {
          trigger: 'item',
          position: ['50%', '50%'],
          formatter: `{b}: {c}${this.unit} ({d}%)`
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['43%', '65%'],
            data: this.list,
            labelLine: {
              // length: 10,
              // length2: 10,
            },
            label: (this.title === '企业分类' || this.title ==='数据调用' || this.title === '产业分类' || this.title === '男女比例') ? {
              color: 'rgba(255, 255, 255, 0.7)',
            }:{
              color: 'rgba(255, 255, 255, 0.7)',
              formatter: (val) => {
                if(this.title === '年龄分布') {
                  return val.name
                }else {
                  return val.name + ' ' + val.percent + '%'
                }
              },
              // fontSize: 10
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

<style lang="scss" scoped>
@import '~@/assets/styles/chart.custom.scss';

</style>
