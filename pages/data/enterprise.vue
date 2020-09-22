<template>
  <relation
    :relation="true"
    :nodes="nodes"
    :links="links"
    name="南通市大数据发展集团有限公司"
  />
</template>

<script>
import relation from '@/components/data/relation'
import { getFrgx } from '@/api/enterprise'
import asyncData from '@/common/mixin'
export default {
  components: {
    relation
  },
  mixins: [asyncData],
  data () {
    return {
      nodes: [],
      links: []
    }
  },
  mounted () {
    this._getFrgx()
  },
  methods: {
    async _getFrgx () {
      const res = await getFrgx({
        entityId: this.$route.query.entityId
      })
      this.nodes = res.data.nodes.map((val) => {
        return {
          name: val.NAME,
          category: val.category,
          UUID: val.UUID
        }
      })
      let tempArr = []
      tempArr = this.nodes.map((val) => {
        return val.name
      })
      const arr = []
      const arr2 = []
      const arr3 = []
      tempArr.forEach((val, index) => {
        if (!arr.includes(val)) {
          arr.push(val)
          arr2.push(index)
        }
      })
      arr2.forEach((val) => {
        arr3.push(this.nodes[val])
      })
      this.nodes = arr3
      this.links = res.data.links.map((val) => {
        return {
          source: val.source,
          target: val.target,
          name: val.NAME
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
