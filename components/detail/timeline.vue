<template>
  <card-temp :card-title="cardTitle" flag-color="#36CFC9">
    <div>
      <p v-if="activities.length <= 0" style="line-height: 30px;">
        没有查到相关信息
      </p>
      <el-timeline v-else>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          color="#1F65EB"
        >
          <span class="timestamp">{{ activity['_0'] }}</span>
          <div class="info">
            <span class="type">{{ activity['_1'] }}</span>
            <span class="before">{{ activity['_2'] }}</span>
            <span class="after">{{ activity['_3'] }}</span>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>
  </card-temp>
</template>

<script>
import cardTemp from './template'
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
    }
  },
  computed: {
    activities () {
      const arr = []
      this.list.forEach((item) => {
        const json = {}
        item.forEach((val, index) => {
          json['_' + index] = val.value
        })
        arr.push(json)
      })
      return arr
    }
  }
}
</script>

<style lang="scss" scoped>
.el-timeline {
  padding-top: 10px;
  padding-left: 120px;
  font-size: 12px;
  /deep/.el-timeline-item__content {
    position: relative;
    top: 3px;
  }
  /deep/.el-timeline-item__tail {
    border-color: #1F65EB;
    border-width: 1px;
  }
  /deep/.el-timeline-item__timestamp.is-bottom {
    margin-top: 0;
  }
  /deep/ .el-timeline-item:nth-child(odd) .info {
    background: #1B2559 !important;
  }
  /deep/ .el-timeline-item:nth-child(even) .info {
    background: #0F1740 !important;
  }
  .timestamp {
    position: absolute;
    left: -140px;
    width: 110px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #fff;
  }
  .info {
    position: relative;
    top: -5px;
    display: flex;
    padding: 5px 10px;
    line-height: 17px;
    background: #F9FAFE;
    border-radius: 3px;
    color: #fff;
    .type {
      width: 150px;
      flex-shrink: 0;
      font-weight: bold;
    }
    .before {
      flex: 1;
    }
    .after {
      flex: 1;
      flex-shrink: 0;
    }
  }
}
/deep/.el-card__body {
  background: #fff !important;
}
</style>
