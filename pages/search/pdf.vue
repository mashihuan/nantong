<template>
  <iframe class="prism-player" :src="pdfUrl" width="100%" height="100%" />
</template>

<script>
export default {
  layout: 'blank',
  data () {
    return {
      pdfUrl: ''
    }
  },
  mounted () {
    this.pdfUrl = `/pdf/web/viewer.html?file=${encodeURIComponent(this.$route.query.url)}`
  }
}
</script>

<style>

</style>
