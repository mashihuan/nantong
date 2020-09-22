<template>
  <div class="wrapper">
    <my-header title="南通市大数据局一人一档数据" />
    <el-row class="container">
      <el-col :span="6" class="left">
        <!-- 每月新增/减少自然人 -->
        <count
          type="person"
          title1="当前全市自然人"
          title2="人数"
          title3="人数"
          :data1="total"
          :data2="year"
          :data3="month"
        />
        <!-- 年龄分布 -->
        <pie
          title="年龄分布"
          unit="人"
          :list="ages"
          :sjrq="agesSjrq"
          :color="['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']"
        />
      </el-col>
      <el-col :span="12" class="center">
        <div class="num">
          <div class="person">
            <div class="title">
              综合大盘数据 <span @click="$router.push('/')">查看详情 <img src="@/assets/img/more.png" alt=""> </span>
            </div>
          </div>
          <div class="company">
            <div class="title">
              一企一档数据 <span @click="$router.push('/enterprise')">查看详情<img src="@/assets/img/more.png" alt=""></span>
            </div>
          </div>
        </div>
        <!-- 地图 -->
        <Map page="person" @handleSelectArea="handleSelectArea" />
      </el-col>
      <el-col :span="6" class="right">
        <!-- 男女比例 -->
        <pie
          title="男女比例"
          :list="sexs"
          :sjrq="sexsSjrq"
          :color="['#280AEA','#0FB2F8']"
          unit="人"
        />
        <!-- 学历分布 -->
        <horizontal-bar
          title="学历分布"
          :data-y1="education.dataY1"
          :data-y2="education.dataY2"
          :data1="education.data1"
          :data2="education.data2"
          :sjrq="education.sjrq"
          :color="['#035ED7', '#FF922F', '#361FFF', '#1A99D6', '#407CFE']"
        />
      </el-col>
    </el-row>
    <!-- 常口/流口占比 -->
    <!-- <population-bar
      title="常口/流口占比"
      :data-x="populations.dataX"
      :data1="populations.data1"
      :data2="populations.data2"
      :color="['#35CFC9', '#40A9FE']"
    /> -->
  </div>
</template>

<script>
/*eslint-disable*/
import MyHeader from '@/components/dashboard/header'
import Map from '@/components/dashboard/map'

import count from '@/components/dashboard/count'
import pie from '@/components/dashboard/pie'
import horizontalBar from '@/components/dashboard/horizontalBar'
// import populationBar from '@/components/dashboard/populationBar'
import asyncData from '@/common/mixin'
import {
  countZrr
} from '@/api/dashboard'

import {
  countNewZrrByArea,
  sexDistribute,
  ageDistribute,
  hjDistribute,
  xlDistribute
} from '@/api/person'

