<template>
  <div class="info" id='info'>
    <div v-if="bodyContent" v-html='bodyContent' class='content'></div>
  </div>
</template>

<script>
import Bus from 'base/js/bus'
export default {
  name: 'info',
  data() {
    return {
      bodyContent: ''
    }
  },
  mounted() {
    Bus.$on('initPlayer', data => {
      let { live, icon, body } = data
      let newContent = body.replace(/src="\//gi, 'src="http://www.hndt.com/')
      this.bodyContent = newContent
    })
  }
}
</script>


<style lang="stylus" scoped>
.info {
  min-height: calc(100vh - 450px);

  .content {
    min-height: 300px;
  }
}
</style>

