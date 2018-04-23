<template>
    <div class="signUp">
        <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div>  
        <div class="logoc ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div> 
        <div class="black ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
            <svg class="bd-bg" viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" >
                <!-- Generator: Sketch 3.4.3 (16044) - http://www.bohemiancoding.com/sketch -->
                <title>shape01</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <rect id="shape01" class="color1-fill" fill="#000" sketch:type="MSShapeGroup" x="0" y="0" width="70" height="70"></rect>
                </g>
            </svg>
            <div class="body">
                <div class="title">[报名参加]</div>                                              
                <div v-if="!isShowToast">
                    <form class="signup-form ani" ref="form" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s">
                        <input type="text" class="ipt" placeholder="姓名" v-model="username" @focus="handleFocus" @blur="handleBlur">
                        <input type="tel" class="ipt" placeholder="电话" v-model="mobile" @focus="handleFocus">
                        
                        <input type="text" class="ipt" placeholder="职业" v-model="work" @focus="handleFocus">
                        <input type="tel" class="ipt" placeholder="年龄" v-model="age" @focus="handleFocus">
                        <input type="tel" class="ipt" placeholder="陪同人数" v-model="personNum" @focus="handleFocus">
                    </form>
                    <button class="signUpBtn ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.75s" swiper-animate-delay="0.5s" @click="postUser">提交</button>
                </div>
                <div class="toast animated fadeIn" v-else>
                    <div class="text-wrap">
                        <p class="text-1">
                            感谢您对My Radio的关注和支持，我们已收到您的信息。 
                        </p>
                        <p class="text-2">
                            如果您有幸成为我们现场嘉宾，我 们稍后将以短信形式与您联系。
                        </p>
                    </div>
                    <button class="okBtn" @click="closeToast">完成</button>
                </div>
            </div>
        </div>
        <div class="contain">            
            <div class="bg ani" swiper-animate-effect="zoomIn" swiper-animate-duration="2s" swiper-animate-delay="1.25s"></div>
            <div class="text ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
            <div class="text-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>    <img src="" alt="" class="qrcode">             
        </div>                
        <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1s"></div>
        <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.25s"></div>
        
    </div>
</template>

<script>

const qrPre = 'http://a.weixin.hndt.com/user/verify/'
import { postUserInfo, checkOpenId } from '@/api/index'
import Toast from 'v-toast'
// import QrCode from 'vue-qrcode-component'
export default {
  name:'signUp',
  data () {
      return {
            isShowToast:false,
            isLoad:false,
            isNewUser:true,
            title:'报名',          
            username:'',
            mobile:'',
            work:'',
            age:'',
            personNum:'',
            origin:'900',
            openId:'',
            isHidden:true,
      }
  },
  created () {
        
        // let clientWidth = document.body.clientWidth
        // this.qrSize = parseInt(120 * clientWidth / 375 )
        this.openId = this._getQueryString('openId')
  },
  mounted () {
      
  },
  methods:{
        postUser() {

            if(!this.username) {
                Toast.warn('请填写您的姓名')
                return 
            }

            if(!this.mobile) {
                Toast.warn('请填写您的电话')
                return 
            }

            if(!this._checkPhone(this.mobile)) {
                Toast.warn('请填写正确的手机号')
                return 
            }

            if(!this.work) {
                Toast.warn('请填写您的职业')
                return 
            }
            if(!this.age) {
                Toast.warn('请填写您的年龄')
                return 
            }
            if(!this.personNum) {
                Toast.warn('请填写您的随从人数')
                return 
            }
            
            postUserInfo(this.username, this.mobile, this.work, this.age, this.personNum, this.origin, this.openId).then((res) => {
                
                let data = res.data
                if(data.status == 1) {
                   Toast.info({
                        message:'玩命提交中...',
                        duration:1000
                    })

                    setTimeout(() => {
                        this.isShowToast = true
                        this._clearfIpt()
                    }, 1250);
                }else{
                    Toast.error({
                        message:'报名失败，该微信已报名！',
                        duration:2000
                    })
                    setTimeout(() => {
                        this.isShowToast = true
                    }, 2250); 
                }
                
            }).catch(() => {
                Toast.error({
                    message:'报名失败，请重新提交！',
                    duration:2000
                })
                
            })
            
        },
        handleFocus() {
            this.isHidden = false
        },
        handleBlur() {
            this.isHidden = true
        },
        closeToast() {
            this.isShowToast = false
        },
        _getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        _checkPhone(phone) { 
            if(!(/^1[345678]\d{9}$/.test(phone))){                 
                return false; 
            }else{
                return true
            }
        },
        _clearfIpt() {
            this.username = ''
            this.mobile = ''
            this.work = ''
            this.age = ''
            this.personNum = ''
        },
  }
}
</script>


