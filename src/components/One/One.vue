<template>
    <div class="one">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.25s"></div>
          <div class="m-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
          <div class="m-body">
            <p class="u-theme ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.75s">【庆祝中国共产党建党<span class="year">97</span>周年】</p>
            <p class="u-sub-theme ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">大型系列文化活动</p>
            <p class="u-zhu ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.25s">主办方：河南省委组织部&nbsp;&nbsp;河南省委宣传部&nbsp;&nbsp;河南广播电视台</p>
            <p class="u-cheng ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s">承办方：河南广播电视台广播广告经营部&nbsp;&nbsp;恒丰银行郑州分行</p>
          </div>
        </div>
    </div>
</template>

<script>


export default {
  name:'one'
}
</script>


<style lang="stylus" scoped>
.one {
  width: 100%;
  height: 100%;
  background: url('../common/bg.jpg') center center no-repeat;
  background-size: cover;

  .top-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 493px;
    height: 217px;
    background: url('../common/001.png') center center no-repeat;
    background-size: cover;
  }

  .top-right {
    position: absolute;
    top: 22px;
    right: 59px;
    width: 138px;
    height: 248px;
    background: url('../common/002.png') center center no-repeat;
    background-size: cover;
  }

  .bottom-left {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 750px;
    height: 239px;
    background: url('../common/004.png') center center no-repeat;
    background-size: cover;
  }

  .bottom-right {
    position: absolute;
    right: 0;
    bottom: 50px;
    width: 475px;
    height: 307px;
    background: url('../common/003.png') center center no-repeat;
    background-size: cover;
  }

  .g-body {
    position: absolute;
    top: 273px;
    left: 0;
    right: 0;
    width: 100%;

    .m-logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 133px;
      background: url('../common/icon-gcd.png') center center no-repeat;
      background-size: contain;
    }

    .m-title {
      position: absolute;
      top: 125px;
      left: 0;
      width: 100%;
      height: 151px;
      background: url('../common/icon-title.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 282px;
      left: 0;
      width: 100%;
      text-align: center;
      color: #b60005;
      letter-spacing: 0.2px;

      .u-theme {
        font-size: 28px;

        .year {
          font-size: 34px;
        }
      }

      .u-sub-theme {
        width: 230px;
        margin: 18px auto 0;
        height: 44px;
        line-height: 44px;
        box-sizing: border-box;
        border: 2px solid #d32419;
        font-size: 23px;
      }

      .u-zhu, .u-cheng {
        margin-top: 20px;
        font-size: 20px;
      }
    }
  }
}
</style>

