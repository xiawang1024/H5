<template>
  <div class="live-player">
    <video
      id="video"
      class="v-hls"
      controls
      playsinline="playsinline"
      webkit-playsinline="true"
      x5-playsinline="true"
      width="100%"
      height="100%"
      :poster="poster"
      src="http://www.hndt.com/nh5/out/20190618/source/sinian.mp4"
    />
  </div>
</template>

<script>
import Hls from "hls.js";
import Bus from "base/js/bus";
export default {
  name: "livePlayer",
  data() {
    return {
      poster: "http://www.hndt.com/nh5/out/20190618/imgs/cover.png"
    };
  },
  mounted() {
    // let videoBox = document.getElementById("video");

    // let live = 'http://livepull.hndt.com/live/sinian2019/playlist.m3u8'
    // if (this.isPc()) {
    //   if (Hls.isSupported()) {
    //     var hls = new Hls();
    //     hls.loadSource(live);
    //     hls.attachMedia(videoBox);
    //     hls.on(Hls.Events.MANIFEST_PARSED, function () {
    //       videoBox.play();
    //     });
    //   }
    // } else {
    //   videoBox.setAttribute("src", live);
    // }

    // Bus.$on("backPlay", backSrc => {
    //   videoBox.setAttribute("src", backSrc);
    //   videoBox.play();
    // });
  },
  methods: {
    isPc() {
      if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.live-player {
  width: 750px;
  height: 422px;
  background: #000;
  overflow: hidden;
}
</style>

