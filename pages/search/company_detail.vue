<template>
  <div
    id="detail"
    class="detail"
  >
    <!-- basicInfo -->
    <Card
      v-for="(item, index1) of basic['PC_ENTITY_DETAIL']"
      :key="index1 + 100"
      style="margin-top:0"
      :list="item ? item.list : []"
      :card-title="item ? item.title : ''"
      flag-color="#40A9FE"
    />
    <Table
      v-for="(item, index2) of basic['PC_ENTITY_DETAIL_TABLE']"
      :key="index2 + 200"
      :list="item ? item.list : []"
      :show-link="true"
      :card-title="item ? item.title : ''"
    />
    <Timeline
      v-for="(item, index3) of basic['PC_ENTITY_DETAIL_LIST']"
      :key="index3 + 300"
      :card-title="item ? item.title : ''"
      :list="item ? item.list : []"
    />
    <!-- 机构图 -->
    <div class="org-ouuter">
      <div class="org-inner">
        <div id="chart-container1" />
        <div id="chart-container2" />
        <!-- <organization-chart
          v-if="datasource.title"
          ref="chart"
          :datasource="datasource"
          direction="l2r"
          @node-click="handleOrgClick"
        /> -->
      </div>
    </div>
    <!-- tab标签 -->
    <el-tabs ref="tabs" v-model="activeName" class="tabs" @tab-click="handleTabClick">
      <el-tab-pane
        v-for="(ite, ind) of subQuery"
        :key="ind"
        :label="ite.title"
        :name="ite.title"
      >
        <Card
          v-for="(item, index1) of list['PC_ENTITY_DETAIL']"
          :key="index1 + 100"
          :list="item ? item.list : []"
          :card-title="item ? item.title : ''"
          flag-color="#40A9FE"
        />
        <!-- <License
          v-for="(item, index1) of list['CERTIFICATE']"
          :key="index1 + 600"
          :list="item.list"
          :checked="item.checked"
          :index="index1"
          :card-title="item.title"
          flag-color="#40A9FE"
        /> -->
        <Table
          v-for="(item, index2) of list['PC_ENTITY_DETAIL_TABLE']"
          :key="index2 + 200"
          :list="item ? item.list : []"
          :card-title="item ? item.title : ''"
          :show-link="true"
        />
        <Timeline
          v-for="(item, index3) of list['PC_ENTITY_DETAIL_LIST']"
          :key="index3 + 300"
          :card-title="item ? item.title : ''"
          :list="item ? item.list : []"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import OrganizationChart from 'vue-organization-chart'
// import 'vue-organization-chart/dist/orgchart.css'

