<template>
    <div class="one">
        <div class="logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div>            
        <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.25s"></div>
        <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
        <div class="bt-3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
        <div class="bt-4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>
        <div class="from">
            <div class="text ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.5s">河南建业艾美酒店</div>
            <div class="text-1 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="1s">
                关注魅力881官方微信，申请电子卡券，凭卡券用餐尊享魅力881粉丝福利折扣。
            </div>
            <div class="text-2 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="1.5s">
                截至4月30日 尊享6.6折！
            </div>
            <img src="" alt="" class="hotel ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
            <img src="" alt="" class="qrcode ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="2.25s">
        </div>                
       
    </div>
</template>

<script>


export default {
  name:'one'
}
</script>


<style lang="stylus" scoped>
.qrcode
    position absolute
    bottom 80px
    left 275px
    width 200px
.one
    width 100%
    height 100%
    background url('../common/bg.jpg') center center no-repeat
    background-size cover
    .text
        position absolute
        top 200px
        left 0
        width 100%
        text-align center
        font-size 38px
        color #ffffff
        padding 0 30px
        box-sizing border-box
    .text-1
        position absolute
        top 270px
        left 0
        width 100%
        text-align center
        line-height 1.6
        font-size 32px
        color #ffffff
        padding 0 30px
        box-sizing border-box
    .text-2
        position absolute
        top 400px
        left 0
        width 100%
        text-align center
        font-size 32px
        color #ffffff
        padding 0 30px
        box-sizing border-box
    .hotel
        position absolute
        top 480px
        left 0
        width 600px
        margin-left 75px
        padding 0 30px
        box-sizing border-box
    .logo
        position absolute
        top 20px
        left 0
        width 100%
        height 120px
        // background url('./icon-hndt-channel.png') center center no-repeat
        // background-size contain    
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
    
    
</style>

