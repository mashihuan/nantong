<template>
  <div class="content">
    <my-header class="my-header" :title="title" color="#2BBB91" />
    <operation-count :nums="statuNums" />
    <operation-select
      :list-fr-hy="listFrHy"
      :list-fr-dq="listFrDq"
      @handleSelectClick="handleSelectClick"
    />
    <operation-bar
      :title="title"
      :data-x="status.dataX"
      :data1="status.data1"
      :data2="status.data2"
      :data3="status.data3"
      :data4="status.data4"
      :color="[ '#35CFC9', '#40A9FE','#4D73F4', '#1956D4']"
      unit="家"
    />
    <!-- 213 -->
  </div>
</template>

<script>
import myHeader from '@/components/data/header'
import OperationCount from '@/components/data/operationCount'
import OperationSelect from '@/components/data/operationSelect'
// import operationBar from '@/components/data/operationBar'
import operationBar from '@/components/data/operationLine'
// import operationBar from '@/components/dashboard/countBar'

import {
  countFrZtCurYear,
  listFrHy,
  listFrDq,
  countFrHyzt,
  countFrDqzt
} from '@/api/enterprise'

import asyncData from '@/common/mixin'
export default {
  components: {
    myHeader,
    OperationCount,
    OperationSelect,
    operationBar
  },
  mixins: [asyncData],
  data () {
    return {
      statuNums: [],
      listFrHy: [],
      listFrDq: [],
      status: {
        dataX: [],
        data1: [],
        data2: [],
        data3: [],
        data4: []
      },
      title: '企业存续'
    }
  },
  mounted () {
    this._getCountFrZtCurYear()
    this._getListFrHy()
    this._getListFrDq()
    this.getCountFrDqzt('南通市')
  },
  methods: {
    // 获取企业状况
    async _getCountFrZtCurYear () {
      const res = await countFrZtCurYear({})
      const obj = res.data[0]
      for (const i in obj) {
        if (i === 'zyqys') {
          this.$set(this.statuNums, 0, obj[i])
        }
        if (i === 'zxqys') {
          this.$set(this.statuNums, 1, obj[i])
        }
        if (i === 'dxqys') {
          this.$set(this.statuNums, 2, obj[i])
        }
        if (i === 'xzqys') {
          this.$set(this.statuNums, 3, obj[i])
        }
      }
    },
    // 获取行业列表
    async _getListFrHy () {
      const res = await listFrHy({})
      this.listFrHy = res.data
    },
    // 获取地区列表
    async _getListFrDq () {
      const res = await listFrDq({})
      this.listFrDq = res.data
    },
    // 按行业获取企业柱状图数据
    async getCountFrHyzt (item) {
      const res = await countFrHyzt({
        hy: item
      })
      this.status.dataX = res.data.map((val) => {
        return val.tjsj
      })
      this.status.data1 = res.data.map((val) => {
        return val.zyqys
      })
      this.status.data2 = res.data.map((val) => {
        return val.zxqys
      })
      this.status.data3 = res.data.map((val) => {
        return val.dxqys
      })
      this.status.data4 = res.data.map((val) => {
        return val.xzqys
      })
    },
    // 按地区获取企业柱状图数据
    async getCountFrDqzt (item) {
      const res = await countFrDqzt({
        dq: item
      })
      this.status.dataX = res.data.map((val) => {
        return val.tjsj
      })
      this.status.data1 = res.data.map((val) => {
        return val.zyqys
      })
      this.status.data2 = res.data.map((val) => {
        return val.zxqys
      })
      this.status.data3 = res.data.map((val) => {
        return val.dxqys
      })
    },
    // 点击获取数据
    handleSelectClick (item, index) {
      if (Number(index) === 0) {
        this.getCountFrDqzt('南通市')
      }
      if (Number(index) === 1) {
        this.getCountFrHyzt(item)
      }
      if (Number(index) === 2) {
        this.getCountFrDqzt(item)
      }
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
