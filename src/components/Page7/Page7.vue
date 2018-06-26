<template>
    <div class="host2">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <div class="info-wrap ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.3s" swiper-animate-delay="0.45s">

            <div class="text-wrap">
              <h3 class="name">男女声二重唱：《入党申请书》</h3>
              <p class="desc">词：贺沛轩  曲：方岩</p>
              <p class="desc">演唱：河南歌舞演艺集团歌剧团</p>
              <p class="desc">郑州升达大学、青年歌手  郭亚琼</p>
              <p class="desc">青年歌唱家  燕峰</p>

            </div>
            <div class="avatar-wrap">
              <img src="./host-1.png" alt="" class="avatar ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.3s" swiper-animate-delay="1s">
              <img src="./host-3.png" alt="" class="avatar1 ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.3s" swiper-animate-delay="1.25s">
            </div>
          </div>

          <div class="info-wrap ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.3s" swiper-animate-delay="0.85s">

            <div class="text-wrap">
              <h3 class="name">女声独唱：《江山》</h3>

              <p class="desc">词：晓光  曲：印青</p>
              <p class="desc">演唱：郑州师范学院</p>
              <p class="desc">青年女高音歌唱家  张伟芳</p>
            </div>
            <div class="avatar-wrap">
              <img src="./host-2.png" alt="" class="avatar ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.3s" swiper-animate-delay="1.5s">
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
      position: relative;
      // display: flex;
      align-items: center;
      margin-bottom: 80px;

      .avatar-wrap {
        font-size: 0;
        margin-top: 40px;
        flex: 0 0 200px;
        width: 200px;

        .avatar, .avatar1 {
          position: absolute;
          width: 180px;
          height: 180px;
        }

        .avatar {
          top: -40px;
          right: -30px;
        }

        .avatar1 {
          top: 150px;
          right: 40px;
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
        }

        .desc {
          color: $color;
          // white-space: nowrap;
        }
      }

      &:nth-child(1) {
        .text-wrap {
          // margin-left: 40px;
        }
      }

      &:nth-child(2) {
        .text-wrap {
          margin-left: 40px;
        }

        .avatar-wrap {
          position: absolute;
          top: 40px;
          right: 40px;
        }
      }
    }
  }
}
</style>

