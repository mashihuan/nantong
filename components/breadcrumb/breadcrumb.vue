// <template>
  //   <el-breadcrumb id="breadcrumb" separator="/">
    //     <el-breadcrumb-item
//       v-for="(item, index) of breadcrumbs"
//       :key="index"
//       :to="{ path: item.path }"
//     >
      //       {{ item.name }}
      //
    </el-breadcrumb-item>
    //
  </el-breadcrumb>
  //
</template>

<script>
// import { mapState } from 'vuex'
// export default {
//   data () {
//     return {
//       breadcrumbs: [
//         { path: '/', name: '首页' }
//       ]
//     }
//   },
//   computed: {
//     ...mapState({ identity: state => state.user.identity })
//   },
//   watch: {
//     $route () {
//       this.getBreadcurmbs()
//     },
//     identity () {
//       this.getBreadcurmbs()
//     }
//   },
//   mounted () {
//     this.getBreadcurmbs()
//   },
//   methods: {
//     getBreadcurmbs () {
//       if (this.$route.path === '/search') {
//         this.breadcrumbs = [
//           { path: '/search', name: Number(this.identity) === 1 ? '个人画像' : '法人画像' }
//         ]
//       } else if (this.$route.path === '/search/list') {
//         this.breadcrumbs = [
//           { path: '/search', name: Number(this.identity) === 1 ? '个人画像' : '法人画像' },
//           { path: '/search/list', name: '检索结果' }
//         ]
//       } else if (this.$route.path === '/search/detail') {
//         this.breadcrumbs = [
//           { path: '/search', name: Number(this.identity) === 1 ? '个人画像' : '法人画像' },
//           { path: '/search/list', name: '检索结果' },
//           { path: '/search/detail', name: '检索详情' }
//         ]
//       } else {
//         this.breadcrumbs = [
//           { path: '/', name: '首页' }
//         ]
//       }
//     }
//   }
// }
// </script>

// <style lang="scss" scoped>
// #breadcrumb {
//   padding: 0 24px;
//   border-radius: 3px;
//   background: #fff;
//   line-height: 31px;
//   color: #6a6e94;
//   font-size: 12px;
// }
// </style>
