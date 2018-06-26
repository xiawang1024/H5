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
              <h3 class="name">序一</h3>
              <h3 class="name">大提琴独奏：《国际歌》</h3>
              <p class="desc">演奏：河南民族乐团</p>
              <p class="desc">青年大提琴演奏家  韦振国  </p>

            </div>
            <div class="avatar-wrap">
              <img src="./host-1.png" alt="" class="avatar">
            </div>
          </div>

          <div class="info-wrap">
            <div class="avatar-wrap">
              <img src="./host-2.png" alt="" class="avatar">
            </div>
            <div class="text-wrap">
              <h3 class="name">序二</h3>
              <h3 class="name"><span>小提琴独奏：</span><br>《红军战士想念毛泽东》</h3>

              <p class="desc">演奏：河南交响乐团  </p>
              <p class="desc">青年小提琴演奏家  管  鑫</p>

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
      align-items: center;
      margin-bottom: 20px;

      .avatar-wrap {
        font-size: 0;
        margin-top: 40px;

        .avatar {
          width: 180px;
          height: 180px;
        }
      }

      .text-wrap {
        margin-left: 10px;
        line-height: 1.8;
        font-size: 28px;

        .name {
          font-size: 38px;
          color: $color;

          span {
            font-size: 36px;
          }

          &:first-child {
            font-size: 48px;
            text-align: center;
          }
        }

        .desc {
          color: $color;
          // white-space: nowrap;
        }
      }

      &:nth-child(1) {
        .avatar-wrap {
          margin-top: 60px;
        }
      }

      &:nth-child(2) {
        .avatar-wrap {
          margin-top: 60px;
        }
      }
    }
  }
}
</style>

