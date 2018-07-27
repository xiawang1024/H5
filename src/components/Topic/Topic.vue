<template>
  <div class="topic">
    <div class="logo ani"  swiper-animate-effect="flipInY" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
    <h2 class="title ani"  swiper-animate-effect="fadeInDown" swiper-animate-duration="0.6s" swiper-animate-delay="0s">{{showData.title}}</h2>
    <div class="text-wrap ani" v-for="(item,index) in showData.imgTextList" :key="index"  swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" :swiper-animate-delay="(index + 0.8) + 's'">
      <img :src="item.imgUrl" alt="" class="img">
      <p class="desc">{{item.text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'topic',
  data () {
    return {

    }
  },
  props:{
    showData:{
      type:Object,
      default:() => {
        return {}
      }
    }
  },
  components: {

  }
}
</script>

<style lang="stylus" scoped>
.topic {
  position: relative;
  width: 1080px;
  height: 1920px;
  padding-top: 250px;
  text-align: center;
  color: #ffffff;
  background: url('http://www.hndt.com/h5/show/imgs/bg.png') center center no-repeat;
  background-size: cover;
  overflow: hidden;
  box-sizing: border-box;

  .logo {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 114px;
    height: 90px;
    background: url('./logo.png') center center no-repeat;
    background-size: cover;
  }

  .title {
    margin-bottom: 115px;
    font-size: 64px;
  }

  .text-wrap {
    width: 873px;
    margin: 0 auto 75px;
    font-size: 0;
    text-align: left;

    .img {
      width: 100%;
    }

    .desc {
      margin-top: 20px;
      line-height: 1.25;
      font-size: 38px;
    }
  }
}
</style>

