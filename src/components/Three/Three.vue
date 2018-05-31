<template>
    <div class="three">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-title ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.5s"></div>
          <div class="m-body">
            <!-- <div class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0.25s">
              <div class="m-order">
                  1
              </div>
              <ul class="m-list">
                  <li class="list">
                      <span class="u-block"></span>
                      <span class="u-text">
                          6月6日 启动仪式
                      </span>
                  </li>
                  <li class="list">
                      <span class="u-block"></span>
                      <span class="u-text">
                          河南广播网线上启动“给党唱支生日歌”歌曲征集
                      </span>
                  </li>
                  <li class="list">
                      <span class="u-block"></span>
                      <span class="u-text">
                          交广领航线上启动记步“点亮党旗”活动
                      </span>
                  </li>
              </ul>
            </div>
            <div class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">
                <div class="m-order">
                    2
                </div>
                <ul class="m-list">
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            6月20日
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            (场地：广播大厦三楼)
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            "党的生日主题诗会"
                        </span>
                    </li>
                </ul>
            </div>
            <div class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0.75s">
                <div class="m-order">
                    3
                </div>
                <ul class="m-list">
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            6月29日
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            (场地：八号演播厅暂定)
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            "给党唱支生日歌"主题歌会
                        </span>
                    </li>
                </ul>
            </div>
            <div class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="1s">
                <div class="m-order">
                    4
                </div>
                <ul class="m-list">
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            7月1日
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            (场地：郑东新区如意湖广场暂定)
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            千人拼党旗暨河南广播电视台处级以上党员领导 干部重温入党誓词仪式
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            交广领航线上启动记步“点亮党旗”活动
                        </span>
                    </li>
                </ul>
            </div> -->
            <div class="u-time red ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">时间：6月6日--7月1日</div>
            <div class="text-wrap ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.75s">
                向全社会各界人士发出邀请给党唱支生日歌。河南广播电视台十大广播频率河南广播网线上征歌，燃情歌唱，建立活动互动专区，展播基层党员干部群众演唱的优秀歌唱作品。
            </div>
          </div>
        </div>
    </div>
</template>

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
    top: 290px;
    left: 0;
    right: 0;
    width: 100%;

    .m-title {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 149px;
      background: url('../common/02.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 230px;
      left: 0;
      width: 100%;
      text-align: left;
      color: #333;
      letter-spacing: 0.2px;
      padding: 0 100px;
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

      .item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        .m-order {
          flex: 0 0 60px;
          width: 60px;
          height: 69px;
          line-height: 69px;
          text-align: center;
          font-size: 32px;
          color: #ffffff;
          background: url('../common/icon-rule.png') center center no-repeat;
          background-size: cover;
        }

        .m-list {
          width: 622px;
          flex: 0 0 622px;
          padding-left: 28px;
          line-height: 1.625;
          font-size: 23px;
          box-sizing: border-box;

          .list {
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            // white-space nowrap
            box-sizing: border-box;

            &:first-child {
              color: #c7000a;
            }

            .u-block {
              vertical-align: middle;
              display: inline-block;
              width: 4px;
              height: 4px;
              background: #c7000a;
            }

            .u-text {
              vertical-align: middle;
            }
          }
        }
      }
    }
  }
}
</style>

