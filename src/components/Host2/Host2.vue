<template>
    <div class="host2">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="info-wrap">

            <div class="text-wrap">
              <h3 class="name">SEVEN</h3>
              <p class="desc">河南广播FM90.0 MyRadio主持人</p>
              <p class="desc">《音乐爱回家》DJ </p>
              <p class="desc">河南卫视《武林笼中对》主持人</p>
            </div>
            <div class="avatar-wrap">
              <img src="./host-1.png" alt="" class="avatar">
            </div>
          </div>

          <div class="info-wrap">

            <div class="text-wrap">
              <h3 class="name">佳 阳</h3>
              <p class="desc">河南广播FM 90.0 MyRadio主持人 </p>
              <p class="desc">节目部主任</p>
              <p class="desc">全国“电台优秀DJ”</p>
              <p class="desc">河南广播电视台“十佳主持人”</p>
              <p class="desc">主持节目：《音乐爱回家》、《我的荒岛唱片》</p>
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
    top: 250px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

    .info-wrap {
      display: flex;
      margin-bottom: 20px;

      .avatar-wrap {
        font-size: 0;
        margin-top: 40px;

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
          // white-space: nowrap;
        }
      }

      &:nth-child(1) {
        .avatar-wrap {
          margin-top: -20px;
        }
      }
    }
  }
}
</style>

