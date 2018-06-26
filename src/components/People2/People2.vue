<template>
    <div class="host2">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <ul class="list-wrap ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2.5s" swiper-animate-delay="0s">
            <li class="list">舞美统筹：苏伟</li>
            <li class="list">视频制作：宋歌</li>
            <li class="list">LED大屏：陈胜新</li>
            <li class="list">字&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;幕：贾讯</li>
            <li class="list">灯&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;光：张志忠  郝小军</li>
            <li class="list">音&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;响：徐振勇</li>
            <li class="list">机械升降：杨广</li>
            <li class="list">舞台监督：宋超  吴豪  王楠</li>
            <li class="list">新闻统筹：徐晓慧</li>
            <li class="list hndt">网络支持：河南广播网</li>

          </ul>
        </div>
    </div>
</template>




<script>


export default {
  name:'host2'
}
</script>


<style lang="stylus" scoped>
$color = #e60012;

.host2 {
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
    top: 250px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;

    .list-wrap {
      width: 460px;
      margin: 0 auto;
      line-height: 1.8;
      font-size: 28px;
      color: $color;

      .list.hndt {
        font-size: 32px;
        margin-top: 20px;
      }
    }
  }
}
</style>

