<template>
    <div class="player">
        <video-player ref="videoPlayer" class="vjs-custom-skin"
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

import { getChannelItem } from 'api/index'
import channelInfo from '../../config.js'

export default {
    name:'player',
    data() {
        return {
            playerOptions:  {
                height: '230',
                sources: [
                    {
                        withCredentials: false,
                        type: "application/x-mpegURL",
                        src: "http://www.hndt.com/h5/shows/12/videos/1.mp4"
                    }
                ],
                controlBar: {
                    timeDivider: false,
                    durationDisplay: false
                },
                flash: { hls: { withCredentials: false }},
                html5: { hls: { withCredentials: false }},
                poster: ""
            },
        }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    mounted() {
        setTimeout(() => {
            let video = document.querySelector('.vjs-tech')
            video.setAttribute('webkit-playsinline',true)
            video.setAttribute('playsinline',true)
            video.setAttribute('x5-playsinline',true)
        },850)
    },
    methods: {
        _getStream() {
            // return getChannelItem(channelInfo.cid).then((res) => {
            //     let data = res.data
            //     return new Promise((resolve, reject) => {
            //         try{
            //             resolve(data)
            //         }catch(err) {
            //             console.log(err)
            //         }
            //     })
            // })
        },
        playerReadied(player) {
            ;(async () => {
                // let data = await this._getStream()
                let liveStream = 'http://livepull.hndt.com/live/gdczsrg/playlist.m3u8'
                let poster = `http://www.hndt.com/h5/20180606/banner.png`
                player.src({
                    type:'application/x-mpegURL',
                    src:liveStream
                    // src:'http://ivi.bupt.edu.cn/hls/chchd.m3u8'
                })
                this.playerOptions = Object.assign(this.playerOptions, {
                    poster: poster
                })
            })()
            // player.poster({
            //     src:'http://program.hndt.com/files/images/2017/08/01/1501576834719710.png'
            // })
            var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
            player.tech_.hls.xhr.beforeRequest = function(options) {
                console.log(options)
                return options
            }
        }
    }
}
</script>


<style lang="stylus" scoped>
</style>