<style lang="stylus" scoped>

.signUp
    width 100%
    height 100%
    background #0b0812
    .logo
        position absolute
        top 30px
        left 30px
        width 305px
        height 81px
        background url('../common/logo.png') center center no-repeat
        background-size cover
    .logoc
        position absolute
        top 30px
        right 30px
        width 129px
        height 64px
        background url('../common/logoc.png') center center no-repeat
        background-size cover
    .black
        position absolute
        top 120px
        left 50px
        width 650px
        z-index 100
        color #ffffff
        .body
            position relative
            top 0
            left 0
            width 100% 
            z-index 1024
            text-align center
            overflow hidden
            padding 0 40px 30px 40px
            box-sizing border-box
            .title
                width 100%
                margin 20px 0 40px 0
                text-align center
                font-size 63px
                letter-spacing 12px  
            .toast               
                width 420px
                margin 0 auto
                .text-wrap
                    width 420px
                    background #ffffff
                    padding 60px 30px
                    border 1px solid #e4007e
                    border-radius 6px
                    line-height 1.8125
                    font-size 20px
                    color #666
                    text-align left
                    box-sizing border-box
                    .text-1
                        margin-bottom 10px
                .okBtn
                    margin-top 26px 
                    width 420px
                    height 60px
                    line-height 60px
                    border-radius 6px
                    font-size 30px
                    color #ffffff
                    outline none
                    border none
                    background #e4007e 
        .bd-bg
            position absolute            
            left 0
            top 0              
            width 100%
            height 1000px
            opacity 0.75
    .contain
        position absolute
        left 0
        top 120px
        width 100%
        height 850px
        opacity 0.85
        .bg
            position absolute
            z-index 10
            left 0
            top 120px
            width 100%
            height 812px
            opacity 0.85
            background url('../common/bg.png') center center no-repeat
            background-size cover      
        .text
            position absolute
            top 0
            left 0
            width 100%
            height 854px
            background url('../common/title-1.png') center center no-repeat
            background-size contain
        .text-1
            position absolute
            top 610px
            left 290px
            width 357px
            height 272px
            background url('../common/title-2.png') center center no-repeat
            background-size contain
    .bt-1
        position absolute
        z-index 1024
        top 1040px
        left 0px
        width 100%
        height 38px 
        background url('../common/bt-1.png') center center no-repeat
        background-size contain
    .bt-2
        position absolute
        z-index 1024
        top 1090px
        right 0px
        width 100%
        height 28px        
        background url('../common/bt-2.png') center center no-repeat
        background-size contain
    .signup-form
        margin 0 auto                   
        width 420px
        .ipt
            display inline-block
            width 100%
            height 60px
            line-height 60px
            margin-bottom 20px
            border 1px solid #e4007e
            border-radius 6px
            outline none
            background #fff
            box-sizing border-box
            font-size 24px
            color #000
            padding-left 26px
    .signUpBtn
        margin-top 10px
        width 420px
        height 60px
        line-height 60px
        box-sizing border-box
        border-radius 6px
        outline none
        border none 
        background #e4007e
        font-size 30px
        color #fff
    
</style>

