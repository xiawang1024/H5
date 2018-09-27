<template>
  <div class="send-msg">
    <span class="sendVoice" :class="isVoice?'':'sendMsg'" @click="switchBtn"></span>
    <span class="sendImg" @click="postImg"></span>
    <input v-show="isVoice" class="ipt" type="text" v-model="msg">
    <voice v-show="!isVoice" class="voice"></voice>
    <button v-show="isVoice" class="sendBtn" @click="sendMsg">发送</button>
  </div>
</template>


<script>
import { getUser, postMsg } from 'api/index'
import { WeChat } from 'weChat/util'
import weui from 'weui.js';
import wx from 'weixin-js-sdk';
import HU_DONG_ID from '@/config.js'

import Voice from '../Voice/Voice'

const weChat = new WeChat()
export default {
    name:'send-msg',
    components:{
      Voice
    },
    data() {
        return {
            msg:'',
            mediaImgId:'',
            isVoice:true,
            openid:'',
            creater:'',
            fromUid:''
        }
    },
    mounted() {
        // if(weChat.getStorage('WXHNDTOPENID') == null) {
        //   this.isNotWeixin = true
        // }else{
        //   let userInfo = JSON.parse(weChat.getStorage('WXHNDTOPENID'))
        //   this.openid = userInfo.openid;
        //   setTimeout(() => {
            // getUser(this.openid).then((res) => {
            //     let data = res.data
            //     if(data.status === 1) {
            //         this.creater = data.data.name
            //         this.fromUid = data.data.id
            //     }else{
            //         console.log('获取用户信息失败')
            //     }
            // }).catch((err) => {
            //     console.log(err)
            // })
        //   },20)
        // }
        this.isNotWeixin = !this.isWeixinBrowser()
    },
    methods:{
      isWeixinBrowser() {
        var agent = navigator.userAgent.toLowerCase();
        if (agent.match(/MicroMessenger/i) == 'micromessenger') {
          return true;
        } else {
          return false;
        }
      },
      sendMsg() {
        if(this.isNotWeixin) {
          weui.alert('请用微信打开进行发言！')
          return
        }
        if(!this.msg){
            weui.topTips('消息不能为空！')
            return
        }
        this._postMsg()
        this.$emit('sendMsg')
      },
      _postMsg() {

        postMsg(0, HU_DONG_ID , this.msg).then((res) => {
            weui.toast('审核中！')
            this.msg = ''
            console.log(res)
        })
      },
      switchBtn() {
        this.isVoice =  !this.isVoice
      },
      postImg() {
        if(this.isNotWeixin) {
          weui.alert('请用微信打开进行发言！')
          return
        }
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: (res) => {
            this.mediaImgId = res.localIds[0].toString(); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片


            wx.uploadImage({
              localId: this.mediaImgId, // 需要上传的图片的本地ID，由chooseImage接口获得
              isShowProgressTips: 1, // 默认为1，显示进度提示
              success: (res) => {
                let serverId = res.serverId; // 返回图片的服务器端ID
                // weui.alert(serverId)
                postMsg('PIC', HU_DONG_ID ,  res.serverId).then((res) => {
                  // uploading.hide()
                  weui.toast('审核中！')
                })
              }
            });
          }
        })
      }
    }
}
</script>

<style lang="stylus" scoped>
.send-msg {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  border-top: 1px solid #cccccc;
  padding: 0 30px;
  box-sizing: border-box;

  .sendVoice {
    flex: 0 0 60px;
    height: 55px;
    background: url('./icon-voice.png') center center no-repeat;
    background-size: contain;

    &.sendMsg {
      background: url('./icon-ipt.png') center center no-repeat;
      background-size: contain;
    }
  }

  .sendImg {
    flex: 0 0 100px;
    height: 65px;
    background: url('./icon-img.png') center center no-repeat;
    background-size: contain;
  }

  .voice {
    flex: 1;
    height: 60px;
  }

  .ipt {
    flex: 0 0 360px;
    width: 360px;
    height: 56px;
    border: 1px solid #0081dc;
    padding-left: 16px;
    border-radius: 12px;
    outline: none;
    -webkit-appearance: none;
  }

  .sendBtn {
    margin-left: 20px;
    height: 60px;
    width: 150px;
    outline: none;
    border: none;
    background: #0081dc;
    border-radius: 8px;
    font-size: 32px;
    color: #ffffff;
  }
}
</style>

