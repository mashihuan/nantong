require('dotenv').config()
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  // mode: 'universal',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  env: {
    baseUrl: process.env.NODE_ENV === 'development' ? process.env.DEVELOPMENT_BASE_URL : process.env.PRODUCTION_BASE_URL,
    uploadUrl: process.env.UPLOAD_BASE_API,
    serverAddress: process.env.SERVER_ADDRESS
  },
  head: {
    // title: process.env.npm_package_name || '',
    title: '数字空间',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/jquery.orgchart.css' },
      { rel: 'stylesheet', href: '/css/scrollbar.css' }
    ],
    script: [
      { src: '/js/flexible.js' },
      { src: '/js/echarts.js' },
      { src: '/js/echarts-gl.js' },
      { src: '/js/jquery.min.js' },
      { src: '/js/jquery.orgchart.js' }
    ],
    htmlAttrs: {
      lang: 'zh-cn'
    }
  },
  server: {
    port: 3002,
    host: '0.0.0.0'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4D73F4' },
  /*
  ** Global CSS
  */
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/reset.css',
    '@/assets/styles/border.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui', ssr: true },
    '@/plugins/permission.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    // transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    analyze: true,
    vendor: ['element-ui', 'echarts', 'echarts-gl'],
    maxChunkSize: 300000,
    productionSourceMap: false,
    extractCSS: {
      allChunks: true
    },
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    babel: { // 按需加载
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    build: {
      plugins: [new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据进行压缩
        deleteOriginalAssets: false // 是否删除原文件
      })],
      externals: {
        echarts: 'echarts'
      }
    }
  },
  /** spa首页加载样式 */
  loadingIndicator: {
    name: 'rectangle-bounce'
  },
  /** 取消预加载 */
  render: {
    resourceHints: false
  },
  router: {
    middleware: ['redirect']
  }
}
