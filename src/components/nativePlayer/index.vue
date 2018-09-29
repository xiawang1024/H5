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
      default:'http://live.muzhifm.com/shuazhibo/room322_pc.m3u8?auth_key=1540792203-0-0-9d557cb06d2772c24ea9a06d638f0e0c'
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

