<template>
    <div class="signUp">
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
                        message:'提交成功！',
                        duration:3000
                    })
                    
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
            if(!(/^1[3456789]\d{9}$/.test(phone))){                 
                return false; 
            }else{
                return true
            }
        }
  }
}
</script>


<style lang="stylus" scoped>

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
</style>

