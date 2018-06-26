<template>
    <div class="host1">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="info-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.2s" swiper-animate-delay="0.45s">
            <div class="avatar-wrap">
              <img src="./host-1.png" alt="" class="avatar">
            </div>
            <div class="text-wrap">
              <h3 class="name">TONNY</h3>
              <p class="desc">魅力881品牌推广部负责人，《魅力左岸》等节目的主持人，并打造了品牌活动“Tonny先生的黑胶分享会”。</p>
            </div>
          </div>

          <div class="info-wrap ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.2s" swiper-animate-delay="0.85s">

            <div class="text-wrap">
              <h3 class="name">雨薇</h3>
              <p class="desc">魅力881河南音乐广播主持人，主持风格：魅力、优雅、大气、温婉</p>
            </div>
            <div class="avatar-wrap">
              <img src="./host-2.png" alt="" class="avatar">
            </div>
          </div>
        </div>
    </div>
</template>

<script>


export default {
  name:'host1'
}
</script>


<style lang="stylus" scoped>
$color = #e60012;

.host1 {
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
    top: 250px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

    .info-wrap {
      display: flex;

      .avatar-wrap {
        font-size: 0;
        margin-top: 20px;

        .avatar {
          width: 282px;
          height: 282px;
        }
      }

      .text-wrap {
        margin-left: 10px;
        line-height: 1.8;
        font-size: 25px;

        .name {
          font-size: 38px;
          color: $color;
        }

        .desc {
          color: $color;
        }
      }

      &:nth-child(2) {
        .text-wrap {
          margin-top: 60px;
        }
      }
    }
  }
}
</style>

