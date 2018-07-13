<template>
    <div class="player">
        <video-player ref="videoPlayer" class="vjs-custom-skin"
        :playsinline="true"
        :options="playerOptions"
        @ready="playerReadied">
        </video-player>
    </div>
</template>


<script>
// import './custom-theme.css'
import videojs from 'video.js'
window.videojs = videojs
// hls plugin for videojs6
require('videojs-contrib-hls') //TODO:开启hls直播

export default {
    name:'player',
    data() {
        return {
            isLive:false,
            isShow:true,
            playerOptions: {
                // sources: [
                //     {
                //         withCredentials: false,
                //         type: "application/x-mpegURL",
                      // src: "http://livepull.hndt.com/live/20180714/playlist.m3u8",
                //     }
                // ],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false }},
                html5: { hls: { withCredentials: false }},
                poster: "http://www.hndt.com/h5/20180714/post.png"
            }
        }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    created () {
      this.$nextTick(() => {
        this._isLive()
      })
    },
    mounted() {

    },
    methods: {
      _isLive() {
        let nowTime = Date.parse(new Date())
        if(nowTime >= 1531565100000){
          this.isLive = true
        }else {
          this.isLive = false
        }
      },
        playerReadied(player) {

            if(this.isLive) {
              // TODO:开启hls直播
              this.$nextTick(() => {
                  player.src({
                      type: "application/x-mpegURL",  //TODO:开启hls直播
                      src: "http://livepull.hndt.com/live/20180714/playlist.m3u8",
                      // src:'http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8'
                  })
                  player.play()
              })
              var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
                  player.tech_.hls.xhr.beforeRequest = function(options) {
                  return options
              }
            }else {
              this.$nextTick(() => {
                  player.src({
                      type:'video/mp4',
                      src:'http://www.hndt.com/h5/20180714/999.mp4',
                  })
                  player.play()
              })
            }


        }

    },

}
</script>


<style lang="stylus" scoped>
.player {
  height: 422px;
}
</style>
