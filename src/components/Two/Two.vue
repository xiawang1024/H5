<template>
    <div class="two">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left"></div>
        <div class="top-right"></div>
        <div class="bottom-left"></div>
        <div class="bottom-right"></div>
        <div class="g-body">
          <div class="m-title"></div>
          <div class="m-body">
            <div aspectratio w-16-9 class="img-wrap">
                <img aspectratio-content src="../../assets/img.png" alt="">
            </div>
            <div class="text-wrap">
                <p>
                    2018年是中国共产党建党97周年，为深入学习领会习近平新时代中国特色社会主义思想，强化主流媒体的政治担当，饱含热情说好“三句话”，展现全省各界人士的爱党情怀和奋斗热情，让中原更加出彩。我台拟举办“给党唱支生日歌——庆祝中国共产党建党97周年大型系列文化活动。”
                </p>
                <p>
                    通过两场线上和三场线下活动的持续呈现渐次把民众的参与热情推向高潮，凝聚起奋进新时代的强大动力，推动我党新的伟大思想往深里走、往实里走、往心里走，倾情讲好河南故事、中国故事。
                </p>
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
    top: 232px;
    left: 0;
    right: 0;
    width: 100%;

    .m-title {
      position: absolute;
      top: 0px;
      left: 0;
      width: 100%;
      height: 116px;
      background: url('../common/01.png') center center no-repeat;
      background-size: contain;
    }

    .m-body {
      position: absolute;
      top: 150px;
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
        line-height: 1.7;
        font-size: 24px;
        text-indent: 2em;
      }
    }
  }
}
</style>

