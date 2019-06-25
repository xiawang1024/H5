<template>
  <div class="info" id="info">
    <div v-if="bodyContent" v-html="bodyContent" class="content"></div>
  </div>
</template>

<script>
import Bus from 'base/js/bus'
export default {
  name: 'info',
  data() {
    return {
      bodyContent: '这是一个青春洋溢的展示舞台,是一场弘扬先进的表彰大会，亦是一场丰富多彩的视听盛宴，青春的魅力在这里挥洒，收获的喜悦在这里绽放。就在这天，思念人欢聚一堂，表彰与节目在这里融合，过去与未来在这里完美呈现。'
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
  // min-height: calc(100vh - 450px);
  .content {
    min-height: 300px;
    line-height: 2;
    font-size: 32px;
  }
}
</style>

