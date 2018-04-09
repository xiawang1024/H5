<template>
    <div class="signUp">
        <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
            <svg class="bd-bg" width="70px" height="70px" viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" >
                <!-- Generator: Sketch 3.4.3 (16044) - http://www.bohemiancoding.com/sketch -->
                <title>shape01</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <rect id="shape01" class="color1-fill" fill="#ffffff" sketch:type="MSShapeGroup" x="0" y="0" width="70" height="70"></rect>
                </g>
            </svg>
        </div>
        <div class="contain">
            <div class="ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="2s">
                <svg class="border" version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="140 0 480 200" xml:space="preserve" preserveAspectRatio="none meet">                
                    <title>Rectangle 45</title>
                    <desc>Created with Sketch.</desc>
                    <g>
                    <path class="class14899129078660" d="M140,0v200h480V0H140z M614,194H146V6h468V194z" style="fill:#08865c;"></path>
                    <path class="class14899129078660" d="M605,185V15H155v170H605z M157,17h446v166H157V17z" style="fill:#08865c;"></path>
                    </g>
                </svg>
            </div>
            <div class="text ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="2.75s">
                预约报名
            </div>
            <div class="logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div>                    
            <div id="form">
                <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                    <!-- <span class="label">姓名</span> -->
                    <input type="text" class="ipt" v-model="name" placeholder="姓名">
                </p> 
                 <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                    <!-- <span class="label">性别</span> -->
                    <input type="text" class="ipt" v-model="sex" placeholder="性别">
                </p> 
                 <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                    <!-- <span class="label">年龄</span> -->
                    <input type="tel" class="ipt" v-model="age" placeholder="年龄">
                </p>              
                <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s">
                    <!-- <span class="label">电话</span> -->
                    <input type="tel" class="ipt" v-model="mobile" placeholder="电话">
                </p>
                <button class="sub-btn ani" @click="postUser" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.25s" :disabled="disabled">提交</button>
            </div>
            <!-- <img src="./qrcode-channel.png" alt="" class="qrcode ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="2s" > -->
        </div>                
        <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1s"></div>
        <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.25s"></div>
        <div class="bt-3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s"></div>
        <div class="bt-4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="1.75s"></div>
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
          sex:'',
          age:'',
          mobile:'',
          origin:'1056',
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
            if(!this.sex){
                Toast.warn('请填写性别')
                return 
            }
            if(!this.age){
                Toast.warn('请填写年龄')
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
            
            postUserInfo(this.name, this.sex, this.age, this.mobile, this.origin, this.openId).then((res) => {
                this.disabled = true;
                let data = res.data
                if(data.status == 1) {
                    this.qrName = this.name;                
                    this.qrMobile = this.mobile
                    this.qrCode = data.code
                    this.qrText = qrPre + this.openId
                    Toast.success({
                        message:'报名成功',
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
                        message:'报名失败，该微信已报名！',
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
    background url('../common/bg.jpg') center center no-repeat
    background-size cover 
    .bd-bg
        position absolute
        z-index 1024
        left 75px
        top 60px
        width 600px
        height 850px
        opacity 1
    .contain
        position absolute
        z-index 1025
        left 75px
        top 60px
        width 600px
        height 850px
        opacity 0.85
        .border
            position absolute
            left 140px
            top 40px
            width 320px
            height 120px
            opacity 0.85
        .text
            position absolute
            top 80px
            left 0
            width 100%
            text-align center
            font-size 44px
            font-weight bold
            color #08865c
            padding 0 30px
            box-sizing border-box
    .bt-1
        position absolute
        bottom 55px
        left 0px
        width 640px
        height 398px 
        background url('../common/left.png') center center no-repeat
        background-size cover
    .bt-2
        position absolute
        bottom 72px
        right 0px
        width 482px
        height 179px        
        background url('../common/right.png') center center no-repeat
        background-size cover
    .bt-3
        position absolute
        bottom 0px
        right 0px
        width 335px
        height 486px        
        background url('../common/up.png') center center no-repeat
        background-size cover
    .bt-4
        position absolute
        top 40px
        right 0px
        width 400px
        height 323px        
        background url('../common/top.png') center center no-repeat
        background-size cover
    #form
        position absolute
        top 200px
        left 70px
        width 460px
        .item
            width 100%
            height 66px
            display flex
            align-items center
            margin-bottom 25px
            .label
                width 100px
                font-size 36px
                color rgb(11, 192, 251)
            .ipt
                flex 1
                align-self stretch
                background none 
                border 1px solid rgb(15, 129, 91)
                border-radius 8px
                outline none
                box-sizing border-box
                padding-left 24px
                font-size 26px
                color #99cce8
        .sub-btn
            display block
            width 460px
            height 70px
            text-align center
            margin 60px auto 0
            background rgb(15, 129, 91)
            outline none
            border none 
            border-radius 8px
            font-size 30px
            letter-spacing 0.3em
            color #ffffff
    
</style>

