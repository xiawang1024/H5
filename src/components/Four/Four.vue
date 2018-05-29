<template>
    <div class="four">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-title ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
          <div class="m-body">
            <div class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0.25s">
              <div class="m-order">

              </div>
              <ul class="m-list">
                  <li class="list">
                      <span class="u-block"></span>
                      <span class="u-text">
                          6月6日（周三）上午
                      </span>
                  </li>
                  <li class="list">
                      <span class="u-block"></span>
                      <span class="u-text">
                          广播大厦一楼大厅
                      </span>
                  </li>
                  <li class="list">
                      <span class="u-block"></span>
                      <span class="u-text">
                          举行“给党唱支生日歌”活动启动仪式
                      </span>
                  </li>
              </ul>
            </div>
            <div class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">
                <div class="m-order">

                </div>
                <ul class="m-list">
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            拟邀请嘉宾
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            河南省委组织部领导&nbsp;&nbsp;河南省委宣传部领导
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            河南省新闻出版广电局领导&nbsp;&nbsp;驻村第一书记代表
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            恒丰银行郑州分行领导
                        </span>
                    </li>
                </ul>
            </div>
            <div class="item ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.25s" swiper-animate-delay="0.75s">
                <div class="m-order">

                </div>
                <ul class="m-list">
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            参加人员
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            基层党组织代表&nbsp;&nbsp;各行业优秀党员代表
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            热心听众代表&nbsp;&nbsp;高校学生代表
                        </span>
                    </li>
                    <li class="list">
                        <span class="u-block"></span>
                        <span class="u-text">
                            社会合唱团体代表&nbsp;&nbsp;河南广播电视台党员代表
                        </span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<script>


export default {
  name:'four'
}
</script>


<style lang="stylus" scoped>
.four {
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
    top: 325px;
    left: 0;
    right: 0;
    width: 100%;

    .m-title {
      position: absolute;
      top: -100px;
      right: 60px;
      width: 270px;
      height: 116px;
      background: url('../common/03.png') center center no-repeat;
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
      box-sizing: border-box;

      .item {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        &:nth-child(1) {
          .m-order {
            background: url('../common/icon-start-1.png') center center no-repeat;
            background-size: contain;
          }
        }

        &:nth-child(2) {
          .m-order {
            background: url('../common/icon-start-2.png') center center no-repeat;
            background-size: contain;
          }
        }

        &:nth-child(3) {
          .m-order {
            background: url('../common/icon-start-3.png') center center no-repeat;
            background-size: contain;
          }
        }

        .m-order {
          flex: 0 0 60px;
          width: 60px;
          height: 69px;
          line-height: 69px;
          text-align: center;
          font-size: 32px;
          color: #ffffff;
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

