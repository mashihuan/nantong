<template>
  <card-temp
    :card-title="cardTitle || cardName"
    :card-id="cardId"
    :sex="sex"
    :index="index"
    :flag-color="flagColor"
    :is-data="isData"
    :is-person="isPerson"
    :checked="checked"
    :list="list"
    @handleCheckDetail="handleCheckDetail"
    @handleCheckMore="handleCheckMore"
  >
    <div class="list" :class="{dataClass: isData, checked: checked, personClass: isPerson}">
      <p v-if="cardList.length <= 0" style="line-height: 30px;">
        没有查到相关信息
      </p>
      <template v-if="!isData">
        <div
          v-for="(item, index1) of cardList"
          :key="index1"
          class="item-wrap"
        >
          <div
            v-for="(ite, ind) of item"
            :key="ind"
            class="item"
            :class="{active: ite.label == '业务范围'}"
          >
            <div
              v-if="ite.label"
              class="item-inner"
              :style="{cursor: ite.link ? 'pointer':''}"
              @click="handleLink(ite)"
            >
              <span class="label" :class="{dataClass: isData}">{{ ite.label }}：</span>
              <span class="value">{{ ite.value }}</span>
              <img v-if="ite.link || ite.value ==='学生'" class="link" src="@/assets/img/link.png" alt="">
            </div>
          </div>
        </div>
      </template>
      <template v-if="isData">
        <div
          v-for="(item, index2) of cardList"
          :key="index2"
          class="item"
          :style="{cursor: item.link ? 'pointer':''}"
          :class="{active: item.label == '业务范围'}"
        >
          <div
            v-if="item.label"
            class="item-inner"
            :style="{cursor: item.link ? 'pointer':''}"
            @click="handleLink(item)"
          >
            <span class="label" :class="{dataClass: isData}">{{ item.label }}：</span>
            <span class="value">{{ item.value }}</span>
            <img v-if="item.link || item.value ==='学生'" class="link" src="@/assets/img/link.png" alt="">
          </div>
        </div>
      </template>
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
    list: {
      type: Array,
      default () {
        return []
      }
    },
    index: {
      type: Number,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    cardTitle: {
      type: String,
      default: ''
    },
    flagColor: {
      type: String,
      default: ''
    },
    isData: { // 企业/自然人数据
      type: Boolean,
      default: false
    },
    isPerson: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    cardList () {
      const list = this.list
      if (!this.isData) {
        const arr = []
        let start = -1
        let end = 2
        list.forEach((val, index) => {
          const tempArr = []
          list.forEach((v, i) => {
            if (i > start && i < end) {
              tempArr.push(v)
            }
          })
          arr[(end / 2) - 1] = tempArr
          if (arr.length < Math.ceil(list.length / 2)) {
            start += 2
            end += 2
          } else {
            return arr
          }
        })
        return arr
      } else {
        return list
      }
    },
    cardId () {
      if (this.list.length > 0) {
        return this.list[this.list.length - 1].entityId
      } else {
        return ''
      }
    },
    sex () {
      if (this.list.length > 0) {
        return this.list[this.list.length - 1].sex
      } else {
        return ''
      }
    },
    cardIcon () {
      return ''
    },
    cardName () {
      if (this.list.length > 0) {
        return this.list[this.list.length - 1].name
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapMutations('user', ['switchIdentity']),
    // 跳转
    async handleLink (item) {
      if (item.value === '学生') {
        this.$emit('getStudentInfo')
        return
      }
      const link = item.link
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
    handleCheckDetail (id) {
      this.$emit('handleCheckDetail', id)
    },
    // 显示更多
    handleCheckMore (index) {
      this.$emit('handleCheckMore', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  width: 18px;
  margin-left: 10px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  &.dataClass {
    max-height: 80px;
    overflow: hidden;
    background: #0F1740;
    &.checked {
      max-height: 99999px;
    }
    .item {
      padding-left: 15px;
      width: 33%;
    }
  }
  &.personClass {
    max-height: 185px;
    overflow: hidden;
    background: #0F1740;
    &.checked {
      max-height: 99999px;
    }
    .item {
      padding-left: 15px;
      width: 50%;
    }
  }
  .item-wrap {
    display: flex;
    width: 100%;
    padding-left: 10px;
  }
  .item-wrap:nth-child(odd) {
    background: #1B2559;
  }
  .item-wrap:nth-child(even) {
    background: #0F1740;
  }
  .item {
    display: flex;
    width: 50%;
    .item-inner {
      display: flex;
      margin: 10px 0;
      padding: 0 10px;
      line-height: 17px;

      > span {
        // flex-shrink: 0;
        word-break: break-all;
      }
    }
    .label {
      position: relative;
      display: inline-block;
      min-width: 60px;
      font-weight: bold;
      &:before {
        position: absolute;
        content: "";
        left: -10px;
        top: 2px;
        width: 2px;
        height: 13px;
        background: #3ea8fe;
      }
      &.dataClass:before {
        background: #2BBB91;
      }
    }
    &.active {
      width: 100%;
    }
  }
}
</style>
