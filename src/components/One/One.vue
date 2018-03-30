<template>
    <section class="one">        
        <div class="img-1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
        <div class="img-2"></div>
        <section class="contain">
            <div class="img-3"></div>
            <div class="img-4"></div>
            <div class="img-5"></div>
        </section>
        <section class="ft">
            <div class="img-6"></div>
            <p class="text-1">4月22日 15：00  普罗·理想国</p>
        </section>
        <div class="arrow"></div>
    </section>
</template>
<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.one
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
    background url('../common/bg.gif') center center no-repeat, url('../common/bg.png') center center no-repeat
    background-size cover
    .img-1
        width 100%
        height 437px
        background url('./1.png') center center no-repeat
        background-size contain
    .img-2
        position absolute
        left 0
        right 0
        top 350px
        width 100%
        height 175px
        background url(./2.png) center center no-repeat
        background-size contain
    .contain
        position absolute
        top 515px
        left 0
        right 0
        width 100%
        height 426px
        background url('./border.png') center center no-repeat
        background-size contain
        .img-3
            position absolute
            top 20px
            left 0
            width 100%
            height 94px
            background url('./3.png') center center no-repeat
            background-size contain
        .img-4
            position absolute
            top 135px
            left 0
            width 100%
            height 174px
            background url('./4.png') center center no-repeat
            background-size contain
        .img-5
            position absolute
            top 322px
            left 0
            width 100%
            height 88px
            background url('../common/logo.png') center center no-repeat
            background-size contain
    .ft
        position absolute
        left 0
        right 0
        bottom 70px
        width 100%
        height 90px
        text-align center
        color #e4007e
        .img-6
            position absolute
            top 0
            left 0
            width 100%
            height 43px
            background url('./6.png') center center no-repeat
            background-size contain
        .text-1
            position absolute
            bottom 0
            left 0
            width 100% 
            font-size 18px           
</style>
