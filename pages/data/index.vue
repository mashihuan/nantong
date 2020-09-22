<template>
  <div class="wrap">
    <!-- 统计总数 -->
    <div class="total-num">
      <div class="icon-wrap">
        <img class="icon" src="@/assets/img/data.png" alt="icon">
      </div>
      <span class="title">{{ title }}</span>
      <span class="num">{{ total }}</span>
    </div>
    <div class="panel">
      <!-- 检索结果 -->
      <Card
        v-for="(item, index) of list"
        :key="index"
        :list="item.list"
        :checked="item.checked"
        :index="index"
        :card-title="item.name || '姓名'"
        :is-data="true"
        @handleCheckMore="handleCheckMore"
      />
      <!-- 分页 -->
      <el-row v-if="total > per_page" class="pagination">
        <el-pagination
          background
          :current-page="page"
          :page-size="10"
          :pager-count="5"
          next-text="下一页"
          layout="total, pager, next"
          :total="total"
          hide-on-single-page
          @current-change="handleCurrentChange"
        />
      </el-row>
    </div>
  </div>
</template>

<script>
import Card from '@/components/detail/card'
import { searchList } from '@/api/search'
import asyncData from '@/common/mixin'
export default {
  components: {
    Card
  },
  mixins: [asyncData],
  data () {
    return {
      id: '',
      queryType: '',
      title: '',
      list: [],
      page: 1,
      per_page: 10,
      total: 0
    }
  },
  watch: {
    '$route' () {
      this.getDateList()
    }
  },
  mounted () {
    this.getDateList()
  },
  methods: {
    // 获取数据列表
    async getDateList () {
      const res = await searchList({
        data: {
          id: 235,
          queryType: 'method'
        },
        page: this.page,
        per_page: this.per_page
      })
      this.total = res.request.limit
      this.list = res.data.data || []
      this.list = this.list.map((val, index) => {
        const name = val[val.length - 1].name
        return {
          list: val,
          checked: false,
          name
        }
      })
      this.title = res.data.title
    },
    // 翻页
    handleCurrentChange (page) {
      this.page = page
      this.getDateList()
    },
    handleCheckMore (index) {
      if (typeof this.list[index].checked === 'undefined') {
        this.$set(this.list[index], 'checked', false)
      } else {
        this.$set(this.list[index], 'checked', !this.list[index].checked)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100%;
  .total-num {
    display: flex;
    align-items: center;
    padding: 14px 20px;
    border-left: 2px solid #4D73F4;
    background: #111842;
    .icon-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #4D73F4;
      .icon {
        width: 20px;
        height: 20px;
      }
    }
    span {
      margin-left: 20px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      letter-spacing: 2px;
    }
  }
  .panel {
    min-height: 390px;
    min-height: calc(100% - 100px);
  }
}
.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  margin-top: 40px;
}
/deep/ .el-pagination__total {
  color: #fff;
}
</style>
