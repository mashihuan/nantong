<template>
  <div
    ref="content"
    class="detail"
  >
    <div class="person-bg">
      <organization-chart
        v-if="datasource.show"
        ref="chart"
        :datasource="datasource"
        @node-click="handleOrgClick"
      >
        <template slot-scope="{nodeData}">
          <img v-if="!nodeData.title" src="/bg/person_graph.png" class="person-graph" alt="">
          <div v-else class="icon-wrap" :title="nodeData.title">
            <img :src="nodeData.iconId ? (uploadUrl+ nodeData.iconId) : require('@/assets/img/person_basic.png')" class="person-icon" alt="">
          </div>
          <p class="person-title">
            {{ nodeData.title }}
          </p>
        </template>
      </organization-chart>
    </div>
    <div class="wrapper">
      <template v-for="(item, index1) of list2">
        <template v-if="item&&item.displayType">
          <Card
            v-if="item.displayType == [DATA]"
            :key="index1 + 100"
            :list="item.list"
            :checked="item.checked"
            :index="index1"
            :card-title="item.title"
            :is-person="isPerson"
            flag-color="#40A9FE"
            @getStudentInfo="getStudentInfo"
            @handleCheckMore="handleCheckMore"
          />
          <!-- <License
            v-if="item.displayType == [IMAGE]"
            :key="index1 + 600"
            :list="item.list"
            :checked="item.checked"
            :index="index1"
            :card-title="item.title"
            :is-person="isPerson"
            flag-color="#40A9FE"
          /> -->
          <template v-if="item.displayType == [TABLE]">
            <Table
              :key="index1 + 200"
              :list="item.list"
              :show-link="true"
              :card-title="item.title"
            />
            <el-pagination
              :key="index1 + 300"
              :current-page="item.page"
              :page-size="per_page"
              layout="total, prev, pager, next"
              :total="item.total"
              :hide-on-single-page="true"
              @current-change="handleCurrentChange(item, index1, $event)"
            />
          </template>

          <template v-if="item.displayType == [LIST]">
            <Timeline
              :key="index1 + 400"
              :card-title="item.title"
              :list="item.list"
            />
            <el-pagination
              :key="index1 + 500"
              :current-page="item.page"
              :page-size="per_page"
              layout="total, prev, pager, next"
              :total="item.total"
              :hide-on-single-page="true"
              @current-change="handleCurrentChange(item, index1, $event)"
            />
          </template>
        </template>
      </template>
      <!-- 学生信息弹窗 -->
      <div v-if="showInfo" ref="info" class="info">
        <img class="close" src="@/assets/img/close.png" alt="" @click="handleClickInfo">
        <div class="info-inner">
          <Card
            :list="studentInfoList"
            card-title="学生信息"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'

