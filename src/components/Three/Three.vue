<template>
    <div class="three">
        <div class="logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.2s"></div>            
        <div class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.75s">
            <svg class="bd-bg" width="70px" height="70px" viewBox="0 0 70 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" preserveAspectRatio="none meet" >
                <!-- Generator: Sketch 3.4.3 (16044) - http://www.bohemiancoding.com/sketch -->
                <title>shape01</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <rect id="shape01" class="color1-fill" fill="#ffffff" sketch:type="MSShapeGroup" x="0" y="0" width="70" height="70"></rect>
                </g>
            </svg>
        </div>
        <div class="contain">
            <div class="ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="2s">
                <svg class="border" version="1.1" id="图层_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="140 0 480 200" xml:space="preserve" preserveAspectRatio="none meet">                
                    <title>Rectangle 45</title>
                    <desc>Created with Sketch.</desc>
                    <g>
                    <path class="class14899129078660" d="M140,0v200h480V0H140z M614,194H146V6h468V194z" style="fill:#08865c;"></path>
                    <path class="class14899129078660" d="M605,185V15H155v170H605z M157,17h446v166H157V17z" style="fill:#08865c;"></path>
                    </g>
                </svg>
            </div>
            <div class="text ani" swiper-animate-effect="zoomIn" swiper-animate-duration="1s" swiper-animate-delay="2.75s">
                活动简介
            </div>
            <div class="text-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="3s">
                【带队主持】：乐龄1056主持人 宋扬 <br/>
                （河南广播电视台信息广播主持人<br/>
                河南省朗诵协会副秘书长<br/>
                宋读诗团团长）<br/>
                【活动主办】：河南广播电视台乐龄1056<br/>
                【旅行费用】：1998元<br/>
                【报名咨询】：0371-65889929<br/>13663843003（小海）<br/>18638503030（小彤）<br/>              
            </div>
        </div>
        <div class="bt-1 ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1s"></div>
        <div class="bt-2 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0.25s"></div>
        <div class="bt-3 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="1.5s"></div>
        <div class="bt-4 ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="1.75s"></div>
       
    </div>
</template>

<script>


export default {
  name:'three'
}
</script>


<style lang="stylus" scoped>
.qrcode
    position absolute
    bottom 80px
    left 275px
    width 200px
.three
    width 100%
    height 100%
    background url('../common/bg.jpg') center center no-repeat
    background-size cover
    .bd-bg
        position absolute
        left 75px
        top 60px
        width 600px
        height 850px
        opacity 0.85
    .contain
        position absolute
        z-index 1024
        left 75px
        top 60px
        width 600px
        height 850px
        opacity 0.85
        .border
            position absolute
            left 140px
            top 40px
            width 320px
            height 120px
            opacity 0.85
        .text
            position absolute
            top 80px
            left 0
            width 100%
            text-align center
            font-size 44px
            font-weight bold
            color #08865c
            padding 0 30px
            box-sizing border-box
        .text-1
            position absolute
            z-index 1024
            top 220px
            left 0
            width 100%
            text-align center
            line-height 1.8
            font-size 32px
            color #08865c
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

