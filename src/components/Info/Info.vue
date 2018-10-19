<template>
  <div class="info" id='info'>
    <div v-html='bodyContent'></div>
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
  position: absolute;
  top: 502px;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 20px 30px 200px;
  box-sizing: border-box;
}
</style>

