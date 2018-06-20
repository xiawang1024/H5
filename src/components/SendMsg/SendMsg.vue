<template>
    <div class="send-msg">
        <input class="ipt" type="text" v-model="msg">
        <button class="sendBtn" @click="sendMsg">发送</button>
    </div>
</template>


<script>
import { getUser, postMsg } from 'api/index'
import { WeChat } from 'weChat/util'
import weui from 'weui.js';
import HU_DONG_ID from '@/config.js'

const weChat = new WeChat()
export default {
    name:'send-msg',
    data() {
        return {
            msg:'',
            openid:'',
            creater:'',
            fromUid:''
        }
    },
    mounted() {
        let userInfo = JSON.parse(weChat.getStorage('WXHNDTOPENID'))
        this.openid = userInfo.openid;
        setTimeout(() => {
          getUser(this.openid).then((res) => {
              let data = res.data
              if(data.status === 1) {
                  this.creater = data.data.name
                  this.fromUid = data.data.id
              }else{
                  console.log('获取用户信息失败')
              }
          }).catch((err) => {
              console.log(err)
          })
        },20)
    },
    methods:{
      sendMsg() {
        if(!this.msg){
            weui.topTips('消息不能为空！')
            return
        }
        this._postMsg()
        this.$emit('sendMsg')
      },
      _postMsg() {
        postMsg(0, HU_DONG_ID , this.creater, this.fromUid, this.msg).then((res) => {
            weui.toast('发送成功，等待审核！')
            this.msg = ''
            console.log(res)
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

  .ipt {
    flex: 1;
    height: 60px;
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

