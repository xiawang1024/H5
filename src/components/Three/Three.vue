<template>
    <div class="three">

        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-order ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s">第二篇章</div>
          <div class="m-title ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s">深沉·河南这片土</div>
          <div class="m-body ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
            <img src="../../assets/02-01.png" alt="" class="img img-01 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="0.25s">
            <img src="../../assets/02-02.png" alt="" class="img img-02 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="0.75s">
            <img src="../../assets/02-03.png" alt="" class="img img-03 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1.25s">
            <img src="../../assets/02-04.png" alt="" class="img img-04 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1s">
            <img src="../../assets/02-05.png" alt="" class="img img-05 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1.75s">
            <img src="../../assets/02-06.png" alt="" class="img img-06 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
            <img src="../../assets/02-07.png" alt="" class="img img-07 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">
            <img src="../../assets/02-08.png" alt="" class="img img-08 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="2s">
          </div>

        </div>
      </div>
    </div>
</template>
mm
<script>


export default {
  name:'three'
}
</script>


<style lang="stylus" scoped>
.three {
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
    bottom: 50px;
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
    letter-spacing: 0.2px;

    .m-order {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      color: #b9160a;
      font-size: 40px;
    }

    .m-title {
      position: absolute;
      top: 65px;
      left: 0;
      width: 100%;
      height: 149px;
      text-align: center;
      color: #b9160a;
      font-size: 39px;
    }

    .m-body {
      position: absolute;
      top: 130px;
      left: 0;
      width: 100%;
      text-align: left;
      color: #333;
      padding: 0 40px;
      box-sizing: border-box;
      font-size: 0;

      .img-01 {
        position: absolute;
        top: 0px;
        left: 40px;
        width: 254px;
      }

      .img-02 {
        position: absolute;
        left: 282px;
        top: 28px;
        width: 254px;
      }

      .img-03 {
        position: absolute;
        left: 40px;
        top: 240px;
        width: 254px;
      }

      .img-04 {
        position: absolute;
        right: 40px;
        top: 260px;
        width: 254px;
      }

      .img-05 {
        position: absolute;
        left: 130px;
        top: 470px;
        width: 185px;
      }

      .img-06 {
        position: absolute;
        left: 282px;
        top: 260px;
        width: 185px;
      }

      .img-07 {
        position: absolute;
        left: 295px;
        top: 420px;
        width: 185px;
      }

      .img-08 {
        position: absolute;
        right: 40px;
        top: 96px;
        width: 185px;
      }
    }
  }
}
</style>

