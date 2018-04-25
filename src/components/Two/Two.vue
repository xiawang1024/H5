<template>
    <div class="two">
        <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>  
        <div class="logoc ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="1.5s"></div>            
        <div class="black ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
            <svg class="bd-bg" viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" >
                <!-- Generator: Sketch 3.4.3 (16044) - http://www.bohemiancoding.com/sketch -->
                <title>shape01</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <rect id="shape01" class="color1-fill" fill="#000000" sketch:type="MSShapeGroup" x="0" y="0" width="70" height="70"></rect>
                </g>
            </svg>
            <div class="body">
                <div class="title">[活动介绍]</div>
                <img src="http://www.hndt.com/h5/9000423/imgs/1.png" alt="" class="img">
                <div class="text">
                    创意市集————《潮市》
                </div>
                <div class="text desc">
                    两天时间，在七盛角两条商业街上设置创意市集区，开封小吃、台湾美食、生活手作，原创尖货应有尽有；
                </div>
               
            </div>
        </div>
        <div class="contain">
            <div class="bg ani" swiper-animate-effect="zoomIn" swiper-animate-duration="2s" swiper-animate-delay="0.75s"></div>
            <div class="text ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.05s"></div>
            <div class="text-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.05s"></div>
        </div>
        <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1.25s"></div>
        <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="1.75s"></div>
    </div>
</template>

<script>


export default {
  name:'two'
}
</script>


<style lang="stylus" scoped>

.two
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
    .black
        position absolute
        top 120px
        left 50px
        width 650px
        z-index 100
        color #ffffff
        .body
            position absolute
            z-index 1024
            overflow hidden
            padding 0 40px
            box-sizing border-box
            .title
                width 100%
                margin 20px 0 40px 0
                text-align center
                font-size 63px
                letter-spacing 12px      
            .img
                width 100% 
                border 1px solid #fff 
                padding 10px
                box-sizing border-box           
            .text
                margin-top 60px
                font-size 27px
                line-height 1.815
                &.desc
                    text-indent 2em
                    margin-top 10px
                &.info
                    margin-top 20px
                    color #e4007f
                    text-align center
        .bd-bg
            position absolute            
            left 0
            top 0              
            width 100%
            height 1000px
            opacity 0.75
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
        z-index 1024
        bottom 120px
        left 0px
        width 100%
        height 38px 
        background url('../common/bt-1.png') center center no-repeat
        background-size contain
    .bt-2
        position absolute
        z-index 1024
        bottom 70px
        right 0px
        width 100%
        height 38px        
        background url('../common/bt-2.png') center center no-repeat
        background-size contain
    
    
</style>

