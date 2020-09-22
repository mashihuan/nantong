<template>
  <el-row class="navbar">
    <el-col :span="3" class="logo">
      <nuxt-link to="/">
        <img src="@/assets/img/logo.png" alt="logo">
      </nuxt-link>
    </el-col>
    <el-col :span="16" class="nav">
      <template v-for="(item, index) of navList">
        <span
          v-if="!item.children && !item.type"
          class="link"
          :class="{active: active == index}"
          :Key="index"
          @click="handleSwitchNav(item, index)"
        >{{ item.name }}</span>
        <el-dropdown
          v-if="item.children"
          :key="index"
          :show-timeout="0"
          placement="bottom-start"
          :popper-append-to-body="false"
          :class="{active: active == index}"
          class="link"
        >
          <span class="el-dropdown-link">
            {{ item.name }}<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdownMenu">
            <el-dropdown-item v-for="(ite, ind) of item.children" :key="ind" :class="{active: $route.fullPath == ite.path}" @click.native="handleSwitchNav(ite, index)">
              {{ ite.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a
          v-if="item.type"
          :key="index"
          class="link"
          :href="DATA_MANAGER"
          target="_blank"
        >{{ item.name }}</a>
      </template>
    </el-col>
    <el-col :span="5" class="user">
      <a
        href="javascript:;"
      ><img
        class="set"
        src="@/assets/img/set.png"
        alt="set"
      ></a>
      <!-- <img class="avatar" src="@/assets/img/icon.jpg" alt="avatar"> -->
      <span class="name">你好，{{ name }}</span>
      <el-button class="logout" size="mini" type="primary" @click="handleLogout">
        退出
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import { getStorage, setStorage } from '@/common/storage'
import { setToken, removeToken } from '@/common/auth'
import { IS_SSO, DATA_MANAGER, LOGOUT_URL } from '@/common/config'

export default {
  data () {
    return {
      active: 0,
      navList: [
        { name: '数据大盘', path: '/', identity: 0 },
        { name: '个人画像', path: '/search', identity: 1 },
        { name: '法人画像', path: '/search', identity: 2 },
        // { name: '自然人数据', path: `/data?id=${DEATHS_ID}`, identity: 2 },
        // { name: '学生统计', path: '/data/student', identity: 2 }
        {
          name: '数据应用',
          path: '/person',
          identity: 3,
          children: [
            { name: '死亡社保比对', path: '/data', identity: 3 },
            { name: '学生统计', path: '/data/student', identity: 3 },
            { name: '人口结构分析', path: '/data/population', identity: 3 },
            { name: '企业存续', path: '/data/operation', identity: 3 }
            // { name: '来通人口分析', path: '/data/floating', identity: 3 }
          ]
        },
        // { name: '企业图谱', path: '/data/enterprise2?entityId=9268bd8a-caf4-11ea-a4bc-51a3b72a0016&name=%E5%8D%97%E9%80%9A%E5%B8%82%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%8F%91%E5%B1%95%E9%9B%86%E5%9B%A2%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8', identity: 4 },
        { name: '数据中台', identity: 5, type: 'link' }
      ]
    }
  },
  computed: {
    ...mapState({ identity: state => state.user.identity }),
    ...mapGetters(['name']),
    DATA_MANAGER () {
      return DATA_MANAGER
    }
  },
  watch: {
    identity (val) {
      this.active = val
    }
  },
  created () {
    const sessionToken = this.$route.query.sessionToken
    if (sessionToken) {
      setToken(sessionToken)
    }
  },
  async mounted () {
    // const index = this.navList.findIndex((val) => {
    //   return this.$route.path === val.path
    // })
    // this.active = index
    // this.switchIdentity(index)
    // await setStorage('index', index)
    this.getUserInfo()
    const index = await getStorage('index')
    if (index) {
      if (this.$route.path === '/') {
        this.active = 0
        this.switchIdentity(0)
      } else {
        this.active = index
        this.switchIdentity(index)
      }
    }
  },
  methods: {
    ...mapMutations('user', ['switchIdentity']),
    ...mapActions('user', ['logout', 'getUserInfo']),
    // 切换导航
    async handleSwitchNav (item, index) {
      if (item.identity === 5) {
        window.location.href = DATA_MANAGER
        return
      }
      this.switchIdentity(index)
      this.active = index
      await setStorage('index', index)
      this.$router.push({ path: item.path })
    },
    // 退出
    async handleLogout () {
      if (IS_SSO) {
        removeToken()
        this.$store.commit('user/SET_TOKEN', '')
        window.location.replace(LOGOUT_URL)
      } else {
        await this.logout()
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 1190px;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  .el-col {
    height: 100%;
  }
  .logo {
    img {
      width: 32px;
      height: 32px;
      margin-top: 7px;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    .link {
      margin-left: 50px;
      padding: 10px 13px;
      border-radius: 3px;
      font-size: 12px;
      color: #fff;
      cursor: pointer;
      &.active {
        background: #292F55;
        font-weight: bold;
      }
    }
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .set,
    .avatar {
      width: 23px;
      height: 23px;
    }
    .avatar {
      margin: 0 25px;
      border-radius: 50%;
    }
    .name {
      font-size: 12px;
      margin: 0 25px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

.dropdownMenu {
  padding: 0;
  border: none;
  background: #101742 !important;
  .el-dropdown-menu__item {
    color: #fff;
    &.active {
      background: #1B2559;
    }
    &:hover {
      background: transparent;
    }
  }
  /deep/.popper__arrow {
    border-width: 0 !important;
    display: none !important;
  }
}

</style>
