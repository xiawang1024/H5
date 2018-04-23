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
                <div id="form">
                    <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                        <!-- <span class="label">姓名</span> -->
                        <input type="text" class="ipt" v-model="name" placeholder="姓名">
                    </p> 
                    <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                        <!-- <span class="label">性别</span> -->
                        <input type="text" class="ipt" v-model="mobile" placeholder="电话">
                    </p> 
                    <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                        <!-- <span class="label">年龄</span> -->
                        <input type="tel" class="ipt" v-model="age" placeholder="职业">
                    </p>              
                    <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s">
                        <!-- <span class="label">电话</span> -->
                        <input type="tel" class="ipt" v-model="mobile" placeholder="年龄">
                    </p>
                    <p class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s">
                        <!-- <span class="label">电话</span> -->
                        <input type="tel" class="ipt" v-model="mobile" placeholder="陪同人数">
                    </p>
                    <button class="sub-btn ani" @click="postUser" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.25s" :disabled="disabled">提交</button>
                </div>
            </div>
        </div>
        <div class="contain">            
            <div class="bg ani" swiper-animate-effect="zoomIn" swiper-animate-duration="2s" swiper-animate-delay="1.25s"></div>
            <div class="text ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
            <div class="text-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
            
           
        </div>                
        <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1s"></div>
        <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.25s"></div>
        
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
            padding 0 40px
            box-sizing border-box
            .title
                width 100%
                margin 20px 0 40px 0
                text-align center
                font-size 63px
                letter-spacing 12px   
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
        bottom 120px
        left 0px
        width 100%
        height 38px 
        background url('../common/bt-1.png') center center no-repeat
        background-size contain
    .bt-2
        position absolute
        z-index 1024
        bottom 80px
        right 0px
        width 100%
        height 28px        
        background url('../common/bt-2.png') center center no-repeat
        background-size contain
    #form       
        width 460px
        margin 0 auto
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
                background #fff 
                border 1px solid #e4007e
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
            background #e4007e
            outline none
            border none 
            border-radius 8px
            font-size 30px
            letter-spacing 0.3em
            color #ffffff
    
</style>

