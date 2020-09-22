<template>
  <card-temp :show-title="showTitle" :card-title="cardTitle" flag-color="#FFC53D">
    <div>
      <p v-if="list.length <= 0" style="line-height: 30px;">
        没有查到相关信息
      </p>
      <ul class="list">
        <li
          v-for="(item, index1) of list"
          :key="index1"
          class="item"
          :style="{background:'url(/bg/00'+(index1 % 5)+'.png)',backgroundSize: '100% 100%'}"
          @click="handleCheckPdf(index1)"
        >
          <p class="title">
            {{ getTitle(index1) }}
          </p>
          <p class="desc">
            {{ getCode(index1) }}
          </p>
        </li>
      </ul>
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
      default: false
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
    // 获取标题
    getTitle (index) {
      let title = ''
      this.list[index].forEach((val) => {
        if (val.label === '证照名称') {
          title = val.value
        }
      })
      return title
    },
    // 获取编号
    getCode (index) {
      let code = ''
      this.list[index].forEach((val) => {
        if (val.label === '证照编号') {
          code = val.value
        }
      })
      return code
    },
    // 查看pdf
    handleCheckPdf (index) {
      let url = ''
      this.list[index].forEach((val) => {
        if (val.label === '证照详情') {
          url = val.value
        }
      })
      this.$router.push('/search/pdf?url=' + url)
    },
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
.list {
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 32%;
    height: 110px;
    padding-top: 30px;
    margin: 10px 0;
    border-radius: 5px;
    background: red;
    .title, .desc {
      padding-left: 60px;
      padding-right: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .title {
      font-size: 14px;
      font-weight: bold;
    }
    .desc {
      margin-top: 10px;
      font-size: 12px;
    }
  }
  .item:nth-of-type(3n-1) {
    margin-left: 2%;
    margin-right: 2%;
  }
}
</style>