import Card from '@/components/detail/card'
import Table from '@/components/detail/table'
// import License from '@/components/detail/license'
import Timeline from '@/components/detail/timeline'
import { catelogList, detail } from '@/api/search'
import { setStorage } from '@/common/storage'
import { DATA, TABLE, LIST, IMAGE, APP_NT_ENTERPRISE, APP_NT_PERSON } from '@/common/config'
import asyncData from '@/common/mixin'
export default {
  components: {
    Card,
    Table,
    // License,
    Timeline,
    OrganizationChart
  },
  mixins: [asyncData],
  data () {
    return {
      index: 0,
      page: 1,
      per_page: 10,
      datasource: {},
      subQuery: [],
      list: {
        [DATA]: [],
        [TABLE]: [],
        [LIST]: [],
        [IMAGE]: []
      },
      list2: [],
      isPerson: false,
      showInfo: false,
      studentInfoList: [],
      currentList: [] // 点击的id列表
    }
  },
  computed: {
    uploadUrl () {
      return process.env.uploadUrl
    },
    DATA () {
      return DATA
    },
    TABLE () {
      return TABLE
    },
    LIST () {
      return LIST
    },
    IMAGE () {
      return IMAGE
    }
  },
  watch: {
    'datasource.show': {
      handler () {
        this.$nextTick(() => {
          this.handleOrgClick(this.subQuery[0])
        })
      },
      deep: true
    }
  },
  async mounted () {
    this.index = this.$route.path.includes('person') ? 1 : 2
    await setStorage('index', this.index)
    this.switchIdentity(this.index)
    this.getCatelogList()
  },
  methods: {
    ...mapMutations('user', ['switchIdentity']),
    // 显示更多
    handleCheckMore (index) {
      if (typeof this.list2[index].checked === 'undefined') {
        this.$set(this.list2[index], 'checked', true)
      } else {
        this.$set(this.list2[index], 'checked', !this.list2[index].checked)
      }
    },
    // 点击分页
    handleCurrentChange (item, index, page) {
      item.page = page
      this.load(item, null, null, index)
    },
    // 点击切换
    handleOrgClick (item) {
      if (item.checked) {
        this.currentList = []
        const chartDOM = this.$refs.chart.$el
        const contents = chartDOM.querySelectorAll('.icon-wrap')
        for (let j = 0; j < contents.length; j++) {
          const title = contents[j].title
          contents[j].classList.remove('active')
          if (title === item.title) {
            contents[j].classList.add('active')
          }
        }
        this.list = {
          [DATA]: [],
          [TABLE]: [],
          [LIST]: []
        }
        this.list2 = []
        if (item.subQuery && item.subQuery.length <= 0) {
          this.$message({
            message: '没有查询到相关信息',
            type: 'warning'
          })
          return
        }
        // if (Number(item.index) === 0) { // 基础信息展示全部内容
        //   this.isShowMore = true
        //   this.isMore = false
        //   const tempArr = []
        //   this.subQuery.forEach((val, index) => {
        //     if (val.subQuery && val.subQuery.length <= 0) {

        //     } else {
        //       val.subQuery.forEach((v, i) => {
        //         tempArr.push(v)
        //       })
        //     }
        //   })
        //   tempArr.forEach((val, index) => {
        //     this.load(val, index, item.index)
        //   })
        //   return
        // } else {
        //   this.isShowMore = false
        //   this.isMore = true
        // }
        item.subQuery.forEach((val, index) => {
          this.currentList.push(val.id)
          this.load(val, index, item.index)
        })
      }
    },
    // 获取详情
    async load (item, order = null, index, listIndex) {
      const res = await detail({
        data: {
          id: item.id,
          queryType: item.queryType,
          entityId: this.$route.query.entityId || ''
        },
        page: item.page || 1,
        per_page: this.per_page
      })

      // if (Number(index) !== 0) {
      //   this.list2 = []
      // }
      // const length = this.list2.length
      const length = order
      if (listIndex !== undefined) {
        // listIndex = listIndex - 1
        this.$set(this.list2, listIndex, {})
        this.$set(this.list2[listIndex], 'title', res.data.title)
        this.$set(this.list2[listIndex], 'displayType', res.data.displayType)
        this.$set(this.list2[listIndex], 'id', item.id)
        this.$set(this.list2[listIndex], 'queryType', item.queryType)
        this.$set(this.list2[listIndex], 'page', item.page)
        this.$set(this.list2[listIndex], 'total', res.request.limit)
        this.$set(
          this.list2[listIndex],
          'list',
          res.data.data || res.data.subQuery || []
        )
      } else {
        this.$set(this.list2, length, {})
        this.$set(this.list2[length], 'title', res.data.title)
        this.$set(this.list2[length], 'displayType', res.data.displayType)
        this.$set(this.list2[length], 'id', item.id)
        this.$set(this.list2[length], 'queryType', item.queryType)
        this.$set(this.list2[length], 'page', item.page)
        this.$set(this.list2[length], 'total', res.request.limit)
        this.$set(
          this.list2[length],
          'list',
          res.data.data || res.data.subQuery || []
        )
      }

      if (index === 0) {
        this.isPerson = true
      } else {
        this.isPerson = false
      }
      // const displayType = res.data.displayType
      // if (Number(index) !== 0) {
      //   this.list[displayType] = []
      // }
      // const length = this.list[displayType].length
      // this.$set(this.list[displayType], length, {})
      // this.$set(this.list[displayType][length], 'title', res.data.title)
      // this.$set(this.list[displayType][length], 'id', item.id)
      // this.$set(this.list[displayType][length], 'queryType', item.queryType)
      // this.$set(this.list[displayType][length], 'page', item.page)
      // this.$set(this.list[displayType][length], 'total', res.request.limit)
      // this.$set(
      //   this.list[displayType][length],
      //   'list',
      //   res.data.data || res.data.subQuery || []
      // )
    },
    // 获取类目信息
    async getCatelogList () {
      let type
      if (Number(this.index) === 1) {
        type = APP_NT_PERSON
      }
      if (Number(this.index) === 2) {
        type = APP_NT_ENTERPRISE
      }
      const res = await catelogList({
        data: {
          type
        }
      })
      const arr = res.data[0].subQuery
      arr.forEach((val, index) => {
        val.checked = true
        val.index = index
        val.subQuery.forEach((v, i) => {
          if (v.paging) {
            v.page = this.page
            v.per_page = this.per_page
          }
        })
      })
      this.subQuery = arr
      this.datasource = {
        id: '',
        title: '',
        show: true,
        children: arr
      }
    },
    // 获取学生信息
    async getStudentInfo () {
      this.showInfo = true
      const res = await detail({
        data: {
          id: 258,
          queryType: 'METHOD',
          entityId: this.$route.query.entityId || ''
        }
      })
      this.studentInfoList = res.data.data || []
    },
    // 关闭学生信息
    handleClickInfo () {
      this.showInfo = false
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  // min-height: 800px;
  background: url('/bg/map-bg.png') top center no-repeat;
  background-size: 8.45rem 7.05rem;
  .person-bg {
    display: flex;
    // align-items: center;
    justify-content: center;
    // height: 6.05rem;
    color: #fff;
    // background: url('~@/assets/img/map-bg.png') top center no-repeat;
    // background-size: 8.45rem 7.05rem;
  }
}
.person-graph {
  width: 1.875rem;
  height: 1.875rem;
}
.icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.05rem;
  height: 1.05rem;
  margin-bottom: .125rem;
  background: #0D255C;
  border-radius: 50%;
  border: 1px solid #1950BD;
  &.active {
    background: #2BBB91;
    border-color: #2BBB91;
  }
}
.person-icon {
  width: .575rem;
  height: .575rem;
}
.person-title {
  font-size: 14px;
  color: #B1E5FB;
}
.el-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 7px;
  color: #fff !important;
  /deep/.el-pagination__total {
    color: #fff !important;
  }
  /deep/ button {
    background: transparent;
    color: #fff;
  }
  /deep/ .el-pager li {
    background: transparent;
  }
  /deep/ .more {
    color: #fff;
  }
}

