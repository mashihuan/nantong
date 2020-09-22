<template>
  <div class="wrapper">
    <div class="search-bar">
      <el-input
        v-model="keyword"
        placeholder="请输入内容"
        style="width: 370px;margin-right:10px;"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      >
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="handleCheckList"
        />
      </el-input>
      <el-button type="primary" style="padding: 12px 35px;letter-spacing: 5px" @click="handleCheckList">
        搜索
      </el-button>
    </div>
    <div v-if="isFocus" class="search-result">
      <span v-if="loading" class="el-icon-loading" />
      <ul>
        <li v-for="item of list" :key="item" @click="handleSelectItem(item)">
          {{ item }}
        </li>
        <li v-if="!loading && list.length <= 0">
          没有匹配项
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { catelogList, getkeywords } from '@/api/search'
import { getStorage, setStorage, removeStorage } from '@/common/storage'
import { APP_NT_ENTERPRISE, APP_NT_PERSON } from '@/common/config'

export default {
  data () {
    return {
      keyword: '',
      index: 0,
      queryType: '',
      id: '',
      isFocus: false,
      loading: false,
      list: [],
      timer: null
    }
  },
  computed: {
    ...mapState('user', ['identity'])
  },
  watch: {
    async identity () {
      if (this.$route.path === '/search') {
        this.list = []
        this.keyword = ''
        await removeStorage('search')
      }
      this.index = await getStorage('index')
      if (Number(this.index) !== 0) {
        this.getCatelogList()
      }
    }
  },
  async mounted () {
    this.index = await getStorage('index')
    if (this.$route.path === '/search/list') {
      const json = JSON.parse(await getStorage('search')) || {}
      const keyword = json.keyword
      keyword && (this.keyword = keyword)
    }
    this.getCatelogList()
  },
  methods: {
    // 获取关键字列表
    async _getKeywords () {
      this.loading = true
      const res = await getkeywords({
        data: {
          id: this.id || (Number(this.index) === 1 ? 178 : 194),
          queryType: this.queryType || (Number(this.index) === 1 ? 'METHOD' : 'METHOD'),
          keyword: this.keyword
        }
      })
      this.loading = false
      this.list = res.data || []
    },
    // 监听输入事件
    handleInput (val) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this._getKeywords()
      }, 300)
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
      let res = await catelogList({
        data: {
          type
        }
      })
      res = res.data[0] || []
      this.queryType = res.majorQuery ? res.majorQuery.queryType : ''
      this.id = res.majorQuery ? res.majorQuery.id : ''
    },
    // 搜索点击
    async handleCheckList () {
      if (!this.keyword) {
        this.$message({
          message: '请输入关键字',
          type: 'warning'
        })
        return
      }
      this.$router.push({
        path: '/search/list'
      })
      const json = {
        id: this.id,
        keyword: this.keyword,
        queryType: this.queryType
      }
      await setStorage('search', JSON.stringify(json))
      if (this.$route.path !== '/search') {
        this.$emit('handleCheckList', {
          id: this.id,
          keyword: this.keyword,
          queryType: this.queryType
        })
      }
    },
    // 选中某一搜索结果
    handleSelectItem (item) {
      this.keyword = item
    },
    // 失去焦点
    handleBlur () {
      setTimeout(() => {
        this.isFocus = false
      }, 300)
    },
    // 聚焦
    handleFocus () {
      this.isFocus = true
      this._getKeywords()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  .search-bar {
    display: flex;
    align-items: center;
  }
  .search-result {
    position: absolute;
    top: 50px;
    width: 480px;
    max-height: 280px;
    border: 1px solid rgba(216, 229, 237, 1);
    background: rgba(249, 250, 254, 1);
    border-radius: 3px;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
    .el-icon-loading {
      font-size: 30px;
      color: #ddd;
      margin: 35px 225px;
    }
    li {
      width: 100%;
      padding: 0 20px;
      line-height: 36px;
      font-size: 14px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;
      &:hover {
        background: #e9ebf5;
      }
    }
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
