<template>
  <div class="pay">
    <div class='title'></div>
    <div class="info-wrap">
      <div class='titlec'></div>
      <button v-if="isEffectiveDate" class="btn" @click="payFor">{{msg}}</button>
      <button v-else class="btn" @click="tips">预约</button>
      <p class="tips">每席 <span class="red" style="color:red">5</span>元，席位递减中 </p>
    </div>
    <div class="bottom">
      <p class="desc">抢票时间：9月28日早8点</p>
      <p class="desc">截止时间：9月29日15点</p>
      <p class="desc">直播时间：9月29日14点至结束</p>
    </div>
    <simplert :useRadius="true" :useIcon="true" ref="simplert">
    </simplert>
  </div>
</template>

<script>
import { pay,visit } from 'api/index'
import Simplert from 'vue2-simplert'
import {WeChat} from 'weChat/util'
import Bus from 'base/js/bus'
const weChat = new WeChat()
export default {
    name:'pay',
    components:{
      Simplert
    },
    data() {
        return {
          isEffectiveDate:false,
          isLiveBegin:false,
          isPay:false,
          msg:'预约'
        }
    },
    created() {

    },
    mounted () {
      this.fetchVisit()
    },
    methods:{
      fetchVisit() {
        let userInfo = JSON.parse(weChat.getStorage('WXHNDTOPENID'))
        let openid = userInfo.openid;
        visit(openid).then(res => {

          let {code,data} = res.data
          if(!code){
            let {isEffectiveDate,isLiveBegin} = data
            this.isEffectiveDate = isEffectiveDate
            this.isLiveBegin = isLiveBegin
            if(isEffectiveDate) {
              let {isPay} = data
              this.isPay = isPay
            }
            if(!this.isLiveBegin && this.isPay) {

              this.msg = '已预约'
              return
            }
            if(this.isLiveBegin && this.isPay) {
              this.msg = '看直播'
              this._successTips()
              return
            }
            if(!this.isPay) {
              this.msg = '预约'
            }
          }
        })
      },
      tips() {
        if(!this.isEffectiveDate) {
          //预约未开始
          this._errorTips('预约通道暂未开启')
          return
        }
      },
      payFor() {
        if(this.isEffectiveDate) {

          //未开始已付费的用户
          if(!this.isLiveBegin && this.isPay) {
            this._warnTips('恭喜您成功预订网络席位','请于2018年9月29日14点打开视频链接，第一时间关注现场动态，并可参与网络互动')
            this.msg = '已预约'
            return
          }
          //已开始，已付费
          if(this.isLiveBegin && this.isPay) {
            this.msg = '看直播'
            this._successTips()
            return
          }
          //已开始，未付费
          if(!this.isPay) {
            this.msg = '预约'
            let userInfo = JSON.parse(weChat.getStorage('WXHNDTOPENID'))
            let openid = userInfo.openid;
            // let openid = 'ofiRq0QVHAYVFhLN48DTwvPv-qt8';
            pay(openid).then((res) => {
              let data = res.data
              console.log(res)
              if(data.success){
                  let returnUrl = `http://a.weixin.hndt.com/h5/1066/paylive/index.html`;
                  window.location.href = `http://a.weixin.hndt.com/passport/pay/pay_for_live.do?orderId=${data.orderId}&returnUrl=${encodeURIComponent(returnUrl)}`;
              }else{
                  this._errorTips('好像哪里出现问题了！')
              }
            })
            return
          }
        }

      },
      closePay() {
        Bus.$emit('closePayPage')
      },
      _successTips() {

        let obj = {
          title: '直播已开始',
          type: 'success',
          onClose:this.closePay,
          customCloseBtnText:'看直播'
        }
        this.$refs.simplert.openSimplert(obj)
      },
      _warnTips(title,message) {
        let obj = {
          title,
          message,
          type: 'warning',
          customCloseBtnText:'知道了'
        }
        this.$refs.simplert.openSimplert(obj)
      },
      _errorTips(message) {
        let obj = {
          title: 'ERROR',
          message,
          type: 'error',
          onClose: this.onClose
        }
        this.$refs.simplert.openSimplert(obj)
      }
    }
}
</script>

<style lang="stylus" scoped>
.pay {
  position: fixed;
  z-index: 1024;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('./bg.png') center center no-repeat;
  background-size: cover;
  color: #000;
  text-align: center;
  padding: 0 10px;
  box-sizing: border-box;

  .title {
    position: absolute;
    top: 100px;
    left: 50px;
    width: 417px;
    height: 211px;
    background: url('./title.png') center center no-repeat;
    background-size: cover;
  }

  .info-wrap {
    position: absolute;
    top: 420px;
    left: 0;
    width: 100%;
    color: #fff;
    text-align: center;

    .titlec {
      width: 100%;
      height: 133px;
      background: url('./titlec.png') center center no-repeat;
      background-size: contain;
    }

    .btn {
      margin-top: 60px;
      width: 288px;
      height: 90px;
      border-radius: 90px;
      font-size: 30px;
      border: none;
      outline: none;
      color: #fff;
      background: #ed2f4a;
    }

    .tips {
      margin-top: 30px;
      font-size: 27px;
    }
  }

  .bottom {
    position: absolute;
    left: 50px;
    bottom: 60px;
    text-align: left;
    color: #fff;
    font-size: 26px;

    .desc {
      margin-bottom: 28px;
    }
  }
}
</style>


