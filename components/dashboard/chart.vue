<template>
  <div class="chart">
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <h3>人员就业</h3>
      <div ref="myChart" class="myChart" />
      <slot />
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  mounted () {
    const myChart = echarts.init(this.$refs.myChart)
    myChart.setOption({
      color: ['#01BBF2', '#00EAFF', '#042FCA', '#035ED7', '#028CE5'],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },

      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 335, name: '直接访问' },
            { value: 310, name: '邮件营销' },
            { value: 274, name: '联盟广告' },
            { value: 235, name: '视频广告' },
            { value: 400, name: '搜索引擎' }
          ].sort(function (a, b) { return a.value - b.value }),
          roseType: 'radius',
          label: {
            color: 'rgba(255, 255, 255, 0.8)'
          },
          labelLine: {
            lineStyle: {
              color: '#01BBF2'
            },
            length: 20,
            length2: 20
          },
          itemStyle: {
            // color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay (idx) {
            return Math.random() * 200
          }
        }
      ]
    })
    window.addEventListener('resize', function () {
      myChart.resize()
    })
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles/chart.custom.scss';
</style>
