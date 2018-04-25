<template>
  <div class="pay">
      <p class="info">"素韵梅香”省会隆重纪念豫剧大师陈素真诞辰100 周年祥符调品赏会  5元即可欣赏一场名家、大咖云集的祥符饕餮盛宴。</p>
      <p class="info">付费方式:（5元／场）</p>
      <form class="form">
          <p>
              <input type="text" placeholder="姓名" class="ipt" v-model="name">
          </p>
          <p>
              <input type="tel" placeholder="手机号" class="ipt" v-model="phone">
          </p>
      </form>
      <button class="btn" @click="payFor">去支付</button>
  </div>
</template>

<script>
import { pay } from 'api/index' 
import Toast from 'v-toast'
export default {
    name:'pay',
    data() {
        return {
            name:'',
            phone:'',
            openid:''
        }
    },
    created() {
        this.openid = this._getQueryString('openid')
    },
    mounted () {

    },
    methods:{
        payFor() {
            if(!this.name) {
                Toast.warn('请填写您的姓名')
                return false
            }
            if(!this.phone) {
                Toast.warn('请填写您的电话')
                return false
            }
             if(!this._checkPhone(this.phone)) {
                Toast.warn('请填写正确的手机号')
                return 
            }

            pay(this.name, this.phone, this.openid).then((res) => {
                let data = res.data
                if(data.success){
                    let returnUrl = `http://hndt.com/h5/yuletest/index.html`;
                    window.location.href = `http://a.weixin.hndt.com/passport/pay/pay_for_live.do?orderId=${data.orderId}&returnUrl=${encodeURIComponent(returnUrl)}&openId=${this.openid}`;
                }else{
                    Toast.error({
                        message:'好像哪里出现问题了！',
                        duration:2000
                    })
                }
            })
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
    }
}
</script>

<style lang="stylus" scoped>
.pay
    position fixed
    z-index 1024
    top 0 
    bottom 0
    left 0
    right 0
    background rgba(0,0,0,.85)
    color #fff
    text-align center
    padding 0 10px
    box-sizing border-box
    .info
        margin-top 10px
        font-size 18px
        line-height 1.5
        &:first-child
            margin-top 20px
    .form
        margin-top 20px
        .ipt
            width 200px
            height 40px
            margin-bottom 10px
            padding-left 8px
            border-radius 4px
            box-sizing border-box
    .btn
        width 200px
        height 40px
        margin-top 20px
        background #1AAD19
        border none 
        border-radius 4px
        outline none
        font-size 18px
        color #ffffff
        
</style>


