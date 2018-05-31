<template>
    <div class="two">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <div class="m-title ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0.75s"></div>
          <div class="m-body ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.5s">
            <!-- <div aspectratio w-16-9 class="img-wrap">
                <img aspectratio-content src="../../assets/img.png" alt="">
            </div> -->
            <div class="text-wrap">
                今年是中国共产党建党97周年，是全面贯彻落实党的十九大精神的开局之年，是改革开放40周年，也是开启新时代河南全面建设社会主义现代化新征程的重要一年。为深入学习领会习近平新时代中国特色社会主义思想，强化主流媒体的政治担当，河南广播电视台特别策划推出“给党唱支生日歌——庆祝中国共产党建党97周年大型系列文化活动”，为“让中原更加出彩” 营造良好的舆论氛围。
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
    top: 273px;
    left: 0;
    right: 0;
    width: 100%;

    .m-title {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 149px;
      background: url('../common/01.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 198px;
      left: 0;
      width: 100%;
      text-align: left;
      color: #333;
      letter-spacing: 0.2px;
      padding: 0 40px;
      box-sizing: border-box;

      .img-wrap {
        width: 300px;
        float: right;
        margin-top: 15px;
        margin-left: 20px;
      }

      .text-wrap {
        line-height: 2;
        font-size: 24px;
      }
    }
  }
}
</style>