export default {
  layout: 'dashboard',
  components: {
    MyHeader,
    Map,
    count,
    pie,
    horizontalBar,
    // populationBar
  },
  mixins: [asyncData],
  data () {
    return {
      total: 0,
      year: 0,
      month: 0,
      area: '南通市',
      sexs: [],
      sexsSjrq: '',
      ages: [],
      agesSjrq: '',
      populations: {},
      education: {
        dataY1: [],
        dataY2: [],
        data1: [],
        data2: [],
      }
    }
  },
  mounted () {
    this._getCountZrr()
    this._getCountNewZrrByArea()
    this._getSexDistribute()
    this._getAgeDistribute()
    this._getXlDistribute()
    this._getHjDistribute()
  },
  methods: {
    // 自然人计数
    async _getCountZrr () {
      const res = await countZrr({
        data: {}
      })
      this.total = res.data
    },
    // 新增人数
    async _getCountNewZrrByArea () {
      const res = await countNewZrrByArea({
        area: this.area
      })
      this.year = res.data.year
      this.month = res.data.month
    },
    // 获取男女比例
    async _getSexDistribute () {
      const res = await sexDistribute({
        area: this.area
      })
      const sexs = []
      for (let [key, value] of Object.entries(res.data)) {
        if (key === 'nanxrk') { key = '男' }
        if (key === 'nvxrk') { key = '女' }
        sexs.push({
          name: key,
          value
        })
      }
      this.sexs = sexs
      this.sexsSjrq = res.data.sjrq
    },
    // 获取年龄分布
    async _getAgeDistribute() {
      const res = await ageDistribute({
        area: this.area
      })
      const ages = []
      for (let [key, value] of Object.entries(res.data)) {
        key = key.replace('in', '<')
        key = key.replace('out', '>')
        key = key.replace('f', '')
        key = key.replace('t', '-')
        ages.push({
          name: key + '岁',
          value
        })
      }
      this.ages = ages
      this.agesSjrq = res.data.sjrq
    },
    // 获取学历分布
    async _getXlDistribute() {
      const res = await xlDistribute({
        area: this.area
      })
      let total = 0
      const arr = []
      for (const key in res.data[0]) {
        if(key !== 'dq' && key !== 'sjrq') {
          total += (res.data[0][key] - 0)
          arr.push(res.data[0][key])
        }
      }
      const flag = arr.every(val => {
        return Number(val) === 0
      })
      if(flag && this.area !== '南通市') {
        this.area = '南通市'
        this._getXlDistribute()
        return
      }
      const dataY1 = []
      const dataY2 = []
      const data1 = []
      const data2 = []
      for (const [key, value] of Object.entries(res.data[0])) {
        if(key !== 'dq' && key !== 'sjrq') {
          if(value > 0) {
            const rate = parseFloat(value / total).toPrecision(4)
            dataY1.push(key)
            dataY2.push(value)
            data1.push((rate * 100).toFixed(4))
            data2.push(100)
          }
        }
      }
      this.$set(this.education, 'dataY1', dataY1)
      this.$set(this.education, 'dataY2', dataY2)
      this.$set(this.education, 'data1', data1)
      this.$set(this.education, 'data2', data2)
      this.$set(this.education, 'sjrq', res.data[0].sjrq)
    },
    // 获取常口/流口比
    async _getHjDistribute() {
      // const res = await hjDistribute({
      //   area: this.area
      // })
      // this.$set(this.populations, 'dataX', res.data.map(val => {return val.dq}))
      // this.$set(this.populations, 'data1', res.data.map(val => {return val.ckzs}))
      // this.$set(this.populations, 'data2', res.data.map(val => {return val.lkzs}))
    },
    // 切换地图
    handleSelectArea (area) {
      this.area = area
      this._getCountNewZrrByArea()
      this._getSexDistribute()
      this._getAgeDistribute()
      this._getXlDistribute()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  color: #fff;
  .container {
    background: url('/bg/map-bg.png') center top no-repeat;
    background-size: 54% 8.4rem;
  }
  .center {
    padding: 0 .6rem;
    .num {
      padding-top: .875rem;
      margin-bottom: .5rem;
      display: flex;
      & >div:nth-of-type(2) {
        padding-left: 1rem;
      }
      > div {
        flex: 1;
        .title {
          display: flex;
          align-items: center;
          font-size: 14px;
          span {
            display: flex;
            align-items: center;
            margin-left: .15rem;
            padding: 0 .1rem;
            line-height: 1.3;
            font-size: .15rem;
            background:rgba(0,243,186,0.1);
            border-radius: .0375rem;
            border:1px solid rgba(0,243,186,1);
            cursor: pointer;
            img {
              width: .1875rem;
              margin-left: .125rem;
            }
          }
        }
        .count {
          margin-top: .175rem;
          font-size: .15rem;
          color: #00F3BA;
          span {
            font-family: electronicFont;
            font-size: .75rem;
            word-break: break-all;
          }
        }
      }
    }
  }
}
</style>
