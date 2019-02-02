<template>
  <div class="hfive">
    <p class="top">新媒体技术研发组产品展示（服务类）</p>
    <div
      class="logo ani"
      swiper-animate-effect="flipInY"
      swiper-animate-duration="1s"
      swiper-animate-delay="0s"
    ></div>
    <h1
      class="title ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.6s"
      swiper-animate-delay="0s"
    >{{showData.title}}</h1>
    <h2
      class="titlec ani"
      swiper-animate-effect="fadeInDown"
      swiper-animate-duration="0.6s"
      swiper-animate-delay="0s"
    >{{showData.subTitle}}</h2>
    <carousel-3d
      :autoplay="true"
      :autoplay-timeout="3000"
      :width='width'
      :height='height'
      :border="0"
      class="carousel-wrap"
    >
      <slide
        v-for="(slide, i) in showData.imgUrlList"
        :index="i"
        :key="i"
      >
        <img :src="slide.url">
      </slide>
    </carousel-3d>
    <div class="text-wrap">
      <p
        class="text ani"
        swiper-animate-effect="fadeIn"
        swiper-animate-duration="0.8s"
        swiper-animate-delay="0.5s"
        v-for="(item,index) in showData.descText"
        :key="index"
      >{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "hfive",
  data() {
    return {
      width: 180,
      height: 285
    };
  },
  props: {
    showData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {
    let screenWidth = window.innerWidth;
    let width = (screenWidth / 2) | 0;
    this.$nextTick(() => {
      this.width = width;
      this.height = (width * 1.586) | 0;
    });
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
.carousel-3d-slide {
  background: none;
}

.hfive {
  position: relative;
  width: 1080px;
  height: 1920px;
  padding-top: 200px;
  text-align: center;
  color: #ffffff;
  background: url('http://www.hndt.com/h5/xinwen/imgs/bg.png') center center no-repeat;
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
    position: absolute;
    top: 50px;
    left: 50px;
    width: 114px;
    height: 90px;
    background: url('./logo.png') center center no-repeat;
    background-size: cover;
  }

  .title, .titlec {
    letter-spacing: 4px;
    font-size: 64px;
    margin-bottom: 20px;
  }

  .titlec {
    margin-bottom: 70px;
  }

  .text-wrap {
    margin-top: 60px;
    font-size: 44px;

    .text {
      margin-top: 20px;
    }
  }
}
</style>
