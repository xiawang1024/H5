<template>
    <div class="five">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-title ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
          <div class="m-body">
            <!-- <h3 class="title-3 red ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1.25s" swiper-animate-delay="0.25s">一、“给党唱支生日歌”音视频歌曲征集</h3>
            <ul class="u-list">
                <li class="list ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.25s">
                    <h4 class="title-4">1、
                        <span class="red">6月6日</span>
                    </h4>
                    <p class="text">
                        活动启动仪式
                    </p>
                    <p class="text">
                        河南广播网启动“给党唱支生日歌”音视频征集
                        <span class="red">全线客户端推送启动。</span>
                    </p>
                </li>
                <li class="list ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">
                    <h4 class="title-4">2、
                        <span class="red">6月10日</span>
                    </h4>

                    <p class="text">
                        开始进行
                        <span class="red">精选内容推送。</span>
                    </p>
                </li>
                <li class="list ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.75s">
                    <h4 class="title-4">3、
                        <span class="red">6月12日</span>
                    </h4>

                    <p class="text">
                        启动基础党组织、驻村第一书记
                        <span class="red">系列采访全媒体宣传。</span>
                    </p>
                </li>
                <li class="list ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="1s">
                    <h4 class="title-4">4、
                        <span class="red">6月25日</span>
                    </h4>
                    <p class="text">
                        截止内容上传，
                        <span class="">评选出优秀作品。</span>
                    </p>
                </li>
            </ul> -->
            <div class="u-time red ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">时间：6月20日，地点：河南广播大厦</div>
            <div class="text-wrap ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.75s">
                朗诵经典诗歌作品，重温七月的记忆。回顾中国共产党97年来风雨激荡与壮丽辉煌的史诗。
            </div>
          </div>
        </div>
    </div>
</template>

<script>


export default {
  name:'five'
}
</script>


<style lang="stylus" scoped>
.five {
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
    top: 294px;
    left: 0;
    right: 0;
    width: 100%;

    .m-title {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 149px;
      background: url('../common/04.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 235px;
      left: 0;
      width: 100%;
      text-align: left;
      color: #333;
      letter-spacing: 0.2px;
      padding: 0 40px;
      font-size: 24px;
      box-sizing: border-box;

      .red {
        color: #b11f23;
      }

      .u-time {
        font-size: 24px;
      }

      .text-wrap {
        margin-top: 34px;
        font-size: 24px;
        line-height: 2;
      }

      .title-3 {
        font-size: 28px;
        margin-bottom: 20px;
      }

      .u-list {
        width: 100%;

        .list {
          margin-bottom: 18px;

          .title-4, .text {
            line-height: 1.8;
          }
        }
      }
    }
  }
}
</style>

