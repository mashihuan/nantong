<template>
  <div class="panel">
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <search-bar class="input" />
      </el-col>
    </el-row>
    <Table
      :list="list"
      :show-index="true"
      :card-title="title"
      @handleClick="handleClick"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBar from '@/components/detail/searchBar'
import Table from '@/components/detail/table'
import { getStorage } from '@/common/storage'

import { searchList } from '@/api/search'
import asyncData from '@/common/mixin'

export default {
  components: {
    SearchBar,
    Table
  },
  mixins: [asyncData],
  data () {
    return {
      keyword: '',
      queryType: '',
      id: '',
      list: [],
      index: null,
      title: ''
    }
  },
  computed: {
    ...mapState('user', ['identity'])
  },
  watch: {
    async identity () {
      this.index = await getStorage('index')
      if (Number(this.index) === 1 || Number(this.index) === 2) {
        this._getRandomList()
      }
    }
  },
  async mounted () {
    this.index = await getStorage('index')
    this._getRandomList()
  },
  methods: {
    // 获取列表
    async _getRandomList () {
      let id
      if (Number(this.index) === 1) {
        id = 241
        this.title = '新增人口信息'
      }
      if (Number(this.index) === 2) {
        id = 242
        this.title = '新增企业信息'
      }
      const res = await searchList({
        data: {
          id,
          queryType: 'METHOD'
        }
      })
      const arr = res.data.data || []
      const tempArr = []
      arr.forEach((val, index) => {
        val.forEach((v, i) => {
          if ((v.label === '姓名' || v.label === '企业名称') && v.value) {
            tempArr.push(val)
          }
        })
      })

      this.title = res.data.title
      this.list = tempArr
    },
    // 点击查看详情
    handleClick (scope) {
      const index = scope.$index
      const currentArr = this.list[index]
      const entityId = currentArr[currentArr.length - 1].entityId
      if (Number(this.index) === 1) {
        this.$router.push(`/search/person_detail?entityId=${entityId}`)
      }
      if (Number(this.index) === 2) {
        this.$router.push(`/search/company_detail?entityId=${entityId}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.panel {
  min-height: 800px;
  background: url('/bg/map-bg.png') top center no-repeat;
  background-size: 8.45rem 7.05rem;
  .input {
    margin-top: 56px;
    margin-bottom: 50px;
  }
}
::-webkit-scrollbar-track-piece {
  background-color: rgba(249, 250, 254, 1);
  -webkit-border-radius: 0;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb {
  height: 50px;
  background-color: #b8b8b8;
  -webkit-border-radius: 6px;
  outline: 2px solid #fff;
  outline-offset: -2px;
  border: 2px solid #fff;
  filter: alpha(opacity = 50);
  -moz-opacity: 0.5;
  -khtml-opacity: 0.5;
  opacity: 0.5;
}
::-webkit-scrollbar-thumb:hover {
  height: 50px;
  background-color: #878987;
  -webkit-border-radius: 6px;
}
</style>