/deep/ .orgchart-container {
  width: 100%;
  height: auto;
  border: none;
  background: transparent;
}
/deep/ .orgchart {
  padding: 0;
  background: none;
}
/deep/ .orgchart .node {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: auto;
  margin: 0 15px;
  border: none;
  cursor: pointer;
}
/deep/ .orgchart .node:hover {
  background: none;
}
/deep/ .orgchart .title {
  display: none;
}
/deep/ .orgchart > table > tbody tr:first-child .content {
  background: #1F65EB;
  &.active {
    background: #2BBB91;
  }
}
/deep/ .orgchart .content {
  border-radius: 2px;
  border: 0;
  height: 23px;
  padding: 0 30px;
  line-height: 23px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}
/deep/ [class$="Line"] {
  border-color: #323E7D !important;
  border-width: 1px !important;
}
/deep/ .downLine {
  width: 1px !important;
  background: #323E7D !important;
}
/deep/ .orgchart>table:first-child {
  margin-top: 0;
  margin-bottom: 0;
}
.checkMore {
  margin: 10px 0;
  text-align: right;
  color: #00F3BA;
  font-size: 14px;
  cursor: pointer;
  span {
    display: inline-block;
    padding: 3px 10px;
    border: 1px solid #00F3BA;
    border-radius: 5px;
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
