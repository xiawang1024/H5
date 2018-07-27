<template>
  <div class="start">
    <div class="logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.6s" swiper-animate-delay="0s"></div>
    <div class="light ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.6s" swiper-animate-delay="0.5s"></div>
    <p class="desc ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="0.8s">
      助力融媒体产品建设   拓展新媒体传播渠道
    </p>
    <p class="desc ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1s" swiper-animate-delay="1s">
      提供全媒体解决方案   我们会为您做到更好
    </p>
    <p class="tel-wrap ani" swiper-animate-effect="fadeIn" swiper-animate-duration="1s" swiper-animate-delay="1.35s">
      咨询电话：65889277  65889303
    </p>
    <div class="qrcode-wrap">
      <div class="qrcode-box ani" swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="1.65s">
        <img src="./weixin-qrcode.png" alt="" class="img">
        <p class="text">河南广播公众号</p>
      </div>
      <div class="qrcode-box ani" swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="1.95s">
        <img src="./app-qrcode.png" alt="" class="img">
        <p class="text">河南广播APP</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'start',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
.start {
  position: relative;
  width: 1080px;
  height: 1920px;
  padding-top: 380px;
  text-align: center;
  color: #ffffff;
  background: url('http://www.hndt.com/h5/show/imgs/bg.png') center center no-repeat;
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;

  .logo {
    width: 100%;
    height: 332px;
    background: url('./logo.png') center center no-repeat;
    background-size: contain;
  }

  .light {
    margin-top: -60px;
    width: 100%;
    height: 224px;
    background: url('./light.png') center center no-repeat;
    background-size: contain;
  }

  .desc {
    margin-bottom: 30px;
    font-size: 40px;
  }

  .tel-wrap {
    margin-top: 80px;
    font-size: 40px;
  }

  .qrcode-wrap {
    width: 620px;
    margin: 100px auto 0;
    display: flex;
    justify-content: space-between;

    .qrcode-box {
      width: 280px;
      font-size: 0;
      text-align: center;

      .img {
        width: 222px;
      }

      .text {
        margin-top: 25px;
        width: 100%;
        font-size: 36px;
      }
    }
  }
}
</style>

