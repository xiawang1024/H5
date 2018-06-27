<template>
    <div class="people">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <!-- <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div> -->
        <div class="g-body">
          <img src="./1.png" alt="" class="img img-1 ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="1.25s" swiper-animate-delay="0.3s">
          <img src="./2.png" alt="" class="img img-2 ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.3s">
          <div class="map"><a href="http://apis.map.qq.com/uri/v1/marker?marker=coord:34.844920,113.678530;title:河南电视台8号演播厅;addr:河南省郑州市金水区花园路北段8号&referer=myapp" class="link ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0.5s">去导航</a></div>
        </div>
    </div>
</template>

<script>


export default {
  name:'people'
}

</script>


<style lang="stylus" scoped>
$color = #e60012;

.people {
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
    top: 230px;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    padding: 0 40px;
    box-sizing: border-box;

    .img-1 {
      width: 537px;
      height: 277px;
    }

    .img-2 {
      margin-top: 50px;
      width: 581px;
      height: 326px;
    }

    .link {
      margin-top: 50px;
      display: inline-block;
      width: 200px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 28px;
      color: $color;
      border: 1px solid $color;
      border-radius: 6px;
    }
  }
}
</style>

