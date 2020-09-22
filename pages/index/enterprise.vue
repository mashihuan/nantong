<template>
  <div class="wrapper">
    <my-header title="南通市大数据局一企一档数据" />
    <el-row class="container">
      <el-col :span="6" class="left">
        <!-- 每月新增/减少企业 -->
        <count
          type="enterprise"
          title1="当前全市企业"
          title2="企业"
          title3="企业"
          :data1="total"
          :data2="year"
          :data3="month"
        />
        <!-- 企业分类 -->
        <pie
          title="企业分类"
          :list="types"
          :sjrq="typesSjrq"
          unit="家"
          :color="['#280AEA','#13C39A', '#01BBF2', '#1F65EB', '#741FC8', '#FF922F', '#13CE66']"
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
              一人一档数据 <span @click="$router.push('/person')">查看详情<img src="@/assets/img/more.png" alt=""></span>
            </div>
          </div>
        </div>
        <!-- 地图 -->
        <Map page="enterprise" @handleSelectArea="handleSelectArea" />
      </el-col>
      <el-col :span="6" class="right">
        <!-- 从业人数 -->
        <myLine
          title="从业人数"
          unit="人"
          :data-x="employee.dataX"
          :data1="employee.data1"
          :sjrq="employee.sjrq"
          :color="['#13CE66']"
        />
        <!-- 企业状态/活跃
        <double-pie
          title="企业状态/活跃"
          unit="家"
          sub-title1="状态"
          sub-title2="活跃/僵尸"
          :list1="status.list1"
          :list2="status.list2"
          :sjrq="status.sjrq"
          :color="['#280AEA', '#0FB2F8', '#1F65EB']"
        />-->
        <pie
          title="产业分类"
          :list="industry"
          :sjrq="industrySjrq"
          unit="家"
          :color="['#280AEA','#13C39A', '#01BBF2', '#1F65EB', '#741FC8', '#FF922F', '#13CE66']"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
/*eslint-disable*/
import MyHeader from '@/components/dashboard/header'
import Map from '@/components/dashboard/map'

import count from '@/components/dashboard/count'
import pie from '@/components/dashboard/pie'
import myLine from '@/components/dashboard/line'
import horizontalBar from '@/components/dashboard/horizontalBar'
import doublePie from '@/components/dashboard/doublePie'
import asyncData from '@/common/mixin'

import {
  countFr,
  lastEnterprise,
  qylxDistribute,
  employeesPerMonth,
  qyztDistribute,
  countFrHy
} from '@/api/enterprise'

export default {
  layout: 'dashboard',
  components: {
    MyHeader,
    Map,
    count,
    pie,
    myLine,
    horizontalBar,
    doublePie
  },
  mixins: [asyncData],
  data () {
    return {
      total: 0,
      year: 0,
      month: 0,
      area: '南通市',
      types: [],
      typesSjrq: '',
      employee: {},
      status: {},
      industry: [],
      industrySjrq: ''
    }
  },
  mounted () {
    this._getCountFr()
    this._getLastEnterprise()
    this._getQylxDistribute()
    this._getEmployeesPerMonth()
    this._getCountFrHy()
    // this._getQyztDistribute()
  },
  methods: {
    // 法人计数
    async _getCountFr () {
      const res = await countFr({
        data: {}
      })
      this.total = res.data
    },
    // 当月新增/减少企业
    async _getLastEnterprise() {
      const res = await lastEnterprise({
        area: this.area
      })
      this.year = res.data.myxz || 0
      this.month = res.data.zxqy || 0
    },
    // 企业分类
    async _getQylxDistribute() {
      const res = await qylxDistribute({
        area: this.area
      })
      this.typesSjrq = res.data[0].sjrq
      this.types = res.data.map(val => {
        return {
          name: val.lx,
          value: val.zs
        }
      })
    },
    // 从业人数
    async _getEmployeesPerMonth() {
      const res = await employeesPerMonth({
        area: this.area
      })
      const arr = res.data.filter(val => {
        return val.jyzrs > 0
      })
      console.log(arr)
      this.$set(this.employee, 'dataX', arr.map(val => {return val.rq}))
      this.$set(this.employee, 'data1', arr.map(val => {return val.jyzrs}))
      this.$set(this.employee, 'sjrq', res.data[0].sjrq)
    },
    // 获取产业分类
    async _getCountFrHy() {
      const res = await countFrHy({
        area: this.area
      })
      this.industrySjrq = res.data[0].sjrq
      const obj = res.data[0]
      for(let i in obj) {
        if(i === 'd1cy') {
          this.industry.push({
            name: '第一产业(农业)',
            value: obj[i]
          })
        }
        if(i === 'd2cy') {
          this.industry.push({
            name: '第二产业(工业)',
            value: obj[i]
          })
        }
        if(i === 'd3cy') {
          this.industry.push({
            name: '第三产业(服务业)',
            value: obj[i]
          })
        }
      }
    },
    // 获取企业状态
    // async _getQyztDistribute() {
    //   const res = await qyztDistribute({
    //     area: this.area
    //   })
    //   const list1 = []
    //   const list2 = []
    //   for(let i in res.data[0]) {
    //     let j = ''
    //     switch (i) {
    //       case 'zyqys': j = '在业';
    //       break;
    //       case 'dxqys': j = '吊销';
    //       break;
    //       case 'zxqys': j = '注销';
    //       break;
    //       case 'hyqys': j = '活跃';
    //       break;
    //       case 'jsqys': j = '僵尸';
    //       break;
    //     }
    //     if((j === '在业' || j === '吊销' || j === '注销')) {
    //       list1.push({
    //         name: j,
    //         value: res.data[0][i]
    //       })
    //     }else if(Number(res.data[0][i]) !== Number(0)) {
    //       list2.push({
    //         name: j,
    //         value: res.data[0][i]
    //       })
    //     }
    //     this.$set(this.status, 'list1', list1)
    //     this.$set(this.status, 'list2', list2)
    //     this.$set(this.status, 'sjrq', res.data[0].sjrq)
    //   }
    // },
    // 切换地图
    handleSelectArea (area) {
      this.area = area
      this._getLastEnterprise()
      this._getQylxDistribute()
      this._getEmployeesPerMonth()
      // this._getQyztDistribute()
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
