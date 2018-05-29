<template>
    <div class="six">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bottom-left"></div>
        <div class="bottom-right"></div>
        <div class="g-body">
          <div class="m-title"></div>
          <div class="m-body">
            <h3 class="title-3 red">二、交广领航线上记步“点亮党旗”活动</h3>
            <ul class="u-list">
                <li class="list">
                    <h4 class="title-4">1、
                        <span class="red">6月6日</span>
                    </h4>
                    <p class="text">
                        与启动仪式同步启动交广领航线上 “千人拼党旗”活动
                    </p>
                </li>
                <li class="list">
                    <h4 class="title-4">2、 参与者通过交广领航提交姓名、电话号码、入党时间等信息完成报名。
                    </h4>

                </li>
                <li class="list">
                    <h4 class="title-4">3、 报名通过后，交广领航活动为用户在未着色党旗拼图中随机为报名者分配区块。
                    </h4>
                </li>
                <li class="list">
                    <h4 class="title-4">4、
                        <span class="red">7月1日</span>
                    </h4>
                    <p class="text">
                        当天，交广领航APP结合线下的千人拼党旗和宣誓，最终完成 党旗线上的全部点亮。
                    </p>
                </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>


export default {
  name:'six'
}
</script>


<style lang="stylus" scoped>
.six {
  width: 100%;
  height: 100%;
  background: url('../common/bg.jpg') center center no-repeat;
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
    top: 365px;
    left: 0;
    right: 0;
    width: 100%;

    .m-title {
      position: absolute;
      top: -200px;
      right: 80px;
      width: 117px;
      height: 270px;
      background: url('../common/04.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      text-align: left;
      color: #333;
      letter-spacing: 0.2px;
      padding: 0 40px;
      font-size: 24px;
      box-sizing: border-box;

      .red {
        color: #da222b;
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

