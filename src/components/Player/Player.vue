<template>
    <div class="player">
        <video-player class="vjs-custom-skin" 
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
require('videojs-contrib-hls')

export default {
    name:'player',
    data() {
        return {
            playerOptions: {
                // videojs and plugin options
                height: '240',
                sources: [
                    {
                        withCredentials: false,
                        type: "application/x-mpegURL",
                        src: "http://live.muzhifm.com/shuazhibo/room322_pc.m3u8?auth_key=1526006127-0-0-fe1acb8daf5215fef1024ffc674071c0"
                    }
                ],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false }},
                html5: { hls: { withCredentials: false }},
                poster: "http://hndt.com/h5/jiaoyu/video-cover.png"
            }
        }
    },
    mounted() {
        setTimeout(() => {
            let video = document.querySelector('.vjs-tech')
            console.log(video)
            video.setAttribute('webkit-playsinline',true)
            video.setAttribute('playsinline',true)
            video.setAttribute('x5-playsinline',true)                     
        },1000)
    },
    methods: {
        playerReadied(player) {
            var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
            player.tech_.hls.xhr.beforeRequest = function(options) {
            // console.log(options)
            return options
            }
        }
    }
}
</script>


<style lang="stylus" scoped>

</style>
