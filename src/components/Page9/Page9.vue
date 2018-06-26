<template>
    <div class="host2">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <div class="info-wrap ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.3s" swiper-animate-delay="0.45s">

            <div class="text-wrap">
              <h3 class="name">《在田野 在山岗》</h3>
              <p class="desc">词：远山  曲：近水</p>
              <p class="desc">演唱：河南广播电视台—SEVEN、佳阳、月阳</p>
              <p class="desc">佳雨、依璐、圈圈、第一书记代表</p>

            </div>
            <div class="avatar-wrap">
              <img src="./host-1.png" alt="" class="avatar ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.3s" swiper-animate-delay="0s">
            </div>
          </div>

          <div class="avatars-wrap">
            <img src="./1.png" alt="" class="avatar1 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.3s" swiper-animate-delay="0.65s">
            <img src="./2.png" alt="" class="avatar2 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.3s" swiper-animate-delay="1.05s">
            <img src="./3.png" alt="" class="avatar3 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.3s" swiper-animate-delay="1.45s">
            <img src="./4.png" alt="" class="avatar4 ani" swiper-animate-effect="rotateIn" swiper-animate-duration="1.3s" swiper-animate-delay="1.05s">
          </div>

        </div>
    </div>
</template>

<script>


export default {
  name:'host2'
}
</script>


<style lang="stylus" scoped>
$color = #e60012;

.host2 {
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
    top: 280px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

    .info-wrap {
      position: relative;
      // display: flex;
      align-items: center;
      margin-bottom: 40px;

      .avatar-wrap {
        position: absolute;
        font-size: 0;
        margin-top: 40px;

        .avatar {
          width: 255px;
          height: 255px;
        }
      }

      .text-wrap {
        margin-left: 0px;
        line-height: 1.8;
        font-size: 28px;

        .name {
          font-size: 38px;
          color: $color;

          span {
            font-size: 36px;
          }
        }

        .desc {
          color: $color;
        }
      }

      &:nth-child(1) {
        .text-wrap {
          margin-left: 40px;
        }

        .avatar-wrap {
          top: -180px;
          right: 0;
        }
      }

      &:nth-child(2) {
        .text-wrap {
          margin-left: 40px;
        }

        .avatar-wrap {
          margin-top: 60px;
        }
      }
    }

    .avatars-wrap {
      position: relative;
      font-size: 0;
      text-align: center;

      img {
        width: 255px;
        height: 255px;
        margin-top: 10px;
        margin-left: 20px;
      }
    }
  }
}
</style>

