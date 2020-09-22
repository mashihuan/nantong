<template>
  <div class="content">
    <my-header class="my-header" title="人口结构分析" color="#4D73F4" />
    <el-row type="flex">
      <el-col>
        <bar
          title="上小学的适龄儿童个数"
          :data-x="dataX1"
          :data="pupil"
          :sjrq="sjrq"
          :color="['#4D73F4']"
        />
      </el-col>
      <el-col>
        <bar
          title="各区人口出生增长"
          :data-x="dataX2"
          :data="birth"
          :sjrq="sjrq"
          :color="['#2BBB91']"
        />
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col>
        <bar
          title="60岁以上老人占比"
          :data-x="dataX3"
          :data="oldman"
          :nums="oldmanNum"
          :total="totalNum"
          :rate="oldman"
          :sjrq="sjrq"
          :color="['#35CFC9']"
          unit="%"
        />
      </el-col>
      <el-col>
        <Table
          :list="list"
          :show-title="false"
          card-title="人口分析"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import myHeader from '@/components/data/header'
import bar from '@/components/data/bar'
import Table from '@/components/detail/table'

import { searchList } from '@/api/search'
import asyncData from '@/common/mixin'
export default {
  components: {
    myHeader,
    bar,
    Table
  },
  mixins: [asyncData],
  data () {
    return {
      list: [],
      dataX1: [],
      dataX2: [],
      dataX3: [],
      pupil: [],
      sjrq: '',
      birth: [],
      oldman: [],
      oldmanNum: [],
      totalNum: []
    }
  },
  mounted () {
    this._getPopulation()
  },
  methods: {
    // 获取人口结构数据
    async _getPopulation () {
      const res = await searchList({
        data: {
          id: 251,
          queryType: 'method'
        }
      })
      this.list = res.data.data || []
      const sjrqObj = res.data.data[0].filter((val) => {
        return val.label === '数据日期'
      })
      this.sjrq = sjrqObj[0].value
      const arr = []
      res.data.data.forEach((item) => {
        const tempArr = item.map((val, index) => {
          return { [val.label]: val.value }
        })
        let json = {}
        tempArr.forEach((val) => {
          json = Object.assign(json, val)
        })
        arr.push(json)
      })
      const arr1 = arr.filter((val) => { return val['适龄儿童数'] > 0 })
      const arr2 = arr.filter((val) => { return val['出生人口'] > 0 })
      const arr3 = arr.filter((val) => { return val['老年人数'] > 0 })
      this.dataX1 = arr1.map((val) => {
        return val['地区']
      })
      this.dataX2 = arr2.map((val) => {
        return val['地区']
      })
      this.dataX3 = arr3.map((val) => {
        return val['地区']
      })
      this.pupil = arr1.map((val) => {
        return val['适龄儿童数']
      })
      this.birth = arr2.map((val) => {
        return val['出生人口']
      })
      this.oldman = arr3.map((val) => {
        return val['老年人占比'].replace('%', '')
      })
      this.totalNum = arr3.map((val) => {
        return val['总人数'] || 0
      })
      this.oldmanNum = arr3.map((val) => {
        return val['老年人数'] || 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-header {
  margin-bottom: 20px;
}
.el-row {
  .el-col:last-child {
    margin-left: 20px;
  }
}
</style>
