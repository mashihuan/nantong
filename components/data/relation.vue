<template>
  <div class="chart" :class="{ relation: relation }">
    <div v-if="showInfo" ref="info" class="info">
      <img class="close" src="@/assets/img/close.png" alt="" @click="handleClickInfo">
      <div class="info-inner">
        <Card
          :list="list"
          :card-title="InfoTitle"
          :flag-color="flagColor"
        />
      </div>
    </div>
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <div ref="myChart" class="myChart" />
      <p v-if="nodes.length <= 0" class="message">
        没有查找到相关数据
      </p>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import Card from '@/components/detail/card'
import { searchList } from '@/api/search'

export default {
  components: {
    Card
  },
  props: {
    relation: {
      type: Boolean,
      default: ""
    },
    name: {
      type: String,
      default: ''
    },
    nodes: {
      type: Array,
      default() {
        return []
      }
    },
    links: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      myChart: null,
      list: [],
      InfoTitle: '',
      flagColor: '',
      showInfo: false
    };
  },
  watch: {
    nodes: {
      handler() {
        this._drawChart();
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
    // this._drawChart()
  },
  methods: {
    // 关闭信息
    handleClickInfo() {
      this.showInfo = false
    },
    // 绘制图表
    _drawChart() {
      let data = {
        nodes: this.nodes,
        links: this.links
      }
      data.nodes.forEach(node => {
        if (node.name === this.name) {
          node.symbolSize = 100
          node.itemStyle = {
            color: '#2BBB91'
          }
        }
      })
      data.links.forEach(link => {
        link.label = {
          align: "center",
          fontSize: 12,
        };

        if (link.name === "法人") {
          link.lineStyle = {
            color: '#02A1D7'
          };
        } else if (link.name === "股东" || link.name === '董事成员') {
          link.lineStyle = {
            color: '#EA715B'
          };
        } else  {
          link.lineStyle = {
            color: '#4D73F4'
          };
        }
      })

      let categories = [
        {
          name: "企业",
          itemStyle: {
            color: '#4D73F4'
          }
        },
        {
          name: "企业",
          itemStyle: {
            color: '#4D73F4'
          }
        },
        {
          name: "自然人",
          itemStyle: {
            color: '#EA715B'
          }
        }
      ]
      this.myChart.clear()
      this.myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: (params)=>{
            return `${params.marker}${params.name}`
          }
        },
        series: [
          {
            type: "graph",
            // layout: "circular",
            layout: "force",
            symbolSize: 58,
            roam: true,
            focusNodeAdjacency: false,
            categories: categories,
            edgeSymbol: ["none", "arrow"],
            edgeLabel: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 20
                },
                formatter(x) {
                  return x.data.name
                }
              }
            },
            label: {
              show: true,
              color: '#fff'
            },
            force: {
              repulsion: 2000,
              edgeLength: 80
            },
            data: data.nodes,
            links: data.links
          }
        ]
      });
      window.addEventListener("resize", this.resize);
      this.myChart.off('click')
      this.myChart.on('click', {dataType: 'node'}, (e) => {
        this.showInfo = true
        this.InfoTitle = e.name
        this.list = []
        this.flagColor = e.color
        this.getInfo(e)
        window.console.log(e)
      })
    },
    // 点击节点获取信息
    async getInfo(e) {
      const res = await searchList({
        data: {
          id: e.data.category === '自然人' ? 252 : 253,
          queryType: 'method',
          entityId: e.data.UUID
        }
      })
      this.list = res.data.data || []
    },
    resize() {
      this.myChart.resize();
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/chart.custom.scss";
.relation {
  height: calc(100% - 40px) !important;
}
.myChart {
  height: calc(100%) !important;
}
.content {
  position: relative;
  height: calc(100%) !important;
  padding: 0 !important;
  .message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 16px;
  }
}
.info {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  min-height: 240px;
  padding: 10px;
  border-radius:2px;
  background: rgba(7,11,31, 0.75);
  z-index: 999;
  .close {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 16px;
    cursor: pointer;
  }
}
</style>
