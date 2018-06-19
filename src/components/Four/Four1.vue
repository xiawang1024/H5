<template>
    <div class="four">

        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-order ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.25s">第三篇章</div>
          <div class="m-title ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.5s">美好·心中那个梦</div>
          <div class="m-body" >
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《郑州，梦想起飞的花园》</li>
                <li class="list">作者：阿娉</li>
                <li class="list">朗诵：雨桐、圈圈、Seven、高峰</li>

              </ul>
            </div>
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《爷爷，奶奶——写给王宽、王淑荣夫妇》</li>
                <li class="list">作者：萍子</li>
                <li class="list">朗诵：李玉</li>

              </ul>
            </div>
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《飞书引凤》</li>
                <li class="list">作者：颜华</li>
                <li class="list">朗诵：新迪、阿木</li>

              </ul>
            </div>
            <div class="u-wrap ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.25s" swiper-animate-delay="1.5s">
              <!-- <p class="u-name">承办：</p> -->
              <ul class="u-list">
                <li class="list">《跟着新时代奔跑》</li>
                <li class="list">作者：陈宏坤</li>
                <li class="list">朗诵：肖洒、郭城、申伟辉、雨薇、蔚蓝、优扬</li>

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
  name:'four'
}
</script>


<style lang="stylus" scoped>
.four {
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
    top: 220px;
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
      top: 130px;
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
        top: 23px;
        left: 304px;
        width: 264px;
      }

      .img-02 {
        position: absolute;
        left: 308px;
        top: 402px;
        width: 264px;
      }

      .img-03 {
        position: absolute;
        left: 170px;
        top: 214px;
        width: 264px;
      }

      .img-04 {
        position: absolute;
        left: 40px;
        top: 402px;
        width: 154px;
      }

      .img-05 {
        position: absolute;
        right: 40px;
        top: 0px;
        width: 154px;
      }

      .img-06 {
        position: absolute;
        right: 40px;
        top: 334px;
        width: 154px;
      }

      .img-07 {
        position: absolute;
        left: 40px;
        top: 216px;
        width: 154px;
      }

      .img-08 {
        position: absolute;
        left: 170px;
        top: 70px;
        width: 154px;
      }

      .img-09 {
        position: absolute;
        left: 416px;
        top: 216px;
        width: 154px;
      }

      .img-10 {
        position: absolute;
        left: 40px;
        top: 70px;
        width: 154px;
      }

      .img-11 {
        position: absolute;
        right: 40px;
        top: 188px;
        width: 154px;
      }

      .img-12 {
        position: absolute;
        left: 175px;
        top: 402px;
        width: 154px;
      }
    }
  }
}
</style>

