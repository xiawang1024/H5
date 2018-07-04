<template>
    <div class="page1">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <!-- <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div> -->
        <div class="top-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="logo ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-title ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
          <div class="m-body ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.3s" swiper-animate-delay="0.5s"></div>
          <div class="m-tips-1 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.3s" swiper-animate-delay="0.75s"></div>
          <div class="m-tips-2 ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.3s" swiper-animate-delay="1s"></div>
        </div>
    </div>
</template>

<script>


export default {
  name:'page1'
}
</script>


<style lang="stylus" scoped>
$color = #e60012;

.page1 {
  width: 100%;
  height: 100%;
  background: url('../../assets/bg.png') center center no-repeat #d9f7fc;
  background-size: contain;

  .top-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 173px;
    height: 181px;
    background: url('./icon-tp.png') center center no-repeat;
    background-size: cover;
  }

  .bottom-left {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 218px;
    height: 189px;
    background: url('./icon-bt-lt.png') center center no-repeat;
    background-size: cover;
  }

  .bottom-right {
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 750px;
    height: 460px;
    background: url('./icon-bt.png') center center no-repeat;
    background-size: cover;
  }

  .logo {
    position: absolute;
    top: 32px;
    left: 22px;
    width: 120px;
    height: 114px;
    background: url('./icon-logo.png') center center no-repeat;
    background-size: cover;
  }

  .g-body {
    .m-title {
      position: absolute;
      top: 140px;
      left: 0;
      width: 100%;
      height: 220px;
      background: url('./icon-title.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 405px;
      left: 0;
      width: 100%;
      height: 325px;
      background: url('./icon-text.png') center center no-repeat;
      background-size: contain;
    }

    .m-tips-1 {
      position: absolute;
      top: 796px;
      left: 0;
      width: 100%;
      height: 29px;
      background: url('./icon-tips-1.png') left 140px center no-repeat;
      background-size: contain;
    }

    .m-tips-2 {
      position: absolute;
      top: 864px;
      left: 0;
      width: 100%;
      height: 29px;
      background: url('./icon-tips-2.png') left 140px center no-repeat;
      background-size: contain;
    }
  }
}
</style>

