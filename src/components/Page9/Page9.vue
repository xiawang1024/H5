<template>
    <div class="page1">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <div class="info-wrap first ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.2s" swiper-animate-delay="0.45s">
            <div class="avatar-wrap">
              <img src="./host-1.png" alt="" class="avatar ani" swiper-animate-effect="rotateInDownRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.25s">
            </div>
            <div class="text-wrap">
              <!-- <h3 class="name">TONNY</h3>
              <p class="desc">魅力881品牌推广部负责人，《魅力左岸》等节目的主持人，并打造了品牌活动“Tonny先生的黑胶分享会”。</p> -->
            </div>
          </div>

          <div class="info-wrap second ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.2s" swiper-animate-delay="0.85s">

            <img src="./1.png" alt="" class="img img-1 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="2s">
            <img src="./2.png" alt="" class="img img-2 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
            <img src="./3.png" alt="" class="img img-3 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1.75s">
            <img src="./4.png" alt="" class="img img-4 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1.25s">
            <img src="./5.png" alt="" class="img img-5 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.25s" swiper-animate-delay="1.75s">
          </div>
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
    top: 270px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

    .m-title {
      text-align: center;
      font-size: 48px;
      color: $color;
    }

    .info-wrap {
      position: absolute;
      top: 0px;
      left: 0;
      right: 0;
      width: 100%;
      height: 230px;
      padding: 0 40px;
      box-sizing: border-box;

      .avatar-wrap {
        position: absolute;
        font-size: 0;

        .avatar {
          width: 255px;
          height: 255px;
        }
      }

      .text-wrap {
        position: absolute;
      }

      &.first {
        .text-wrap {
          // top: 35px;
          width: 583px;
          height: 270px;
          background: url('./text-1.png') center center no-repeat;
          background-size: 583px 270px;
        }

        .avatar-wrap {
          top: -93px;
          right: 100px;
        }
      }

      &.second {
        top: 280px;

        .img {
          position: absolute;
          width: 256px;
          height: 256px;
        }

        .img-1 {
          top: 0;
          left: 40px;
        }

        .img-2 {
          top: 0;
          right: 40px;
        }

        .img-3 {
          top: 260px;
          left: 60px;
        }

        .img-4 {
          top: 267px;
          right: 90px;
        }

        .img-5 {
          top: 110px;
          left: 240px;
        }
      }
    }
  }
}
</style>

