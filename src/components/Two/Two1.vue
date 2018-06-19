<template>
    <div class="two">

        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-order ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s">第一篇章</div>
          <div class="m-title ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s">传承·七月是首歌</div>
          <div class="m-body ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《红船，从南湖起航》</li>
                <li class="list">作者：刘曙光</li>
                <li class="list">朗诵：肖月</li>

              </ul>
            </div>
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《红旗渠》</li>
                <li class="list">朗诵：吴广林</li>

              </ul>
            </div>
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《37秒》</li>
                <li class="list">朗诵：周文凯</li>

              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>


export default {
  name:'two'
}
</script>


<style lang="stylus" scoped>
.two {
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
    top: 223px;
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
      top: 160px;
      left: 0;
      width: 100%;
      text-align: left;
      color: #333;
      padding: 0 40px;
      box-sizing: border-box;
      font-size: 0;

      .u-wrap {
        display: flex;
        font-size: 28px;
        font-weight: bolder;
        text-align: center;
        margin-bottom: 20px;

        .u-name {
          flex: 0 0 65px;
          width: 65px;
        }

        .u-list {
          flex: 1;
          text-align: center;

          .list {
            margin-bottom: 16px;
          }
        }
      }

      .img-01 {
        position: absolute;
        top: 100px;
        left: 385px;
        width: 220px;
      }

      .img-02 {
        position: absolute;
        left: 99px;
        top: 293px;
        width: 220px;
      }

      .img-03 {
        position: absolute;
        left: 315px;
        top: 316px;
        width: 347px;
      }

      .img-04 {
        position: absolute;
        left: 40px;
        top: 0;
        width: 347px;
      }
    }
  }
}
</style>

