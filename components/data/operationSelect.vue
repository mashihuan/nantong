<template>
  <div class="wrap">
    <div class="item" :class="{active: active == 0}" @click="handleSelectClick('整体', 0)">
      整体
    </div>
    <el-dropdown class="item" :class="{active: active == 1}">
      <span class="el-dropdown-link">
        行业<i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) of listFrHy"
          :key="index"
          @click.native="handleSelectClick(item, 1)"
        >
          {{ item }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown class="item" :class="{active: active == 2}">
      <span class="el-dropdown-link">
        地区<i class="el-icon-arrow-down el-icon--right" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(item, index) of listFrDq"
          :key="index"
          @click.native="handleSelectClick(item, 2)"
        >
          {{ item }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    listFrHy: {
      type: Array,
      default () {
        return []
      }
    },
    listFrDq: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      active: 0
    }
  },
  methods: {
    handleSelectClick (item, index) {
      this.active = index
      this.$emit('handleSelectClick', item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #1F65EB;
  .item {
    margin-right: .5rem;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    padding-right: 10px;
    padding-bottom: 10px;
    border-bottom: 3px solid transparent;
    &.active {
      border-color: #1F65EB;
    }
  }
}
</style>
