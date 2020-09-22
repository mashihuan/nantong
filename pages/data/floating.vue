<template>
  <el-row style="height:100%">
    <el-col :span="15" style="height:100%">
      <china :title="title" :sjrq="censusSjrq" :data="census" />
    </el-col>
    <el-col :span="9">
      <pie
        :title="title + '性别分布'"
        :list="sexs"
        :sjrq="sexsSjrq"
        unit="人"
        :color="['#280AEA','#13C39A', '#01BBF2', '#1F65EB', '#741FC8', '#FF922F', '#13CE66']"
      />
      <pie
        :title="title + '年龄分布'"
        :list="ages"
        :sjrq="agesSjrq"
        unit="人"
        :color="['#280AEA','#13C39A', '#01BBF2', '#1F65EB', '#741FC8', '#FF922F', '#13CE66']"
      />
    </el-col>
  </el-row>
</template>

<script>
import China from '@/components/data/china'
import asyncData from '@/common/mixin'
import pie from '@/components/dashboard/pie'
import {
  countZrrLdrkHj,
  countZrrLdrkXb,
  countZrrLdrkNlfb
} from '@/api/enterprise'

export default {
  components: {
    China,
    pie
  },
  mixins: [asyncData],
  data () {
    return {
      census: [],
      censusSjrq: '',
      sexs: [],
      sexsSjrq: '',
      ages: [],
      agesSjrq: '',
      title: '来通人口'
    }
  },
  mounted () {
    this._getCountZrrLdrkHj()
    this._getCountZrrLdrkXb()
    this._getCountZrrLdrkNlfb()
  },
  methods: {
    // 户籍分布
    async _getCountZrrLdrkHj () {
      const res = await countZrrLdrkHj({})
      this.census = res.data.map((val) => {
        return {
          name: val.hjly,
          value: val.rs
        }
      })
      this.censusSjrq = res.data[0].sjrq
    },
    // 性别分布
    async _getCountZrrLdrkXb () {
      const res = await countZrrLdrkXb({})
      this.sexs = res.data.map((val) => {
        return {
          name: val.xb,
          value: val.rs
        }
      })
      this.sexsSjrq = res.data[0].sjrq
    },
    // 年龄分布
    async _getCountZrrLdrkNlfb () {
      const res = await countZrrLdrkNlfb({})
      this.ages = res.data.map((val) => {
        if (val.nlqj === '60~') {
          val.nlqj = '>60'
        }
        return {
          name: val.nlqj,
          value: val.rs
        }
      })
      this.agesSjrq = res.data[0].sjrq
    }
  }
}
</script>

<style>

</style>
