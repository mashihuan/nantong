<template>
  <div ref="map" class="map" />
</template>

<script>
/*eslint-disable*/
import {getCurrentDate} from '@/common/date'
// import geoJson from '@/common/china'
import geoJson from '~/static/js/china'
export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      defalut: ''
    },
    sjrq: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      myChart: null,
      option: {}
    }
  },
  watch: {
    data: {
      handler() {
        this._drawMap()
        this.myChart.hideLoading()
      },
      deep: true
    }
  },
  computed: {
    getCurrentDate() {
      return this.sjrq || getCurrentDate
    }
  },
  mounted () {
    const myChart = echarts.init(this.$refs.map)
    this.myChart = myChart
    this.myChart.showLoading({
      maskColor: 'rgba(255, 255, 255, 0)',
      textColor: '#fff',
    })
    this._drawMap()
  },
  methods: {
    // 绘制地图
    _drawMap() {

      echarts.registerMap('china', geoJson, {})
      const geoCoordMap = {
       '台湾': [121.5135,25.0308],
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        // "南海诸岛": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891],
        '香港': [115.2, 22.75],
        '澳门': [114.52, 22.86],
      }
      var data = [...this.data]
      let res = []
      let tempArr = []
      let nameObj = {}
      for(let i in geoCoordMap) {
        data.forEach((val, index) => {
          if(val.name.includes(i)) {
            val.name = i
          }
        })
      }
      data.forEach((val) => {
        nameObj[val.name] = val.name
      })
      for(let i in geoCoordMap) {
        if(!nameObj[i]) {
          tempArr.push({
            name: i,
            value: 0
          })
        }
      }
      data = data.concat(tempArr)
      this.option = {
        title: {
          text: `${this.title}分析（${this.getCurrentDate()}）`,
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          formatter: (val) => {
            if(val.name === '南海诸岛') {
              return ''
            }
            return `${val.seriesName} <br/>
                      ${val.name}：${val.value}人`
          }
        },
        visualMap: {
          left: 0,
          bottom: 120,
          max: 50000,
          textStyle: {
            color: '#fff'
          },
          inRange: {
            color: [ '#F4E9E7', '#F12B07']
          },
          text: ['高', '低'],           // 文本，默认为数值文本
          calculable: true
        },
        geo: {
          map: 'china',
          show: true,
          roam: true,
          aspectScale: 0.9,
          label: {
            normal: {
              show: true,
            },
          },
          emphasis: {
            itemStyle: {
              areaColor: '#0a2dae',//悬浮区背景
              color: '#070B1F'
            },
            label: {
              normal: {
                show: true
              },
            },
          },
          regions: [
            {
              name: '南海诸岛',
              label: {
                show: false
              },
              itemStyle: {
                color: '#0f0',
                areaColor: '#070B1F',
              },
              emphasis: {
                itemStyle: {
                  color: '#070B1F'
                }
              }
            }
          ]
        },
        series: [
          {
            type: 'map',
            map: 'china',
            name: '流动人口分析',
            geoIndex: 0,
            animation: true,
            data: data
          }
        ]
      }
      window.addEventListener('resize', this.resize)
      this.myChart.setOption(this.option)
    },
    resize() {
      this.myChart.resize()
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  // height: 7rem;
  height: calc(100%);
}
</style>
