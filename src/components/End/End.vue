<template>
    <section class="end">        
        <div class="logo ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
        <div class="title"></div>
        <!-- <div class="left"></div>
        <div class="right"></div> -->
        <div class="text-wrap">
            <p class="img-1"></p>
            <p class="img-2"></p>
            <p class="img-3"></p>
            <p class="img-4"></p>
            <p class="img-5"></p>
        </div>
        <section class="container">
            <h2 class="name">[技术支持]</h2>
            <img src="./hndt-qrcode.png" alt="" class="img">
            <p class="text">敬请关注</p>
            <div class="img-1"></div>
        </section>        
        
    </section>
</template>
<script>
export default {
    name:'end'
}
</script>

<style lang="stylus" scoped>
.end
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
    background #1f1a17 url('../common/bg.png') top center no-repeat
    background-size contain
    .text-wrap
        position absolute
        bottom 420px
        left 0
        width 100%
        .img-1,.img-2,.img-3,.img-4,.img-5
            position absolute                
            left 0
            width 100%
            height 28px
        .img-1
            top 0
            background url('./1.png') center center no-repeat
            background-size contain
        .img-2
            top 39px
            background url('./2.png') center center no-repeat
            background-size contain
        .img-3
            top 78px
            background url('./3.png') center center no-repeat
            background-size contain
        .img-4
            top 117px
            background url('./4.png') center center no-repeat
            background-size contain
        .img-5
            top 156px
            background url('./5.png') center center no-repeat
            background-size contain
    .container
        position absolute
        top 120px
        left 50px
        right 50px
        bottom 90px        
        background rgba(0,0,0,0.6)
        .name
            position absolute
            top 125px
            left 0
            width 100%
            text-align center
            font-size 64px
            color #ffffff
            letter-spacing 10px
        .img
            position absolute
            top 400px
            left 207px
            width 236px
        .text
            position absolute
            top 680px
            left 0
            width 100%
            text-align center
            font-size 40px
            color #ffffff
            letter-spacing 8px
        .img-1
            position absolute
            bottom 50px
            left 0
            width 100%
            height 43px
            background url('../common/text.png') center center no-repeat
            background-size contain
</style>
