<template>
  <div class="info">
    <h2 class="title" style="color:#e60811">
        河南广播电视台“给党唱支生日歌”大型系列文化活动之主题歌会即将燃情开唱！
    </h2>
    <p class="desc">
      今晚19：40，由河南广播电视台策划推出的“给党唱支生日歌”大型系列文化活动之主题歌会将在河南广播电视台8号演播厅燃情开唱。本次主题歌会由河南广播电视台、恒丰银行郑州分行主办，广播广告经营中心和魅力881河南音乐广播承办，歌会将以群众性歌咏演唱的方式回顾党的光辉历程，用一首首难忘的经典旋律回顾建党97周年辉煌成就。
    </p>

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

