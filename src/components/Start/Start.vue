<template>
  <div class="start">
    <p class="top">新媒体技术研发组产品展示（服务类）</p>
    <div class="logo ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="0.6s" swiper-animate-delay="0s"></div>
    <div class="light ani" swiper-animate-effect="zoomIn" swiper-animate-duration="0.6s" swiper-animate-delay="0.5s"></div>
    <h2 class="title ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="0.9s">新媒体技术研发组 </h2>
    <h3 class="titlec ani" swiper-animate-effect="bounceIn" swiper-animate-duration="1s" swiper-animate-delay="1.5s">融媒体产品（服务类）展示</h3>
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
  padding-top: 520px;
  text-align: center;
  color: #ffffff;
  background: url('http://www.hndt.com/h5/show/imgs/bg.png') center center no-repeat;
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;

  .top {
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    font-size: 34px;
  }

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

  .title, .titlec {
    font-size: 66px;
  }

  .titlec {
    margin-top: 36px;
  }
}
</style>

