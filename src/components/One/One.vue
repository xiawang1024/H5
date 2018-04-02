<template>
    <section class="one">        
        <div class="logo ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"></div>
        <div class="title"></div>
        <section class="contain">
            <div class="name"></div>
            <div class="text">
                <p class="img-1"></p>
                <p class="img-2"></p>
                <p class="img-3"></p>
                <p class="img-4"></p>
                <p class="img-5"></p>
            </div>
        </section>
        <section class="ft">
            <div class="img-6"></div>
            <div class="img-7"></div>
        </section>       
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
    background #1f1a17 url('../common/bg.png') top -20px center no-repeat
    background-size contain    
    .contain
        position absolute
        top 705px
        left 0
        width 100%
        .name
            position absolute
            top 0
            left 0
            width 100%
            height 94px
            background url('./name.png') center center no-repeat
            background-size contain
        .text
            position absolute
            top 115px
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
    .ft
        position absolute
        bottom 40px
        left 0
        width 100%
        height 80px
        .img-6
            position absolute
            top 0
            left 0
            width 100%
            height 43px
            background url('./6.png') center center no-repeat
            background-size contain
        .img-7
            position absolute
            bottom 0
            left 0
            width 100%
            height 27px
            background url('./7.png') center center no-repeat
            background-size contain
</style>
