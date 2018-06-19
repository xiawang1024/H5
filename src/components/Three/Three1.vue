<template>
    <div class="three">

        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-order ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s">第二篇章</div>
          <div class="m-title ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s">深沉·河南这片土</div>
          <div class="m-body ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《土地情诗》</li>
                <li class="list">作者：舒婷</li>
                <li class="list">朗诵：木子、李芮、皓然</li>

              </ul>
            </div>
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《念奴娇·追思焦裕禄》</li>
                <li class="list">作者：习近平</li>
                <li class="list">朗诵：吴震宇</li>

              </ul>
            </div>
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《祖国，我为您拉纤》</li>
                <li class="list">作者：张鲜明</li>
                <li class="list">朗诵：王贺敏、叶子、谢时雨、雷开通</li>

              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>
mm
<script>


export default {
  name:'three'
}
</script>


<style lang="stylus" scoped>
.three {
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
    top: 210px;
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
        margin-bottom: 25px;

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
        top: 0px;
        left: 40px;
        width: 254px;
      }

      .img-02 {
        position: absolute;
        left: 282px;
        top: 28px;
        width: 254px;
      }

      .img-03 {
        position: absolute;
        left: 40px;
        top: 240px;
        width: 254px;
      }

      .img-04 {
        position: absolute;
        right: 40px;
        top: 260px;
        width: 254px;
      }

      .img-05 {
        position: absolute;
        left: 130px;
        top: 470px;
        width: 185px;
      }

      .img-06 {
        position: absolute;
        left: 282px;
        top: 260px;
        width: 185px;
      }

      .img-07 {
        position: absolute;
        left: 295px;
        top: 420px;
        width: 185px;
      }

      .img-08 {
        position: absolute;
        right: 40px;
        top: 96px;
        width: 185px;
      }
    }
  }
}
</style>

