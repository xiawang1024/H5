<template>
  <div class="live-player">
    <video id="video" class="v-hls" controls playsinline="playsinline" webkit-playsinline="true" x5-playsinline="true" width="100%" height='100%' :poster='poster'>
      <source :src="src" type="video/mp4">
      </source>
    </video>
  </div>
</template>

<script>
// import Hls from 'hls.js'
export default {
  name:'livePlayer',
  props:{
    src:{
      type:String,
      default:''
    },
    poster:{
      type:String,
      default:''
    }
  },
  mounted() {
    console.log(this.src)
    let video = document.getElementById('video')
    console.log(video.networkState )
    video.addEventListener('play',() => {
      console.log('play')
      console.log(video.readyState)
    })
    video.addEventListener('playing',() => {
      console.log('playing')
      console.log(video.readyState)
    })

    video.addEventListener('pause',() => {
      console.log('pause')
    })
    video.addEventListener('ended',() => {
      console.log('------------------------------------');
      console.log(video.readyState);
      console.log('------------------------------------');
    })

    let source = document.getElementById('video').querySelector('source')
    source.addEventListener('error',() => {
      console.log('error')
    })

  }
}
</script>

<style lang="stylus" scoped>
.live-player {
  width: 750px;
  height: 422px;
}
</style>

