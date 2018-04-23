<template>
    <div class="two">
        <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div>  
        <div class="logoc ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div>            
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
                <div class="text">
                    1、原创尖货创意市集——《朝/潮市》
                </div>
                <div class="text desc">
                    两天时间，在七盛角两条商业街上设置创意市集区，除了开封本土＆周边原创优质创业者展示优质产品外，还会有开封非物质文化遗产作品进行展出；将古典“潮流”和现代潮流放在一起。
                </div>
                <div class="text">
                    2、网红探店寻味美食——《寻味七盛角》
                </div>
                <div class="text desc">
                    4.30日，主持人带队，根据“吃货地图”寻找老字号店铺，以及“潮市”上的美食；
                </div>
                <div class="text">
                    3、粉丝见面会——《放肆青春》   
                </div>
                <div class="text desc">
                    4.30日7:30，MyRadio全线主持悉数登场，在Dj、歌者、模特的角色中自由转场，一场大秀在七盛角引爆。届时河南广播网进行现场直播，还可互动赢大奖！
                </div>
                <div class="text info">活动详情请锁定FM90.0 My Radio。</div>
            </div>
        </div>
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
            .text
                font-size 27px
                line-height 1.815
                &.desc
                    text-indent 2em
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
        bottom 80px
        right 0px
        width 100%
        height 28px        
        background url('../common/bt-2.png') center center no-repeat
        background-size contain
    
    
</style>

