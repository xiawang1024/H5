<template>
  <div class="voice">
    <button class="btn" :class="isTouch ? 'istouch':'' " @touchstart.prevent="startRecord" @touchend.prevent="stopRecord" v-html="tipsMsg"></button>
  </div>
</template>

<script>
import weui from 'weui.js'
import wx from 'weixin-js-sdk'
import Bus from 'base/js/bus'
import { postMsg } from 'api/index'
import { WeChat } from 'weChat/util'
const weChat = new WeChat()
export default {
  data() {
    return {
      openid: '',
      creater: '',
      fromUid: '',
      tipsMsg: '按住&nbsp;&nbsp;说话',
      isTouch: false,
      startRecordTime: 0,
      endRecordTime: 0
    }
  },
  components: {},
  mounted() {
    Bus.$on('initPlayer', () => {
      if (
        !localStorage.rainAllowRecord ||
        localStorage.rainAllowRecord !== 'true'
      ) {
        wx.startRecord({
          success: function() {
            localStorage.rainAllowRecord = 'true'
            wx.stopRecord()
          },
          cancel: function() {
            weui.alert('用户拒绝授权录音')
          }
        })
      }
    })

    this.isNotWeixin = !this.isWeixinBrowser()
  },
  methods: {
    isWeixinBrowser() {
      var agent = navigator.userAgent.toLowerCase()
      if (agent.match(/MicroMessenger/i) == 'micromessenger') {
        return true
      } else {
        return false
      }
    },
    startRecord() {
      if (this.isNotWeixin) {
        weui.alert('请用微信打开进行发言！')
        return
      }
      this.startRecordTime = Date.parse(new Date())
      this.isTouch = true
      this.tipsMsg = '松开&nbsp;&nbsp;结束'
      this.recordLoading = weui.loading('录音中...')
      this.recordTimer = setTimeout(() => {
        wx.startRecord({
          success: () => {
            localStorage.rainAllowRecord = 'true'
          },
          cancel: () => {
            weui.alert('用户拒绝授权录音')
          }
        })
      }, 300)
    },
    stopRecord() {
      if (this.isNotWeixin) {
        return
      }
      this.recordLoading.hide()
      this.endRecordTime = Date.parse(new Date())
      this.isTouch = false
      this.tipsMsg = '按住&nbsp;&nbsp;说话'
      console.log(this.endRecordTime)
      console.log(this.startRecordTime)
      console.log(this.endRecordTime - this.startRecordTime)
      if (this.endRecordTime - this.startRecordTime <= 1000) {
        this.endRecordTime = 0
        this.startRecordTime = 0
        weui.alert('时间太短，请重录！')
        clearTimeout(this.recordTimer)
        setTimeout(() => {
          wx.stopRecord({
            success: res => {
              console.log(res)
            },
            fail: err => {
              console.log(err)
            }
          })
        }, 1000)
        return
      } else {
        this._stopHandler()
      }
      this.$nextTick(() => {})
    },
    _stopHandler() {
      wx.stopRecord({
        success: res => {
          let voiceLocalId = res.localId
          wx.playVoice({
            localId: voiceLocalId
          })
          // weui.alert(voiceLocalId)
          weui.confirm('确定发送', {
            buttons: [
              {
                label: '返回',
                type: 'default',
                onClick: () => {
                  console.log('no')
                }
              },
              {
                label: '确定',
                type: 'primary',
                onClick: () => {
                  this._uploadVoice(voiceLocalId)
                }
              }
            ]
          })
        },
        fail: res => {
          console.log(JSON.stringify(res))
        }
      })
    },
    _uploadVoice(voiceLocalId) {
      wx.uploadVoice({
        localId: voiceLocalId, // 需要上传的音频的本地ID，由stopRecord接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: res => {
          let userInfo = JSON.parse(weChat.getStorage('WXHNDTOPENID'))
          let openid = userInfo.openid
          postMsg('VOICE', openid, res.serverId).then(res => {
            weui.toast('审核中！')
          })
        }
      })
    }
  }
}
</script>


<style lang="stylus" scoped>
.voice {
  width: 100%;
  height: 100%;

  .btn {
    display: inline-block;
    width: 100%;
    height: 60px;
    border: 1px solid #0081dc;
    border-radius: 12px;
    font-size: 28px;
    outline: none;
    background: none;
    user-select: none;

    &.istouch {
      background: #ddd;
    }
  }
}
</style>
