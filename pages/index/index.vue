<template>
  <div class="wrapper">
    <my-header title="南通市大数据局数据综合治理平台" />
    <el-row class="container">
      <el-col :span="6" class="left">
        <!-- 人口变化趋势 -->
        <count-bar
          title="人口变化趋势"
          unit="人"
          :data-x="zCountByArea.dataX"
          :data1="zCountByArea.data1"
          :data2="zCountByArea.data2"
          :data3="zCountByArea.data3"
          :sjrq="zCountByArea.sjrq"
          min="min"
          :color="['#5B9BD5', '#ED7D31', '#A5A5A5']"
        />
        <!-- 各区人口数 -->
        <bar
          title="各区人口数"
          unit="人"
          :data-x="zDistribute.dataX"
          :data1="zDistribute.data1"
          :sjrq="zDistribute.sjrq"
          :color="['#35CFC9']"
          style="margin-bottom: 0"
        />
      </el-col>
      <el-col :span="12" class="center">
        <div class="num">
          <div class="person">
            <div class="title">
              一人一档数据 <span @click="$router.push('/person')">查看详情 <img src="@/assets/img/more.png" alt=""> </span>
            </div>
            <p class="count">
              <!-- <span>{{ zCount }}</span> -->
              <count-to :end-val="zCount" />人
            </p>
          </div>
          <div class="company">
            <div class="title">
              一企一档数据 <span @click="$router.push('/enterprise')">查看详情<img src="@/assets/img/more.png" alt=""></span>
            </div>
            <p class="count">
              <count-to :end-val="fCount" />  家
            </p>
          </div>
        </div>
        <!-- 地图 -->
        <Map page="index" @handleSelectArea="handleSelectArea" />
      </el-col>
      <el-col :span="6" class="right">
        <!-- 企业变化趋势 -->
        <count-bar
          title="企业变化趋势"
          unit="家"
          :data-x="fCountByArea.dataX"
          :data1="fCountByArea.data1"
          :data2="fCountByArea.data2"
          :data3="fCountByArea.data3"
          :sjrq="fCountByArea.sjrq"
          :color="['#5B9BD5', '#ED7D31', '#A5A5A5']"
        />
        <!-- 各区企业数 -->
        <bar
          title="各区企业数"
          unit="家"
          :data-x="fDistribute.dataX"
          :data1="fDistribute.data1"
          :sjrq="fDistribute.sjrq"
          :color="['#35CFC9']"
          style="margin-bottom: 0"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

import MyHeader from '@/components/dashboard/header'
import Map from '@/components/dashboard/map'

import countBar from '@/components/dashboard/countBar'
import bar from '@/components/dashboard/bar'

import asyncData from '@/common/mixin'

import {
  countZrr,
  countFr,
  countZrrByArea,
  countFrByArea,
  zrrDistribute,
  frDistribute
} from '@/api/dashboard'

export default {
  layout: 'dashboard',
  components: {
    countTo,
    MyHeader,
    Map,
    countBar,
    bar
  },
  mixins: [asyncData],
  data () {
    return {
      zCount: 0,
      fCount: 0,
      area: '南通市',
      zCountByArea: {},
      fCountByArea: {},
      zDistribute: [],
      fDistribute: {}
    }
  },
  mounted () {
    this._getCountZrr()
    this._getCountFr()
    this._getCountZrrByArea()
    this._getCountFrByArea()
    this._getZrrDistribute()
    this._getZrDistribute()
  },
  methods: {
    // 自然人计数
    async _getCountZrr () {
      const res = await countZrr({
        data: {}
      })
      this.zCount = res.data
    },
    // 法人计数
    async _getCountFr () {
      const res = await countFr({
        data: {}
      })
      this.fCount = res.data
    },
    // 新增/减少自然人
    async _getCountZrrByArea () {
      let res = await countZrrByArea({
        area: this.area
      })
      res = res.data
      this.$set(this.zCountByArea, 'dataX', res.map((val) => { return val.rq }))
      this.$set(this.zCountByArea, 'data1', res.map((val) => { return val.myxz }))
      this.$set(this.zCountByArea, 'data2', res.map((val) => { return (val.mysw) }))
      this.$set(this.zCountByArea, 'data3', res.map((val) => { return val.zrk }))
      this.$set(this.zCountByArea, 'sjrq', res[0].sjrq)
    },
    // 新增/减少企业
    async _getCountFrByArea () {
      let res = await countFrByArea({
        area: this.area
      })
      res = res.data
      this.fCountByArea = res.data || []
      this.$set(this.fCountByArea, 'dataX', res.map((val) => { return val.rq }))
      this.$set(this.fCountByArea, 'data1', res.map((val) => { return val.myxz }))
      this.$set(this.fCountByArea, 'data2', res.map((val) => { return (val.zxqy) }))
      this.$set(this.fCountByArea, 'data3', res.map((val) => { return (val.zjclqys) }))
      this.$set(this.fCountByArea, 'sjrq', res[0].sjrq)
    },
    // 各区人口数
    async _getZrrDistribute () {
      let res = await zrrDistribute({})
      res = res.data.filter((val) => {
        return val.zrk > 0 && val.dq !== '南通市开发区' && val.dq !== '南通市崇川区' && val.dq !== '南通市港闸区'
      })
      this.$set(this.zDistribute, 'dataX', res.map((val) => { return val.dq }))
      this.$set(this.zDistribute, 'data1', res.map((val) => { return val.zrk }))
      this.$set(this.zDistribute, 'sjrq', res[0].sjrq)
    },
    // 各区企业数
    async _getZrDistribute () {
      let res = await frDistribute({})
      res = res.data.filter((val) => {
        return val.zqys > 0
      })
      this.$set(this.fDistribute, 'dataX', res.map((val) => { return val.dq }))
      this.$set(this.fDistribute, 'data1', res.map((val) => { return val.zqys }))
      this.$set(this.fDistribute, 'sjrq', res[0].sjrq)
    },
    // 切换地图
    handleSelectArea (area) {
      this.area = area
      this._getCountZrrByArea()
      this._getCountFrByArea()
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
