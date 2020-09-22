<template>
  <div class="wrap">
    <!-- 小学生 -->
    <my-header class="my-header" title="小学生分析统计详情" color="#4D73F4" />
    <div class="student pupil">
      <div class="left">
        <bar
          title="毕业学生总数"
          :color="['#4D73F4']"
          :data-x="pupil.dataX"
          :data="pupil.data"
          :sjrq="pupil.sjrq"
        />
      </div>
      <div class="right">
        <Table
          :list="pupil.list"
          :show-title="false"
          card-title=" "
        />
      </div>
    </div>
    <!-- 初中生 -->
    <my-header class="my-header" title="初中生分析统计详情" color="#2BBB91" />
    <div class="student pupil">
      <div class="left">
        <bar
          title="毕业学生总数"
          :color="['#2BBB91']"
          :data-x="junior.dataX"
          :data="junior.data"
          :sjrq="junior.sjrq"
        />
      </div>
      <div class="right">
        <Table
          :list="junior.list"
          :show-title="false"
          card-title=" "
        />
      </div>
    </div>
    <!-- 高中生 -->
    <my-header class="my-header" title="高中生分析统计详情" color="#4D73F4" />
    <div class="student pupil">
      <div class="left">
        <bar
          title="毕业学生总数"
          :color="['#02A1D7']"
          :data-x="senior.dataY1"
          :data="senior.dataY2"
          :sjrq="senior.sjrq"
        />
        <!-- <horizontal-bar
          title="毕业学生总数"
          :data-y1="senior.dataY1"
          :data-y2="senior.dataY2"
          :data1="senior.data1"
          :data2="senior.data2"
          :color="['#02A1D7']"
        /> -->
      </div>
      <div class="right">
        <Table
          :list="senior.list"
          :show-title="false"
          card-title="学生"
        />
      </div>
    </div>
    <!-- <div class="panel">
      11111
    </div> -->
  </div>
</template>

<script>
import myHeader from '@/components/data/header'
import bar from '@/components/data/bar'
import Table from '@/components/detail/table'
// import horizontalBar from '@/components/dashboard/horizontalBar'

import { bytj } from '@/api/person'
import { searchList } from '@/api/search'
import asyncData from '@/common/mixin'
export default {
  components: {
    myHeader,
    bar,
    Table
    // horizontalBar
  },
  mixins: [asyncData],
  data () {
    return {
      pupil: {},
      junior: {},
      senior: {}
    }
  },
  mounted () {
    this._getStudentChart('xxs', 'pupil')
    this._getStudentChart('czs', 'junior')
    this._getStudentChart('gzs', 'senior')
    this._getStudentTable(236, 'pupil')
    this._getStudentTable(237, 'junior')
    this._getStudentTable(238, 'senior')
  },
  methods: {
    // 获取学生图表数据
    async _getStudentChart (type, student) {
      const res = await bytj({
        type
      })
      if (student === 'senior') {
        let total = 0
        res.data.forEach((val) => {
          total += val.byzs
        })
        // const dataY1 = []
        // const dataY2 = []
        const data1 = []
        const data2 = []
        res.data.forEach((val) => {
          data1.push((val.byzs / total).toFixed(2) * 100)
          data2.push(100)
        })
        // for (const [key, value] of Object.entries(res.data)) {
        //   dataY1.push(key)
        //   dataY2.push(value)
        //   data1.push((value / total).toFixed(2) * 100)
        //   data2.push(100)
        // }
        res.data = res.data.filter((val) => { return val.byzs > 0 })
        this.$set(this.senior, 'dataY1', res.data.map((val) => { return val.ssqy }))
        this.$set(this.senior, 'dataY2', res.data.map((val) => { return val.byzs }))
        this.$set(this.senior, 'data1', data1)
        this.$set(this.senior, 'data2', data2)
      } else {
        this.$set(this[student], 'dataX', res.data.map((val) => { return val.ssqy }))
        this.$set(this[student], 'data', res.data.map((val) => { return val.byzs }))
        this.$set(this[student], 'sjrq', res.data[0].sjrq)
      }
    },
    // 获取学生表格数据
    async _getStudentTable (id, student) {
      const res = await searchList({
        data: {
          id,
          queryType: 'method'
        }
      })
      this.$set(this[student], 'list', res.data.data || [])
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  .my-header {
    margin-bottom: 16px;
  }
  .student {
    display: flex;
    margin-bottom: 16px;
    .left {
      flex: 4;
      height: 100%;
    }
    .right {
      flex: 6;
      margin-left: 16px;
    }
  }
  .panel {
    min-height: 390px;
    min-height: calc(100% - 100px);
  }
}
</style>
