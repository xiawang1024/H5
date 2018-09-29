<template>
  <div class="live-player">
    <video id="video" class="v-hls" controls playsinline="playsinline" webkit-playsinline="true" :src="src" x5-playsinline="true" width="100%" height='100%' :poster='poster'></video>
  </div>
</template>

<script>
// import Hls from 'hls.js'
export default {
  name:'livePlayer',
  props:{
    src:{
      type:String,
      default:'http://live.muzhifm.com/shuazhibo/room322_pc.m3u8?auth_key=1540793728-0-0-aa8828b06ec530d871ba2c2c341157c1'
    },
    poster:{
      type:String,
      default:'https://a.weixin.hndt.com/h5/1066/paylive/livePost.jpg'
    }
  }
}
</script>

<style lang="stylus" scoped>
.live-player {
  width: 750px;
  height: 422px;
}
</style>

