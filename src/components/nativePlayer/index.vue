<template>
  <div class="live-player">
    <video id="video" class="v-hls" controls playsinline="playsinline" webkit-playsinline="true" x5-playsinline="true" width="100%" height='100%' :poster='poster' />
  </div>
</template>

<script>
import Hls from 'hls.js'
import Bus from 'base/js/bus'
export default {
  name: 'livePlayer',
  data() {
    return {
      poster: ''
    }
  },
  mounted() {
    let video = document.getElementById('video')
    Bus.$on('initPlayer', data => {
      let { live, icon } = data
      this.$nextTick(() => {
        this.poster = icon

        if (live.indexOf('.m3u8') !== -1 && this.isPc()) {
          if (Hls.isSupported()) {
            var hls = new Hls()
            hls.loadSource(live)
            hls.attachMedia(video)
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
              video.play()
            })
          }
        } else {
          video.setAttribute('src', live)
        }
      })
    })
    Bus.$on('backPlay', backSrc => {
      video.setAttribute('src', backSrc)
      video.play()
    })
  },
  methods: {
    isPc() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.live-player {
  width: 750px;
  height: 422px;
  background: #000;
  overflow: hidden;
}
</style>

