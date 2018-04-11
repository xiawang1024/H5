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
require('videojs-contrib-hls/dist/videojs-contrib-hls.js')

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
                        src: "https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/playlist.m3u8"
                    }
                ],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false }},
                html5: { hls: { withCredentials: false }},
                poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-5.jpg"
            }
        }
    },
    mounted() {
        setTimeout(() => {
            let video = document.querySelector('.vjs-tech')
            console.log(video)
            video.setAttribute('webkit-playsinline',true)
            video.setAttribute('playsinline',true)

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
