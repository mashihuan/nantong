<template>
  <div class="wrapper">
    <div class="switch" @click="handleSelectArea('南通市')">
      <img src="@/assets/img/switch.png" alt=""> 南通市
    </div>
    <div ref="map" class="map" />
  </div>
</template>

<script>
/*eslint-disable*/
import geoJson from '@/common/nantong'
export default {
  props: {
    page: {
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
  mounted () {
    this._drawMap()
  },
  methods: {
    // 绘制地图
    _drawMap() {
      const myChart = echarts.init(this.$refs.map)
      this.myChart = myChart
      echarts.registerMap('nantong', geoJson)
      const geoCoordMap = [
        { name: '崇川区', value: [120.932203, 31.911357, '南通市崇川区'] },
        // { name: '港闸区', value: [120.821471, 32.069776, '南通市港闸区'] },
        { name: '通州区', value: [121.05163, 32.113882, '南通市通州区'] },
        { name: '如东县', value: [121.090527, 32.386724, '如东县'] },
        { name: '启东市', value: [121.703672, 31.854981, '启东市'] },
        { name: '如皋市', value: [120.573482, 32.268391, '如皋市'] },
        { name: '海门区', value: [121.310107, 31.954154, '海门区'] },
        { name: '海安市', value: [120.478737, 32.550035, '海安市'] }
      ]
      this.option = {
        geo3D: {
          map: 'nantong',
          viewControl: {
            // rotateSensitivity: 0,
            zoomSensitivity: 0,
            center: [14, -10, -10]
          },
          label: {
            textStyle: {
              color: 'transparent',
              backgroundColor: 'transparent'
            }
          },
          itemStyle: {
            borderColor: '#0233FA',
            borderWidth: 1,
            color: '#0F1F59',
            opacity: 0.5
          },
          emphasis: {
            itemStyle: {
              color: '#1F65EB',
              opacity: 1
            }
          },
          regions: [
            {
              name: '',
              itemStyle: {
                color: '#1F65EB',
                opacity: 1
              }
            }
          ]
        },
        series: [
          {
            type: 'map3D',
            map: 'nantong',
            coordinateSystem: 'geo3D',
            data: geoCoordMap,
            symbol: 'circle',
            symbolSize: 15,
            zlevel: 20,
            viewControl: {
              // rotateSensitivity: 0,
              zoomSensitivity: 0,
              center: [14, -10, -10]
            },
            label: {
              textStyle: {
                color: 'transparent',
                backgroundColor: 'transparent'
              }
            },
            itemStyle: {
              borderColor: '#0233FA',
              borderWidth: 1,
              color: '#0F1F59',
              opacity: 0
            },
            emphasis: {
              itemStyle: {
                color: '#1F65EB',
                opacity: 0
              }
            }
          },
          {
            type: 'scatter3D',
            map: 'nantong',
            coordinateSystem: 'geo3D',
            data: geoCoordMap,
            symbol: 'circle',
            symbolSize: 15,
            zlevel: 10,
            itemStyle: {
              borderColor: '#0B496A',
              borderWidth: 5,
              color: '#00F3BA'
            },
            label: {
              show: true,
              formatter: '{b}',
              position: 'bottom',
              textStyle: {
                color: '#fff',
                backgroundColor: 'transparent'
              }
            }
          }
        ]
      }
      window.addEventListener('resize', this.resize)
      myChart.setOption(this.option)
      let self = this
      myChart.on('click', (e) => {
        if(this.page === 'index' || this.page === 'person' || this.page === 'enterprise') {
          if(e.value[2] === '南通市港闸区' || e.value[2] === '南通市崇川区') {
            return
          }
        }
        self.handleSelectArea(e.value[2])
        // self.$emit('handleSelectArea', e.value[2])
        this.option.geo3D.regions[0].name = e.name
        myChart.setOption(this.option)
      })
    },
    resize() {
      this.myChart.resize()
    },
    handleSelectArea(area) {
      if(area === '南通市') {
        this.option.geo3D.regions[0].name = ''
        this.myChart.setOption(this.option)
      }
      this.$emit('handleSelectArea', area)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .switch {
    position: absolute;
    right: 3.3rem;
    top: 1.4rem;
    padding: 0.0625rem;
    background: rgba(0, 243, 186, 0.1);
    border-radius: 3px;
    border: 1px solid rgba(0, 243, 186, 1);
    font-size: 0.15rem;
    cursor: pointer;
    z-index: 2;
    img {
      width: 0.25rem;
      margin-right: 0.0625rem;
    }
  }
  .map {
    width: 100%;
    height: 7rem;
  }
}
</style>
