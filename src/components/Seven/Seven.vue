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
            <!-- <ul class="m-list clearfix">
              <li class="list ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.25s">
                  <div class="img-wrap">
                      <img src="../../assets/active-1.png" alt="" class="img">
                  </div>
                  <div class="text-wrap">
                      <h2 class="title">党的生日主题诗会</h2>
                      <p class="date">6月20（周三）晚上</p>
                      <p class="address">地点：广播大厦三楼（暂定）</p>
                      <p class="desc">朗诵经典诗歌作品，重温七月的记忆。</p>
                  </div>
              </li>
              <li class="list ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
                  <div class="img-wrap">
                      <img src="../../assets/active-2.png" alt="" class="img">
                  </div>
                  <div class="text-wrap">
                      <h2 class="title">"给党唱支生日歌"主题歌会
                      </h2>
                      <p class="date">6月29日（周五）晚上</p>
                      <p class="address">地点：八号演播厅</p>
                      <p class="desc">"给党唱支生日歌"大型主题歌会。</p>
                  </div>
              </li>
              <li class="list ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="0.75s">
                  <div class="img-wrap">
                      <img src="../../assets/active-3.png" alt="" class="img">
                  </div>
                  <div class="text-wrap">
                      <h2 class="title">千人拼党旗</h2>
                      <p class="date">7月1日(周日）上午</p>
                      <p class="address">地点：郑东新区如意湖广场（暂定）</p>
                      <p class="desc">千人拼党旗暨河南广播电视台处级以上党员领导干部重温入党誓词仪式。
                      </p>
                  </div>
              </li>
            </ul> -->
            <div class="u-time red ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">时间：7月1日，地点：河南师范大学新联学院</div>
            <div class="text-wrap ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.75s">
                献礼党的生日，激发年轻党员和优秀团员的历史责任感，坚定广大党员干部群众的理想信念，不忘初心、砥砺前行。
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
    top: 328px;
    left: 0;
    right: 0;
    width: 100%;

    .m-title {
      position: absolute;
      top: 0px;
      right: 100px;
      width: 276px;
      height: 149px;
      background: url('../common/07.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 214px;
      left: 0;
      width: 100%;
      text-align: left;
      color: #333;
      letter-spacing: 0.2px;
      padding: 0 80px;
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

      .m-list {
        width: 100%;

        .list {
          width: 300px;
          height: 350px;

          &:nth-child(1) {
            position: absolute;
            top: 0;
            left: 40px;
          }

          &:nth-child(2) {
            position: absolute;
            top: 216px;
            right: 40px;
          }

          &:nth-child(3) {
            position: absolute;
            top: 362px;
            left: 40px;
            width: 400px;
          }

          .img-wrap {
            width: 300px;
            height: 168px;
            font-size: 0;
            margin-bottom: 10px;

            .img {
              width: 300px;
              height: 168px;
            }
          }

          .text-wrap {
            width: 100%;

            .title {
              width: 100%;
              height: 30px;
              line-height: 30px;
              margin-bottom: 2px;
              font-size: 26px;
              text-align: left;
              color: #da222b;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .date, .address {
              font-size: 24px;
              line-height: 1.5;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }

            .desc {
              font-size: 23px;
              line-height: 1.5;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
}
</style>

