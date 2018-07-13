<template>
    <div class="player">
        <video-player v-show="isShow" ref="videoPlayer" class="vjs-custom-skin"
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
            isShow:true,
            playerOptions: {
                sources: [
                    {
                        withCredentials: false,
                        type: "application/x-mpegURL",  //TODO:开启hls直播
                        src: "http://livepull.hndt.com/live/gdczsrg/playlist.m3u8",
                        // src:"http://ivi.bupt.edu.cn/hls/chchd.m3u8",
                        // type:'video/mp4',
                        // src:'http://111.7.176.235/6773ABFC70F4A740AA9C157DC/03000B02005B285E4AADF9558DE04A42B12276-7D9C-4AA2-9CA7-40CD1F322555.mp4?ccode=0502&duration=200&expire=18000&psid=0bc3e795d1f941cb014f5d06a019cbb2&sp=&ups_client_netip=759e9852&ups_ts=1529385641&ups_userid=&utid=3nEVE60l9TcCAXWemFICu8nh&vid=XMzY3Mjk4NTk0OA%3D%3D&vkey=B4a4b90f9e8b3859efe8c18f8ae354462&s=0d48da8e0805446bbd54',
                    }
                ],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false }},
                html5: { hls: { withCredentials: false }},
                poster: "http://www.hndt.com/h5/partysday/livePostSongs.jpg"
            }
        }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    mounted() {



    },
    methods: {
        playerReadied(player) {
            console.log(player)
            // TODO:开启hls直播
            var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
                player.tech_.hls.xhr.beforeRequest = function(options) {
                return options
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
