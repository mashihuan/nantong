<template>
  <el-card v-if="cardTitle" shadow="never" :class="{dataClass: isData, titleClass: !showTitle}" @click.native="handleCheckDetail">
    <div v-if="showTitle" slot="header" class="header">
      <div class="left">
        <template v-if="!flagColor">
          <img v-if="sex == '男'" class="sex" src="@/assets/img/male.png" alt="sex">
          <img v-if="sex == '女'" class="sex" src="@/assets/img/female.png" alt="sex">
        </template>
        <span class="title flag" :style="{'border-left-color': flagColor}">{{ cardTitle }}</span>
      </div>
      <div v-if="(isData && list.length > 6) || (isPerson && list.length > 10)" class="right" :class="{checked: checked}" @click="handleCheckMore">
        {{ checked ? '向上收起' : '展开更多' }}<img src="@/assets/img/unfold.png" alt="">
      </div>
    </div>
    <slot />
  </el-card>
</template>

<script>
export default {
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
    cardId: {
      type: String,
      default: ''
    },
    sex: {
      type: String,
      default: ''
    },
    flagColor: {
      type: String,
      default: ''
    },
    isData: {
      type: Boolean,
      defalt: false
    },
    isPerson: {
      type: Boolean,
      default: false
    },
    showTitle: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 点击查看详情
    handleCheckDetail () {
      if (this.$route.path !== '/search/list') {
        return
      }
      this.$emit('handleCheckDetail', this.cardId)
    },
    // 查看更多
    handleCheckMore () {
      this.$emit('handleCheckMore', this.index)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  margin-top: 20px;
  font-size: 12px;
  border: none;
  color: #fff;
  background: none !important;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right {
      display: flex;
      align-items: center;
      padding: 2px 4px;
      border: 1px solid #00F3BA;
      border-radius: 2px;
      font-size: 12px;
      color: #00F3BA;
      cursor: pointer;
      img {
        width: 13px;
        height: 13px;
        margin-left: 3px;
      }
      &.checked {
        img {
          transform: rotate(180deg);
        }
      }
    }
  }
  .sex {
    width: 13px;
    height: 13px;
  }
  .title {
    position: relative;
    font-size: 14px;
    font-weight: bold;
    // color: #3C4058;
    &.flag {
      position: relative;
      padding-left: 5px;
      border-left: 3px solid transparent;
    }
  }
  /deep/ .el-table::before, /deep/.el-table__header {
    background: transparent;
  }
  /deep/.el-table__header {
    background: #1A2457;
  }

  /deep/.el-card__header {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 0 !important;
    border-bottom: 1px solid #2BBB91 !important;
    background: transparent !important;
    color: #fff !important;
  }
  /deep/.el-card__body {
    padding-top: 0;
    padding-left: 0 !important;
    padding-right: 0;
    padding-bottom: 0;
    // padding-left: 20px;
    background: transparent !important;
  }
  /deep/.el-card__header {
    background: #f1f4ff;
  }
  /deep/.el-card__body {
    background: #f9fafe;
  }
  &.dataClass {
    /deep/ .el-card__header {
      background: #1B2559 !important;
    }
  }
   &.titleClass {
    margin-top: 0;
  }
}
</style>
