<template>
  <div class="chart">
    <div class="chart-footer" />
    <div class="mask" />
    <div class="content">
      <div class="total">
        <p class="title1">
          {{ title1 }}
        </p>
        <div class="data1">
          <count-to :end-val="data1" /> <span class="unit">{{ type === 'person' ? '人' : '家' }}</span>
        </div>
      </div>
      <div class="add">
        <div class="year">
          <p>当<span>年</span>新增{{ title2 }}</p>
          <p><img src="@/assets/img/up.png" alt=""><count-to :end-val="data2" /></p>
        </div>
        <div class="month">
          <p>当<span>{{ type==='person'?'月':'年' }}</span>{{ type==='person'?'新增': '减少' }}{{ title3 }}</p>
          <p>
            <img v-if="type==='person'" src="@/assets/img/up.png" alt="">
            <img v-else src="@/assets/img/down.png" alt="">
            <count-to :end-val="data3" :style="{color: type==='person'?'#01BBF2':'#FF8670'}" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import countTo from 'vue-count-to'
export default {
  components: {countTo},
  props: {
    type: {
      type: String,
      default: ''
    },
    title1: {
      type: String,
      default: ''
    },
    title2: {
      type: String,
      default: ''
    },
    title3: {
      type: String,
      default: ''
    },
    data1: {
      type: Number,
      default: 0
    },
    data2: {
      type: Number,
      default: 0
    },
    data3: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {

    }
  },
  mounted () {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/chart.custom.scss';
.total {
  height: 46%;
  padding:  .375rem .25rem;
  .title1 {
    font-size: .2125rem;
    padding-left: .0875rem;
    border-left: .025rem solid #00F3BA;
  }
  .data1 {
    margin-top: .2rem;
    span {
      font-size: .725rem;
      font-family: Arial-BoldMT,Arial;
      line-height: .8375rem;
      color: #00F3BA;
    }
    .unit {
      font-size: .15rem;
    }
  }
}
.add {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 46%;
  margin-top: 5%;
  > div {
    width: 48%;
    height: 100%;
  }
}
.total, .year, .month {
  border: 1px solid;
  border-image:linear-gradient(90deg, rgba(54,32,255,1), rgba(31,108,253,1)) 1 1;
}
 .year, .month {
   padding: .5rem .2rem;
   p:first-child {
     font-size: .2125rem;
     span {
       color: #00F3BA;
     }
   }
   p:last-child {
     display: flex;
     align-items: center;
     margin-top: .2rem;
     font-size: .4rem;
     color: #01BBF2;
     font-family: Arial-BoldMT,Arial;
     img {
      width: .375rem;
      margin-right: .0875rem;
    }
   }
 }
</style>
