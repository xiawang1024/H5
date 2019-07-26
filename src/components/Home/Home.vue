<template>
  <div class="home">
    <!-- <down-tips></down-tips> -->
    <Down></Down>
    <player></player>
    <div class="wrap">
      <div v-if="isShowOnline" class="online">
        <p class="name">观看人数:</p>
        <p class="num">{{online}}</p>
      </div>
      <div class="tab-wrap">
        <div class="tab" @click="slide(0)" :class="isIndex == 0 ? 'isActive' : ''">简介</div>
        <div class="tab" @click="slide(1)" :class="isIndex == 1 ? 'isActive' : ''">互动</div>
        <!-- <div class="tab" @click="slide(2)" :class="isIndex == 2 ? 'isActive' : ''">回看</div> -->
      </div>
    </div>

    <!-- <component :is="componentId"></component> -->
    <div class="tab-content">
      <info v-show="isIndex == 0"></info>
      <comment v-show="isIndex==1"></comment>
      <!-- <program v-show="isIndex == 2"></program> -->
    </div>
  </div>
</template>

<script>
import DownTips from "components/DownTips/DownTips";
import Down from "components/Down/index";
import Player from "components/nativePlayer/index";
import Comment from "components/Comment/Comment";
import Info from "components/Info/Info";
// import Program from 'components/Program/Program'

import Bus from "base/js/bus";
import weui from "weui.js";

export default {
  name: "Home",
  components: {
    Player,
    Comment,
    DownTips,
    Down,
    Info
    // Program
  },
  data() {
    return {
      isIndex: 0,
      componentId: Info,
      online: "获取中...", //在线人数
      isShowOnline: false
    };
  },
  created() { },
  mounted() {
    Bus.$on("initComment", data => {
      this.online = data;
    });
    Bus.$on("initPlayer", data => {
      let { online } = data;
      if (online == 1) {
        this.isShowOnline = true;
      } else {
        this.isShowOnline = false;
      }
      // setTimeout(() => {
      //   this.slide(0)
      // }, 20)
    });
  },
  methods: {
    slide(index) {
      this.isIndex = index;
      if (index === 0) {
        this.componentId = Info;
      } else if (index === 1) {
        Bus.$emit("tabClick");
        this.componentId = Comment;
      } else {
        this.componentId = Program;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.tips {
  width: 100%;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  text-align: center;
}

.wrap {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;

  .online {
    flex: 0 0 120px;
    font-size: 24px;
    text-align: center;

    .name {
      margin: 8px 0;
    }
  }

  .tab-wrap {
    flex: 1;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    font-size: 34px;
    box-sizing: border-box;

    .tab {
      flex: 0 0 120px;
      text-align: center;

      &.isActive {
        padding: 15px 0;
        // border-radius: 4px;
        color: #0081dc;
        border-bottom: 2px solid #0081dc;
      }
    }
  }
}

.tab-content {
  position: absolute;
  top: 502px;
  left: 0;
  right: 0;
  bottom: 0px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding: 20px 30px 200px;
  box-sizing: border-box;
}
</style>
