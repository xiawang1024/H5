<template>
    <section class="two">        
        <div class="logo ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.75s" swiper-animate-delay="3.5s"></div>
        <div class="left ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <div class="right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <div class="title ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.75s" swiper-animate-delay="4.25s"></div>
        <section class="container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s">
            <div class="title-1 ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s"></div>
            <div class="text-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s"></div>
            <div class="text-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="1.25s"></div>
            <div class="text-3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="2s"></div>
            <div class="text-4 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="2.75s"></div>
            <div class="text-5 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="3.5s"></div>
            <div class="time-location">
                <div class="time ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.75s" swiper-animate-delay="3.5s"></div>
                <div class="location ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.75s" swiper-animate-delay="3.5s"></div>
            </div>
        </section>        
        
    </section>
</template>
<script>
export default {
    name:'two'
}
</script>

<style lang="stylus" scoped>
.two
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
    background #1f1a17 url('../common/bg.png') top center no-repeat
    background-size contain
    .title
        top 600px
        height 200px
    .container
        position absolute
        top 120px
        left 50px
        right 50px
        bottom 90px        
        background rgba(0,0,0,0.6)
        .title-1
            position absolute
            top 60px
            left 0
            width 100%
            height 168px
            background url('../common/title.png') center center no-repeat
            background-size contain
        .text-1,.text-2,.text-3,.text-4,.text-5
            position absolute            
            left 0
            width 100%
            height 40px
        .text-1
            top 300px            
            background url('./1.png') center center no-repeat
            background-size contain
        .text-2
            top 380px            
            background url('./2.png') center center no-repeat
            background-size contain
        .text-3
            top 460px            
            background url('./3.png') center center no-repeat
            background-size contain
        .text-4
            top 540px            
            background url('./4.png') center center no-repeat
            background-size contain
        .text-5
            top 620px            
            background url('./5.png') center center no-repeat
            background-size contain
        .time-location
            position absolute
            bottom 0
            left 0
            width 440px
            .time
                position absolute
                bottom 110px
                left 0
                width 100%
                height 114px
                background url('./time.png') center center no-repeat
                background-size contain    
            .location 
                position absolute
                bottom 30px
                left 0
                width 100%
                height 40px
                background url('./location.png') center center no-repeat
                background-size contain 
</style>
