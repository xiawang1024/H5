<template>
  <div class="info">
    <h2 class="title" style="color:#e60811">
        2018云和数据 · 第六届中国创业者大会于7月19日，在郑州会展中心轩辕堂正式召开。
    </h2>
    <p class="desc">
      作为中部地区众创所启、众望所期的创业者大会，它俨然已成为中部地区乃至全国最顶尖的创业者交流平台。本届主题以新经济、新物种、新动能为主题，为河南及中部地区火热的经济发展态势增添新活力。本届大会为惠及更多的创业者，现场创业者将达5800位，其规模为历届之最。
    </p>
    <!-- <p class="desc">
      “给党唱支生日歌”大型系列文化活动的最后一场落地活动—— 千人拼党旗”将于7月1日在河南师范大学新联学院倾情呈现。
    </p> -->

  </div>
</template>

<script>
export default {
  name:'info'
}
</script>


<style lang="stylus" scoped>
.info {
  position: absolute;
  top: 502px;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 20px 30px 200px;
  box-sizing: border-box;

  .title {
    line-height: 1.6;
    font-size: 40px;
    color: #5f4a7a;
  }

  .desc {
    margin-top: 16px;
    line-height: 1.8125;
    text-indent: 2em;
    font-size: 30px;
    color: #333;
  }
}
</style>

