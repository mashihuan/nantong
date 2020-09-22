<template>
  <div v-loading="loading" class="panel">
    <el-row>
      <el-col :span="12">
        <!-- 搜索框 -->
        <search-bar @handleCheckList="handleCheckList" />
      </el-col>
    </el-row>
    <p v-if="isEmpty" class="empty">
      没有查到相关信息
    </p>
    <!-- 检索结果 -->
    <Card v-for="(item, index) of list" :key="index" class="card" :list="item" @handleCheckDetail="handleCheckDetail" />
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
</template>

<script>
import SearchBar from '@/components/detail/searchBar'
import Card from '@/components/detail/card'
import { searchList } from '@/api/search'
import { getStorage } from '@/common/storage'
import asyncData from '@/common/mixin'

export default {
  components: {
    Card,
    SearchBar
  },
  mixins: [asyncData],
  data () {
    return {
      id: '',
      keyword: '',
      queryType: '',
      title: '',
      list: [],
      page: 1,
      per_page: 10,
      total: 0,
      isEmpty: false,
      loading: true
    }
  },
  async mounted () {
    const json = JSON.parse(await getStorage('search'))
    this.id = json.id
    this.keyword = json.keyword
    this.queryType = json.queryType
    this.getSearchList()
  },
  methods: {
    // 点击查看详情
    async handleCheckDetail (id) {
      if (Number(await getStorage('index')) === 1) {
        this.$router.push('/search/person_detail?entityId=' + id)
      }
      if (Number(await getStorage('index')) === 2) {
        this.$router.push('/search/company_detail?entityId=' + id)
      }
    },
    // 获取自然人/法人列表
    async getSearchList () {
      this.loading = true
      const res = await searchList({
        data: {
          id: Number(this.id),
          keyword: this.keyword,
          queryType: this.queryType
        },
        page: this.page,
        per_page: this.per_page
      })
      this.loading = false
      this.total = res.request.limit
      this.list = res.data.data || []
      this.isEmpty = this.list.length <= 0
    },
    // 搜索点击
    handleCheckList ({ id, keyword, queryType }) {
      this.id = id
      this.keyword = keyword
      this.queryType = queryType
      this.getSearchList()
    },
    // 翻页
    handleCurrentChange (page) {
      this.page = page
      this.getSearchList()
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  margin-top: 20px;
  padding: 20px;
  min-height: 390px;
  min-height: calc(100% - 100px);
  background: #111842;
}
.card {
  cursor: pointer;
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
.empty {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 500px;
  margin-top: 50px;
  color: #fff;
  font-size: 14px;
  img {
    width: 250px;
  }
}
/deep/.el-loading-mask {
  top: 80px;
  background: none;
}
</style>
