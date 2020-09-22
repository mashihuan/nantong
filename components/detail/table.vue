<template>
  <card-temp :show-title="showTitle" :card-title="cardTitle" flag-color="#FFC53D">
    <div>
      <p v-if="list.length <= 0" style="line-height: 30px;">
        没有查到相关信息
      </p>
      <el-table
        v-else
        :data="tableData"
        type="index"
        style="width: 100%"
        :class="{titleClass: !showTitle}"
      >
        <el-table-column
          v-if="showIndex"
          type="index"
          :index="indexMethod"
        />
        <template v-for="(item, index) of tableHead">
          <el-table-column
            v-if="!item.link"
            :key="index"
            :prop="item.props"
            :label="item.label"
          />
          <el-table-column
            v-else
            :key="index"
            :prop="item.props"
            :label="item.label"
          >
            <template slot-scope="scope">
              <span :style="{cursor: item.link ? 'pointer':''}" @click="handleLink(item.link)">
                {{ scope.row['_'+index] }}
                <img v-if="item.link" class="link" src="@/assets/img/link.png" alt="">
              </span>
            </template>
          </el-table-column>
        </template>
        <el-table-column v-if="showIndex">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              @click="handleClick(scope)"
            >
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </card-temp>
</template>

<script>
import { mapMutations } from 'vuex'
import cardTemp from './template'
import { setStorage } from '@/common/storage'

export default {
  components: {
    cardTemp
  },
  props: {
    cardTitle: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default () {
        return []
      }
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    showLink: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    tableData () {
      const arr = []
      this.list.forEach((item) => {
        const tempArr = item.map((val, index) => {
          return { ['_' + index]: val.value }
        })
        let json = {}
        tempArr.forEach((val) => {
          json = Object.assign(json, val)
        })
        arr.push(json)
      })
      return arr
    },
    tableHead () {
      let arr = []
      this.list[0] && this.list[0].forEach((val, index) => {
        arr.push({ label: val.label, props: `_${index}`, value: val.value, link: val.link })
      })
      arr = arr.filter((val) => {
        return val.label !== '数据日期' && val.label
      })
      return arr
    }
  },
  methods: {
    ...mapMutations('user', ['switchIdentity']),
    // 跳转
    async handleLink (link) {
      if (!link) {
        return
      }
      let index = null
      if (link.includes('person')) {
        index = 1
      } else {
        index = 2
      }
      await setStorage('index', index)
      this.switchIdentity(index)
      this.$router.push(link)
    },
    // 查看详情
    handleClick (scope) {
      this.$emit('handleClick', scope)
    },
    // 表格索引
    indexMethod (index) {
      if (index < 9) {
        return '0' + (index + 1)
      } else {
        return index + 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  width: 18px;
  margin-top: -1px;
  margin-left: 10px;
}
.el-table {
  font-size: 12px;
  color: #fff;
}
/deep/ .el-table td, /deep/ .el-table th {
  padding: 8px 0;
}
 /deep/ .el-table th {
   background: #1A2457;
  //  color: #3C4058;
   color: #fff;
 }
 /deep/ .el-table__row:nth-child(odd) {
   background: #0F1740;
 }
 /deep/ .el-table__row:nth-child(even) {
   background: #1A2457;
 }
 /deep/ .is-leaf, /deep/ .el-table td {
   border: none !important;
 }

/deep/.el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color: inherit !important;
}
.titleClass {
  height: 4.625rem;
  overflow-y: auto;
}

</style>
