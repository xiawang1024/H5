<template>
  <div class="start">

    <div
      class="logo ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.6s"
      swiper-animate-delay="0s"
    ></div>

  </div>
</template>

<script>
export default {
  name: "start",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.start {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 220px;
  text-align: center;
  color: #ffffff;
  background: url('http://www.hndt.com/h5/xinwen/imgs/bg.png') center center no-repeat;
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;

  .logo {
    width: 100%;
    height: 780px;
    background: url('./start.png') center center no-repeat;
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

