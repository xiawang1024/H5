<template>
    <section class="three">        
        <div class="logo ani" swiper-animate-effect="flipInX" swiper-animate-duration="0.75s" swiper-animate-delay="1s"></div>
        <div class="left ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <div class="right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.75s" swiper-animate-delay="0s"></div>
        <section class="container ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s">
            <h2 class="name ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.75s" swiper-animate-delay="0.25s">[台庆地点]</h2>            
            <div class="map ani" swiper-animate-effect="fadeIn" swiper-animate-duration="0.75s" swiper-animate-delay="0.75s"></div>
            <div class="img ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="0.75s" swiper-animate-delay="1s"></div>
        </section>                
    </section>
</template>
<script>
export default {
    name:'three'
}
</script>

<style lang="stylus" scoped>
.three
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
    background #1f1a17 url('../common/bg.png') top center no-repeat
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
        .map
            position absolute
            top 250px
            left 0
            width 100%
            height 651px
            background url('./map.png') center center no-repeat
            background-size contain
        .img
            position absolute
            bottom 60px
            left 0
            width 100%
            height 34px
            background url('../common/text.png') left 50px center no-repeat
            background-size contain
</style>
