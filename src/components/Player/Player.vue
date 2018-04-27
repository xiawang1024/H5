<template>
    <div class="player">
        <video-player v-show="isShow" ref="videoPlayer" class="vjs-custom-skin" 
        :options="playerOptions" 
        @ready="playerReadied">
        </video-player>
    </div>
</template>


<script>
import './custom-theme.css'
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
                height: '230',
                sources: [
                    {
                        withCredentials: false,
                        type: "application/x-mpegURL",  //TODO:开启hls直播                        
                        src: "http://livepull.hndt.com/live/20180427/playlist.m3u8"
                        // src:'http://ivi.bupt.edu.cn/hls/chchd.m3u8'
                    }
                ],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false }},
                html5: { hls: { withCredentials: false }},
                poster: "http://hndt.com/h5/yule/976.png"
            }
        }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    mounted() {
        setTimeout(() => {
            let video = document.querySelector('video')            
            video.setAttribute('webkit-playsinline',true)
            video.setAttribute('playsinline',true)
            video.setAttribute('x5-playsinline',true)                     
        },750)

      
    },
    methods: {
        playerReadied(player) {
            console.log(player)
            // TODO:开启hls直播
            var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
                player.tech_.hls.xhr.beforeRequest = function(options) {
                // console.log(options)
                return options
            }
        }
        
    },
    
}
</script>


<style lang="stylus" scoped>

</style>
