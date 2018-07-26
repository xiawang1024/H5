<template>
  <div class="hfive">
    <div class="logo"></div>
    <h1 class="title">{{showData.title}}</h1>
    <h2 class="titlec">{{showData.subTitle}}</h2>
    <carousel-3d :autoplay="true" :autoplay-timeout="3000" :width='500' :height='793' :border="0" class="carousel-wrap">
      <slide v-for="(slide, i) in showData.imgUrlList" :index="i" :key="i">
        <img :src="slide.url">
      </slide>
    </carousel-3d>
    <div class="text-wrap">
      <p class="text" v-for="(item,index) in showData.descText" :key="index">{{item.text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  name:'hfive',
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
.carousel-3d-slide {
  background: none;
}

.hfive {
  position: relative;
  width: 1080px;
  height: 1920px;
  padding-top: 360px;
  text-align: center;
  color: #ffffff;
  background: url('./bg.png') center center no-repeat;
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

  .title, .titlec {
    font-size: 70px;
    margin-bottom: 20px;
  }

  .titlec {
    margin-bottom: 66px;
  }

  .text-wrap {
    margin-top: 40px;
    font-size: 38px;

    .text {
      margin-top: 14px;
    }
  }
}
</style>
