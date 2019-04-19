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
      poster: ""
    };
  },
  mounted() {
    let videoBox = document.getElementById("video");
    Bus.$on("initPlayer", data => {
      let { live, icon, status, video } = data;
      this.$nextTick(() => {
        this.poster = icon;
        /**
         * live
         */
        if (status.indexOf("b") !== -1) {
          if (this.isPc()) {
            if (Hls.isSupported()) {
              var hls = new Hls();
              hls.loadSource(live);
              hls.attachMedia(videoBox);
              hls.on(Hls.Events.MANIFEST_PARSED, function() {
                videoBox.play();
              });
            }
          } else {
            videoBox.setAttribute("src", live);
          }
        } else if (status.indexOf("c") !== -1) {
          /**
           * 点播
           * */
          videoBox.setAttribute("src", video);
        }
      });
    });
    Bus.$on("backPlay", backSrc => {
      videoBox.setAttribute("src", backSrc);
      videoBox.play();
    });
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

