<template>
  <div class="pay">
      <p class="info">本直播为付费直播，免费试看5分钟</p>
      <p class="info">付费方式:（5元／场）</p>
      <form class="form">
          <p>
              <input type="text" placeholder="姓名" class="ipt">
          </p>
          <p>
              <input type="text" placeholder="手机号" class="ipt">
          </p>
      </form>
      <button class="btn" @click="payFor">去支付</button>
  </div>
</template>

<script>
import { pay } from 'api/index' 
export default {
    name:'pay',
    data() {
        return {
            name:'',
            phone:'',
            openId:''
        }
    },
    created() {
        this.openId = this._getQueryString('openId')
    },
    mounted () {

    },
    methods:{
        payFor() {
            if(!this.name) {
                return false
            }
            if(!this.phone) {
                return false
            }

            pay(this.name, this.phone, this.openId).then((res) => {
                let data = res.data
                if(data.success){
                    let returnUrl = `http://hndt.com/h5/yule/index.html`;
                    window.location.href = `/passport/pay/create.do?orderId=${data.orderId}&returnUrl=${encodeURIComponent(returnUrl)}`;
                }else{
                    
                }
            })
        },
        _getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        
    }
}
</script>

<style lang="stylus" scoped>
.pay
    position fixed
    z-index 99999
    top 0 
    bottom 0
    left 0
    right 0
    background rgba(0,0,0,.85)
    color #fff
    text-align center
    .info
        margin-top 10px
        font-size 18px
        &:first-child
            margin-top 40px
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


