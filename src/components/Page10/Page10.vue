<template>
    <div class="page1">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">

          <div class="info-wrap first ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.2s" swiper-animate-delay="0.45s">


            <div class="text-wrap">


            </div>
          </div>

          <div class="info-wrap second ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.2s" swiper-animate-delay="0.85s">

            <div class="text-wrap">

            </div>

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
    top: 365px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

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
          width: 180px;
          height: 180px;
        }
      }

      .text-wrap {
        position: absolute;
      }

      &.first {
        .text-wrap {
          // top: 35px;
          left: 100px;
          width: 341px;
          height: 154px;
          background: url('./text-1.png') center center no-repeat;
          background-size: 341px 154px;
        }

        .avatar-wrap {
          top: -28px;
          left: 467px;
          z-index: 10;

          &.avatar1 {
            top: 170px;
            left: 526px;
          }
        }
      }

      &.second {
        top: 260px;
        height: 265px;

        .text-wrap {
          left: 200px;
          width: 485px;
          height: 155px;
          background: url('./text-2.png') center center no-repeat;
          background-size: 485px 155px;
        }

        .avatar-wrap {
          top: 85px;
          left: 50px;

          .avatar {
            width: 180px;
            height: 180px;
          }
        }
      }
    }
  }
}
</style>

