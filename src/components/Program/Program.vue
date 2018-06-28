<template>
  <div class="program">
    <!-- <div class="list-box">
      <h3 class="title">序言</h3>
      <ul class="list-wrap">
        <li class="list">《中国有个河南》</li>
        <li class="list">演唱：连续</li>
      </ul>
    </div>
    <div class="list-box">
      <h3 class="title">第一篇章：传承·七月是首歌</h3>
      <ul class="list-wrap">
        <li class="list">《红船，从南湖起航》</li>
        <li class="list">作者：刘曙光</li>
        <li class="list">朗诵：肖月</li>
      </ul>
      <ul class="list-wrap">
        <li class="list">《红旗渠》</li>
        <li class="list">朗诵：吴广林</li>
      </ul>
      <ul class="list-wrap">
        <li class="list">《37秒》</li>
        <li class="list">朗诵：周文凯</li>
      </ul>
    </div>
    <div class="list-box">
      <h3 class="title">第二篇章：深沉·河南这片土</h3>
      <ul class="list-wrap">
        <li class="list">《土地情诗》</li>
        <li class="list">作者：舒婷</li>
        <li class="list">朗诵：木子、李芮、皓然</li>
      </ul>
      <ul class="list-wrap">
        <li class="list">《念奴娇·追思焦裕禄》</li>
        <li class="list">作者：习近平</li>
        <li class="list">朗诵：吴震宇</li>
      </ul>
      <ul class="list-wrap">
        <li class="list">《祖国，我为您拉纤》</li>
        <li class="list">作者：张鲜明</li>
        <li class="list">朗诵：王贺敏、叶子、谢时雨、雷开通</li>
      </ul>
    </div>
    <div class="list-box">
      <h3 class="title">第三篇章：美好·心中那个梦</h3>
      <ul class="list-wrap">
        <li class="list">《郑州，梦想起飞的花园》</li>
        <li class="list">作者：阿娉</li>
        <li class="list">朗诵：雨桐、圈圈、Seven、高峰</li>
      </ul>
      <ul class="list-wrap">
        <li class="list">《爷爷，奶奶——写给王宽、王淑荣夫妇》</li>
        <li class="list">作者：萍子</li>
        <li class="list">朗诵：李玉</li>
      </ul>
      <ul class="list-wrap">
        <li class="list">《飞书引凤》</li>
        <li class="list">作者：颜华</li>
        <li class="list">朗诵：新迪、阿木</li>
      </ul>
      <ul class="list-wrap">
        <li class="list">《跟着新时代奔跑》</li>
        <li class="list">作者：陈宏坤</li>
        <li class="list">朗诵：肖洒、郭城、申伟辉、雨薇、蔚蓝、优扬</li>
      </ul>
    </div>
    <div class="list-box">
      <h3 class="title">尾声：《中国共产党章程》</h3>
    </div> -->
    <img src="./01.jpg" alt="" class="img">
    <img src="./02.jpg" alt="" class="img">
  </div>
</template>

<script>
export default {
  name:'program'
}
</script>


<style lang="stylus" scoped>
.program {
  position: absolute;
  top: 502px;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  // padding: 30px 60px 200px;
  box-sizing: border-box;

  .img {
    display: block;
    width: 100%;
  }

  .list-box {
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;

    .title {
      font-size: 30px;
      color: #e60811;
    }

    .list-wrap {
      padding: 15px 0;
      font-size: 26px;
      color: #666;

      .list {
        line-height: 1.8;
        text-indent: 15px;

        &:first-child {
          text-indent: 0;
          color: #000;
        }
      }
    }
  }
}
</style>

