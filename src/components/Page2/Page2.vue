<template>
    <div class="page1">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <div class="m-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.25s" swiper-animate-delay="0.25s"></div>
          <div class="img-wrap ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">
            <img src="./1.png" alt="" class="img img-1">
          </div>
          <div class="text-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s"></div>
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
  background: url('../../assets/bg.jpg') center center no-repeat;
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
    bottom: 20px;
    width: 475px;
    height: 307px;
    background: url('../common/003.png') center center no-repeat;
    background-size: cover;
  }

  .g-body {
    position: absolute;
    top: 210px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

    .m-title {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 86px;
      background: url('./title.png') center center no-repeat;
      background-size: contain;
    }

    .img-wrap {
      position: absolute;
      top: 110px;
      left: 0;
      width: 100%;
      font-size: 0;
      text-align: center;

      .img {
        width: 395px;
        height: 291px;
      }
    }

    .text-wrap {
      position: absolute;
      top: 480px;
      left: 0;
      width: 100%;
      height: 164px;
      background: url('./text.png') center center no-repeat;
      background-size: contain;
    }
  }
}
</style>

