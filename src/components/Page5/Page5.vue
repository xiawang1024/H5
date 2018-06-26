<template>
    <div class="host2">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <div class="info-wrap ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.45s">

            <div class="text-wrap" >
              <h3 class="name">男声独唱：《唱支山歌给党听》</h3>
              <p class="desc">词：张永枚  曲：肖民</p>
              <p class="desc">演唱：青年歌手  丁天</p>

            </div>
            <div class="avatar-wrap">
              <img src="./host-1.png" alt="" class="avatar">
            </div>
          </div>

          <div class="info-wrap ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0.95s">

            <div class="text-wrap">
              <h3 class="name">女声独唱：《党啊，亲爱的妈妈》</h3>

              <p class="desc">词：龚爱书  余致迪  曲：马殿银  周右</p>
              <p class="desc">演唱：新乡学院</p>
              <p class="desc">青年女高音歌唱家  池小青</p>
            </div>
            <div class="avatar-wrap">
              <img src="./host-2.png" alt="" class="avatar">
            </div>
          </div>
          <div class="info-wrap ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="1.45s">
            <div class="text-wrap">
              <h3 class="name">小提琴独奏：《春天的故事》</h3>
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
      display: flex;
      align-items: center;
      margin-bottom: 50px;

      .avatar-wrap {
        position: absolute;
        font-size: 0;
        margin-top: 40px;

        .avatar {
          width: 180px;
          height: 180px;
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
          // white-space: nowrap;
        }
      }

      &:nth-child(1) {
        .avatar-wrap {
          top: -20px;
          right: 0px;
        }
      }

      &:nth-child(2) {
        .avatar-wrap {
          top: 20px;
          right: 40px;
        }
      }
    }
  }
}
</style>

