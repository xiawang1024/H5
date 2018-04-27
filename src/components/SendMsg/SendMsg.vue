<template>
    <div class="send-msg">
        <input class="ipt" type="text" v-model="msg">
        <button class="sendBtn" @click="sendMsg">发送</button>
    </div>
</template>


<script>
import { getUser, postMsg } from 'api/index'
import Toast from 'v-toast'
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
        this.openid = this._getQueryString('openId')
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
        },100)
    },
    methods:{
        _getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        sendMsg() {
            if(!this.msg){
                Toast.warn('消息不能为空！')
                return 
            }
            this._postMsg()
            this.$emit('sendMsg')
        },
        _postMsg() {
            postMsg(0, 8 , this.creater, this.fromUid, this.msg).then((res) => {
                Toast.success('消息发送成功，等待审核！')
                this.msg = ''
                console.log(res)
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.send-msg
    position absolute
    bottom 0
    left 0
    right 0
    width 100%
    height 60px
    display flex
    align-items center
    border-top 1px solid #cccccc
    padding 0 15px
    box-sizing border-box
    .ipt
        flex 1
        height 40px
        border 1px solid #0081dc
        padding-left 8px
        border-radius 6px
        outline none
    .sendBtn
        margin-left 10px
        height 40px
        width 75px    
        outline none 
        border none
        background #0081dc
        border-radius 4px
        font-size 16px
        color #ffffff
</style>

