<template>
    <div class="signUp">
        <div class="from" v-show="isLoad && isNewUser">
            <div class="logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div>
            <div class="title ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.5s">报名</div>
            <div class="title-bottom ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
            <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div>
            <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.25s"></div>
            <div class="bt-3 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
            <div class="bt-4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.75s"></div>
            <div id="form">
                <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                    <span class="label">姓名</span>
                    <input type="text" class="ipt" v-model="name">
                </p>              
                <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s">
                    <span class="label">电话</span>
                    <input type="tel" class="ipt" v-model="mobile">
                </p>
                <button class="sub-btn ani" @click="postUser" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.25s" :disabled="disabled">提交</button>
            </div>
            <img src="./qrcode-channel.png" alt="" class="qrcode ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="2s" >
        </div>                
        <transition name="fade">
            <div class="qr-wrap" ref="qrWrap" id="qrWrap" v-show="isLoad && !isNewUser"> 
                <h2 class="title">入场凭证<span class="str">（妥善保管）</span></h2>
                <div class="logoc"></div>
                <div class="user-info">
                    <p class="item">
                        <span class="tag">编号：</span>
                        <span class="text">{{qrCode}}</span>
                    </p>
                    <p class="item">
                        <span class="tag">姓名：</span>
                        <span class="text">{{qrName}}</span>
                    </p>
                    <p class="item">
                        <span class="tag">电话：</span>
                        <span class="text">{{qrMobile}}</span>
                    </p>
                </div>
                <qr-code class="qr" :text="qrText" :size="qrSize"></qr-code>
            </div>
        </transition>
    </div>
</template>

<script>

const qrPre = 'http://a.weixin.hndt.com/user/verify/'
import { postUserInfo, checkOpenId } from '@/api/index'
import Toast from 'v-toast'
import QrCode from 'vue-qrcode-component'
export default {
  name:'signUp',
  components:{
      QrCode
  },
  data () {
      return {
          isLoad:false,
          isNewUser:true,
          title:'报名',          
          name:'',
          mobile:'',
          origin:'881',
          openId:'',
          disabled:false,
          qrCode:'',
          qrSize:120,
          qrText:'',
          qrName:'',
          qrUnit:'',
          qrMobile:''
      }
  },
  created () {
        
        let clientWidth = document.body.clientWidth
        this.qrSize = parseInt(120 * clientWidth / 375 )
        this.openId = this._getQueryString('openId')
  },
  mounted () {
      //模拟异步请求，判断openId是否为已报名用户
    setTimeout(() => {
        
        checkOpenId(this.openId, this.origin).then((res) => {
            let data = res.data
            this.isLoad = true

            if(data.status == 1) {
                this.isNewUser = false
                this.qrName = data.data.name;                    
                this.qrMobile = data.data.mobile;
                this.qrCode = data.data.code
                this.qrText = qrPre + this.openId
                this.$nextTick(() => {
        
                })
            }else{
                this.isNewUser = true
            }
        })
    },20)
    setTimeout(() => {
        this.isLoad = true
    },1000)
  },
  methods:{
        postUser() {

            if(!this.name){
                Toast.warn('请填写姓名')
                return 
            }
            if(!this.mobile){
                Toast.warn('请填写手机号')
                return 
            }
            if(!this._checkPhone(this.mobile)) {
                Toast.warn('请填写正确的手机号')
                return 
            }
            
            postUserInfo(this.name, this.mobile, this.origin, this.openId).then((res) => {
                this.disabled = true;
                let data = res.data
                if(data.status == 1) {
                    this.qrName = this.name;                
                    this.qrMobile = this.mobile
                    this.qrCode = data.code
                    this.qrText = qrPre + this.openId
                    Toast.success({
                        message:'提交成功，正在生成入场凭证',
                        duration:3000
                    })
                    setTimeout(() => {
                        this.isNewUser = false
                        this.disabled = false
                        this.$nextTick(() => {

                        })
                    },3000)
                }else{
                    Toast.error({
                        message:'报名失败，改微信已报名！',
                        duration:2000
                    })
                    this.disabled = false
                }
                
            }).catch(() => {
                Toast.error({
                    message:'报名失败，请重新提交！',
                    duration:2000
                })
                this.disabled = false
            })
            
        },
        _getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        _checkPhone(phone) { 
            if(!(/^1[34578]\d{9}$/.test(phone))){                 
                return false; 
            }else{
                return true
            }
        }
  }
}
</script>


<style lang="stylus" scoped>
.qrcode
    position absolute
    top 850px
    left 275px
    width 200px
.signUp
    width 100%
    height 100%
    background-color #121532
    .logo
        position absolute
        top 20px
        left 0
        width 100%
        height 120px
        background url('./icon-hndt-channel.png') center center no-repeat
        background-size contain
    .title
        position absolute
        top 180px
        left 0
        width 100%
        font-size 42px
        color #0bc0fb
        text-align center
        letter-spacing 10px
    .title-bottom
        position absolute
        top 210px
        left 0
        width 100%
        height 34px        
        background url('./title-border.png') center center no-repeat
        background-size contain
    #form
        position absolute
        top 360px
        left 145px
        width 460px
        .item
            width 100%
            height 66px
            display flex
            align-items center
            margin-bottom 40px
            .label
                width 100px
                font-size 36px
                color rgb(11, 192, 251)
            .ipt
                flex 1
                align-self stretch
                background none 
                border 1px solid #0ca9e0
                outline none
                box-sizing border-box
                padding-left 24px
                font-size 26px
                color #99cce8
        .sub-btn
            display block
            width 300px
            height 70px
            text-align center
            margin 100px auto 0
            background linear-gradient(#f29a39,#e05712)
            outline none
            border none 
            border-radius 70px
            font-size 30px
            letter-spacing 0.3em
            color #ffffff
    .bt-1
        position absolute
        bottom 55px
        left 0px
        width 295px
        height 241px        
        background url('./bt-1.png') center center no-repeat
        background-size cover
    .bt-2
        position absolute
        bottom 72px
        right 0px
        width 345px
        height 224px        
        background url('./bt-2.png') center center no-repeat
        background-size cover
    .bt-3
        position absolute
        bottom 0px
        left 0px
        width 375px
        height 139px        
        background url('./bt-3.png') center center no-repeat
        background-size cover
    .bt-4
        position absolute
        bottom 0px
        right 0px
        width 492px
        height 217px        
        background url('./bt-4.png') center center no-repeat
        background-size cover
    .qr-wrap
        position absolute
        top 180px
        left 181px
        width 388px
        height 777px        
        text-align center
        background url('./qr-bg.png') center center no-repeat
        background-size cover
        .title
            position relative
            top -80px
            font-size 40px
            .str
                color #f00
                font-size 18px
                letter-spacing 0
        .logoc
            position absolute
            top 60px
            left 0
            width 100%
            height 60px            
            background url('./logo.png') center center no-repeat
            background-size contain
        .qr
            position absolute            
            bottom 100px            
            margin 0 auto
            margin-left 50%
            transform translateX(-50%)
        .user-info
            position absolute
            top 150px
            left 34px
            width 320px
            border 1px solid #6bb3da
            border-radius 12px
            padding 12px 0
            box-sizing border-box
            font-size 26px
            .item
                line-height 1.8
                display flex
                .tag
                    width 110px
                .text
                    flex 1
                    text-align left
</style>

