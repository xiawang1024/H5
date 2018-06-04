<template>
    <div class="one">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <div class="m-logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.25s"></div>
          <div class="m-title ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
          <div class="m-body">
            <p class="u-time ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.6s">1921-2018</p>
            <p class="u-theme ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.75s">庆祝中国共产党建党<span class="year">97</span>周年</p>
            <p class="u-sub-theme ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">大型系列文化活动</p>
            <!-- <p class="u-zhu ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.25s">主办方：河南省委组织部&nbsp;&nbsp;河南省委宣传部&nbsp;&nbsp;河南广播电视台</p>
            <p class="u-cheng ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1.5s">承办方：河南广播电视台广播广告经营部&nbsp;&nbsp;恒丰银行郑州分行</p> -->
            <div class="u-users">
              <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.25s">
                <p class="u-name">主办：</p>
                <ul class="u-list">
                  <li class="list">河南广播电视台</li>
                  <li class="list">恒丰银行郑州分行</li>
                </ul>
              </div>
              <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
                <p class="u-name">承办：</p>
                <ul class="u-list">
                  <li class="list">河南广播电视台广播广告经营中心</li>
                  <li class="list">河南广播电视台新闻广播、音乐广播、教育广播</li>

                </ul>
              </div>
              <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.75s">
                <p class="u-name">协办：</p>
                <ul class="u-list">
                  <li class="list">河南师范大学新联学院</li>
                  <li class="list">河南声利企业营销策划有限公司</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>


export default {
  name:'one'
}
</script>


<style lang="stylus" scoped>
.one {
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

    .m-logo {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 133px;
      background: url('../common/icon-gcd.png') center center no-repeat;
      background-size: contain;
    }

    .m-title {
      position: absolute;
      top: 125px;
      left: 0;
      width: 100%;
      height: 151px;
      background: url('../common/icon-title.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 297px;
      left: 0;
      width: 100%;
      text-align: center;
      color: #b60005;
      letter-spacing: 0.2px;

      .u-time {
        font-size: 26px;
      }

      .u-theme {
        margin-top: 25px;
        font-size: 28px;
        font-weight: bold;

        .year {
          font-size: 34px;
        }
      }

      .u-sub-theme {
        margin-top: 20px;
        font-size: 28px;
        font-weight: bold;
      }

      .u-users {
        margin: 60px auto 0;
        width: 515px;

        .u-wrap {
          display: flex;
          font-size: 20px;
          font-weight: bolder;
          text-align: left;

          .u-name {
            flex: 0 0 65px;
            width: 65px;
          }

          .u-list {
            flex: 1;
            text-align: left;

            .list {
              margin-bottom: 16px;
            }
          }
        }
      }

      .u-zhu, .u-cheng {
        margin-top: 20px;
        font-size: 20px;
      }
    }
  }
}
</style>

