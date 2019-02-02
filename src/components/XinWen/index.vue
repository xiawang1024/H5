<template>
  <div class="xin-wen">
    <div class="logo-wrap">
      <div
        class="logo ani"
        swiper-animate-effect="flipInY"
        swiper-animate-duration="1s"
        swiper-animate-delay="0s"
      ></div>
      <h2
        class="title ani"
        swiper-animate-effect="fadeInDown"
        swiper-animate-duration="0.6s"
        swiper-animate-delay="0s"
      >新闻广播</h2>
    </div>
    <div class="text-wrap">
      <h3
        class="title ani"
        swiper-animate-effect="fadeIn"
        swiper-animate-duration="0.6s"
        swiper-animate-delay="0.25s"
      >{{showData.title}}</h3>
      <p
        :class="{desc:true,noTitle:noTitle,ani:true}"
        swiper-animate-effect="fadeInLeft"
        swiper-animate-duration="0.6s"
        swiper-animate-delay="0.25s"
      >
        <span class="icon"></span>
        <span class="text">{{showData.subTitle}}</span>
      </p>
    </div>
    <Voice
      v-if='showData.audio'
      class="ani"
      swiper-animate-effect="fadeIn"
      swiper-animate-duration="0.6s"
      swiper-animate-delay="0.25s"
    ></Voice>
    <div :class="[{'img-wrap':true},topClass]">
      <img
        :src="showData.imgObj.src"
        alt=""
        class="img ani"
        @click="openWindow"
        swiper-animate-effect="fadeIn"
        swiper-animate-duration="0.6s"
        swiper-animate-delay="0.4s"
      >
    </div>
  </div>
</template>

<script>
import Voice from "../Vioce/index.vue";
export default {
  name: "XinWen",
  components: {
    Voice
  },
  props: {
    showData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    noTitle: function() {
      return !this.showData.title;
    },
    topClass: function() {
      return `top${this.showData.top}`;
    }
  },
  methods: {
    openWindow() {
      let url = this.showData.imgObj.url;
      if (url) {
        window.open(url);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.xin-wen {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  text-align: center;
  color: #ffffff;
  background: url('http://www.hndt.com/h5/xinwen/imgs/bg.png') center center no-repeat;
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;

  .logo-wrap {
    display: flex;
    align-items: center;
    margin-top: 35px;
    padding: 0 65px;
    box-sizing: border-box;

    .logo {
      width: 144px;
      height: 77px;
      background: url('./logo.png') center center no-repeat;
      background-size: cover;
    }

    .title {
      margin-left: 40px;
      font-size: 30px;
    }
  }

  .text-wrap {
    padding: 0 65px;
    box-sizing: border-box;

    .title {
      margin-top: 40px;
      margin-bottom: 30px;
      font-size: 40px;
    }

    .desc {
      display: flex;
      align-items: center;

      &.noTitle {
        margin-top: 80px;
      }

      .icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url('./star.png') center center no-repeat;
        background-size: cover;
      }

      .text {
        margin-left: 12px;
        font-size: 24px;
      }
    }
  }

  .img-wrap {
    width: 100%;
    margin-top: 30px;
    box-sizing: border-box;

    &.top11 {
      margin-top: 120px;

      .img {
        width: 701px;
      }
    }

    &.top10 {
      margin-top: 50px;
      padding: 0 50px;

      .img {
        width: 642px;
      }
    }

    &.top9 {
      .img {
        width: 550px;
      }
    }

    &.top8 {
      .img {
        width: 562px;
      }
    }

    &.top7 {
      // margin-top: 50px;
      img {
        width: 586px;
      }
    }

    &.top6 {
      // margin-top: 50px;
      img {
        width: 638px;
      }
    }

    &.top5 {
      margin-top: 50px;

      img {
        width: 749px;
      }
    }

    &.top4 {
      .img {
        width: 634px;
      }
    }

    &.top3 {
      margin-top: 100px;
      padding: 0 40px;

      .img {
        width: 679px;
      }
    }

    &.top2 {
      margin-top: 65px;

      .img {
        width: 750px;
      }
    }

    &.top1 {
      .img {
        width: 606px;
      }
    }

    .img {
      width: 606px;
      // max-height: 907px;
    }
  }
}
</style>

