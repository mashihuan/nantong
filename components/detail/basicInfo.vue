<template>
  <card-temp
    :card-title="cardTitle || cardName"
    :card-id="cardId"
    :sex="sex"
    :flag-color="flagColor"
    @handleCheckDetail="handleCheckDetail"
  >
    <div class="list">
      <div v-for="(item, index) of list" :key="index" class="item">
        <div class="title">
          {{ item.label }}
        </div>
        <div class="desc">
          {{ item.value }}
        </div>
      </div>
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
    list: {
      type: Array,
      default () {
        return []
      }
    },
    cardTitle: {
      type: String,
      default: ''
    },
    flagColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    cardList () {
      const list = this.list.filter((val) => {
        return this.cardTitle ? this.list : (val.label !== '姓名' && val.label !== '企业名')
      })
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
        if (start < list.length / 2) {
          start += 2
          end += 2
        } else {
          return arr
        }
      })
      return arr
    },
    cardId () {
      let id = ''
      for (const i in this.list) {
        if (i === 'entityId') {
          id = this.list[i]
        }
      }
      return id
    },
    sex () {
      const item = this.list.find((val) => {
        return val.label === '性别'
      })
      return item && item.value
    },
    cardIcon () {
      return ''
    },
    cardName () {
      const item = this.list.find((val) => {
        return val.label === '姓名' || val.label === '企业名'
      })
      return item.value || ''
    }
  },
  methods: {
    handleCheckDetail (id) {
      this.$emit('handleCheckDetail', id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
