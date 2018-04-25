<template>
    <div class="one">
        <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.75s"></div>  
        <div class="logoc ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.75s"></div>                  
        <div class="contain">
            <div class="bg ani" swiper-animate-effect="zoomIn" swiper-animate-duration="2s" swiper-animate-delay="1.25s"></div>
            <div class="text ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
            <div class="text-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
        </div>
        <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s"></div>
        <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="2s"></div>              
    </div>
</template>

<script>


export default {
  name:'one'
}
</script>


<style lang="stylus" scoped>
.one
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
        bottom 120px
        left 0px
        width 100%
        height 38px 
        background url('../common/bt-1.png') center center no-repeat
        background-size contain
    .bt-2
        position absolute
        bottom 70px
        right 0px
        width 100%
        height 38px        
        background url('../common/bt-2.png') center center no-repeat
        background-size contain   
</style>