/*eslint-disable*/
import { mapMutations } from 'vuex'
import { setStorage } from '@/common/storage'
import Card from '@/components/detail/card'
import Table from '@/components/detail/table'
// import License from '@/components/detail/license'
import Timeline from '@/components/detail/timeline'
import { catelogList, detail } from '@/api/search'
import { getStorage } from '@/common/storage'
import { DATA, TABLE, LIST, IMAGE, APP_NT_ENTERPRISE, APP_NT_PERSON } from '@/common/config'
import asyncData from '@/common/mixin'
export default {
  components: {
    Card,
    Table,
    // License,
    Timeline
    // OrganizationChart
  },
  mixins: [asyncData],
  data () {
    return {
      index: 0,
      subQuery: [],
      list: {
        [DATA]: [],
        [TABLE]: [],
        [LIST]: [],
        [IMAGE]: []
      },
      basic: {
        [DATA]: [],
        [TABLE]: [],
        [LIST]: [],
        [IMAGE]: []
      },
      list2: [],
      activeName: '',
      companyName: '',
      datasource1: {},
      datasource2: {}
    }
  },
  computed: {
    IMAGE() {
      return IMAGE
    }
  },
  watch: {
    'datasource1.title': {
      handler () {
        this.$nextTick(() => {
          this.handleOrgClick(this.subQuery[0], true)
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
    // 点击切换菜单
    handleTabClick (tab) {
      this.handleOrgClick(this.subQuery[tab.index])
    },
    // 点击机构图
    handleOrgClick (item, isFirst) {
      if (typeof item.checked !== 'undefined') {
        const chartDOM = document.querySelector('.org-inner')
        const contents = chartDOM.querySelectorAll('.title')
        for (let j = 0; j < contents.length; j++) {
          contents[j].classList.remove('active')
          if (contents[j].textContent === item.title && Number(contents[j].parentNode.id) === Number(item.id)) {
            contents[j].classList.add('active')
          }
        }
        this.list = {
          [DATA]: [],
          [TABLE]: [],
          [LIST]: [],
          [IMAGE]: []
        }
        this.activeName = item.title
        if (item.subQuery.length <= 0) {
          this.$message({
            message: '没有查询到相关信息',
            type: 'warning'
          })
          return
        }
        item.subQuery.forEach(async (val, index) => {
          await this.load(val.id, val.queryType, false, index, isFirst)
        })
      }
    },
    // 获取tab的top值，并滚动
    getTabTop() {
      const tab = this.$refs.tabs.$el
      const t = tab.offsetTop + 46
      window.scroll({
        top: t
      })
    },
    // 绘制机构图
    drawOrgChart() {
      const orgChart1 = $('#chart-container1').orgchart({
        data: this.datasource1,
        nodeTitle: 'title',
        direction: 'r2l',
        // verticalLevel: 3,
        visibleLevel: 3,
        nodeId: 'id',
      })
      orgChart1.$chart.find('.node').on('click', (e) => {
        this.getOrgChartItem(e)
        this.getTabTop()
      })
      const orgChart2 = $('#chart-container1').orgchart({
        data: this.datasource2,
        nodeTitle: 'title',
        direction: 'l2r',
        visibleLevel: 3,
        // verticalLevel: 3,
        nodeId: 'id',
      })
      // 动态获取orgchart高度
      this.$nextTick(() => {
        let r2l = document.querySelector('.r2l')
        let l2r = document.querySelector('.l2r')
        let inner = document.querySelector('.org-inner')
        let r2lWidth = r2l.offsetWidth
        let l2rWidth = l2r.offsetWidth
        if(r2lWidth > l2rWidth) {
          l2r.style.width = r2lWidth + 'px'
          inner.style.height = r2lWidth + 'px'
        }else {
          r2l.style.width = l2rWidth + 'px'
          inner.style.height = l2rWidth + 'px'
        }
      })
      orgChart2.$chart.find('.node').on('click', (e) => {
        this.getOrgChartItem(e)
        this.getTabTop()
      })
    },
    // 获取机构点击的内容
    getOrgChartItem(e) {
      if(e.target.id === 'entityTitle') { // 点击标题跳转图谱
        this.switchIdentity(4)
        this.$router.push('/data/enterprise2?entityId=' + this.$route.query.entityId + '&name=' + e.target.innerText)
      }
      const id = e.currentTarget.id
      const [item] = this.subQuery.filter(val => {
        return Number(val.id) === Number(id)
      })
      this.handleOrgClick(item || {})
    },
    // 上拉加载
    async load (id, queryType, isBasic = false, index = null, isFirst=false) {
      const res = await detail({
        data: {
          id,
          queryType,
          entityId: this.$route.query.entityId
        }
      })
      const displayType = res.data.displayType
      let target
      if (isBasic) {
        this.datasource1 = {
          id: 0,
          title: '',
          children: this.jsonLoop(this.subQuery.filter((val, index) => {
            return index < Math.ceil(this.subQuery.length / 2)
          }))
        }
        this.datasource2 = {
          id: 0,
          title: `<span id="entityTitle">${res.data.data[res.data.data.length - 1].name || '法人画像'}</span>`,
          children: this.jsonLoop(this.jsonLoop(this.subQuery.filter((val, index) => {
            return index >= Math.ceil((this.subQuery.length) / 2)
          })))
        }
        this.drawOrgChart()
        target = this.basic
      } else {
        target = this.list
      }
      const length = index !== null ? index : target[displayType].length
      this.$set(target[displayType], length, {})
      this.$set(target[displayType][length], 'title', res.data.title)
      this.$set(
        target[displayType][length],
        'list',
        res.data.data || res.data.subQuery || []
      )
      if(!isBasic && !isFirst) {
        this.$nextTick(() => {
          this.getTabTop()
        })
      }
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
      arr.forEach((val) => { // 首先获取基本信息
        if (val.displayType === 'PC_ENTITY_BASIC_INFO') {
          val.subQuery.forEach((v) => {
            this.load(v.id, v.queryType, true)
          })
        } else {
          this.subQuery.push(val)
          this.subQuery.forEach((v) => {
            this.$set(v, 'checked', false)
          })
          this.activeName = this.subQuery[0].title
        }
      })
    },
    // 格式化datasource需要的json格式
    jsonLoop (arr, index) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].children = arr[i].subQuery
        this.jsonLoop(arr[i].subQuery)
      }
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  position: relative;
  .org-ouuter {
    position: relative;
    margin-top: 20px;
    &:after, &:before {
      position: absolute;
      content: '';
      width: 7px;
      height: 7px;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      z-index: 1;
    }
    &:after {
      top: 0;
      left: 0;
      border-top-color: #1F65EB;
      border-left-color: #1F65EB;
    }
    &:before {
      top: 0;
      right: 0;
      border-top-color: #1F65EB;
      border-right-color: #1F65EB;
    }
  }
  .org-inner {
    position: relative;
    // min-height: 1000px;
    background: #0F1740;
    &:after, &:before {
      position: absolute;
      content: '';
      width: 7px;
      height: 7px;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      z-index: 1;
    }
    &:after {
      bottom: 0;
      left: 0;
      border-bottom-color: #1F65EB;
      border-left-color: #1F65EB;
    }
    &:before {
      bottom: 0;
      right: 0;
      border-bottom-color: #1F65EB;
      border-right-color: #1F65EB;
    }
  }
}
.org-inner {
  position: relative;
  min-height: 400px;
  text-align: center;
  /deep/ .orgchart.r2l {
    position: absolute;
    // top: 50px;
    left: 693px;
    // width: 482px;
    // height: 382px;
    // overflow: auto;
    background: none;
  }
  /deep/ .orgchart.l2r {
    position: absolute;
    // top: 50px;
    left: 467px;
    // width: 382px;
    // height: 382px;
    // overflow: auto;
    background: none;
  }
  /deep/ .node:hover {
    background: none;
    i, .title .symbol::after {
      display: none;
    }
  }
  /deep/ .orgchart .node.focused {
    background: none;
  }
  /deep/ .orgchart .node .title .symbol::after, /deep/ .orgchart .node .title .symbol::before, /deep/ .oci {
    display: none;
  }
}
/deep/ .orgchart > table:first-child > tr:first-child > td:first-child .title {
  background: #042FCA;
}
#detail /deep/ .orgchart .title {
  width: 150px;
  border-radius: 2px;
  height: 25px;
  background: #1F65EB;
  line-height: 22px;
  font-size: 14px;
  font-weight: normal;
  color: #fff;
  cursor: pointer;
  &.active {
    background: #2BBB91;
  }
}

/deep/ [class$="Line"] {
  border-color: #323E7D !important;
  border-width: 1px !important;
}
/deep/ .downLine {
  width: 1px !important;
  background: #323E7D !important;
}

.tabs {
  margin-top: 20px;
  // min-height: 600px;
  color: #fff !important;
  /deep/.el-tabs__item {
    color: #C2C3C8;
    font-size: 15px;
  }
  /deep/ .el-tabs__header {
    margin: 0;
  }
  /deep/.el-tabs__item.is-active {
    font-weight: bold;
    color: #1F65EB;
  }
  /deep/ .el-tabs__active-bar {
    height: 4px;
    background-color: #1F65EB;
  }
  /deep/ .el-tabs__nav-wrap::after {
    height: 1px;
    background: #1F65EB;
  }
}
</style>
