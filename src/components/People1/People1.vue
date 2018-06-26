<template>
    <div class="host2">
        <!-- <div class="logo ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1s" swiper-animate-delay="1s"></div> -->
        <div class="top-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="1s" swiper-animate-delay="0s"></div>
        <div class="top-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s"></div>
        <div class="bottom-left ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.25s" swiper-animate-delay="0s"></div>
        <div class="bottom-right ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.3s" swiper-animate-delay="0s"></div>
        <div class="g-body">
          <ul class="list-wrap">
            <li class="list">出品人 ：王仁海</li>
            <li class="list">总监制 ：崔为兵  杨中</li>
            <li class="list">总策划 ：陈秋生</li>
            <li class="list">监&nbsp;&nbsp;&nbsp;制 ：张建生  李仙芝</li>
            <li class="list">策&nbsp;&nbsp;&nbsp;划 ：李浩然 </li>
            <li class="list">统&nbsp;&nbsp;&nbsp;筹 ：朱晓晖  丁洁  王楠</li>
            <li class="list">艺术总监、总导演 ：杜宏亚（特邀）</li>
            <li class="list">执行策划 ：梦迪  袁满</li>
            <li class="list">副总导演 ：梦迪  赵飞  赵丽</li>
            <li class="list">文学撰稿 ：郭建伟</li>
            <li class="list">画外音 ：皓然  袁芳  李浩然</li>
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
    }
  }
}
</style>

