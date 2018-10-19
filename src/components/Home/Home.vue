<template>
  <div class="home">
    <down-tips></down-tips>
    <player></player>
    <div class="tab-wrap">
      <div class="tab" @click="slide(0)" :class="isIndex == 0 ? 'isActive' : ''">预告</div>
      <div class="tab" @click="slide(1)" :class="isIndex == 1 ? 'isActive' : ''">互动</div>
      <div class="tab" @click="slide(2)" :class="isIndex == 2 ? 'isActive' : ''">回看</div>
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
import DownTips from 'components/DownTips/DownTips'
import Player from 'components/nativePlayer/index'
import Comment from 'components/Comment/Comment'
import Info from 'components/Info/Info'
import Program from 'components/Program/Program'

import Bus from 'base/js/bus'
import weui from 'weui.js'

export default {
  name: 'Home',
  components: {
    Player,
    Comment,
    DownTips,
    Info,
    Program
  },
  data() {
    return {
      isIndex: 1,
      componentId: Comment,
      backSrc: '' //回看地址
    }
  },
  created() {},
  mounted() {
    Bus.$on('initPlayer', data => {
      let { video } = data
      this.backSrc = video
    })
  },
  methods: {
    slide(index) {
      this.isIndex = index
      if (index === 0) {
        this.componentId = Info
      } else if (index === 1) {
        this.componentId = Comment
      } else {
        if (!this.backSrc) {
          weui.alert('暂无回看', () => {
            this.isIndex = 1
          })
        } else {
          Bus.$emit('backPlay', this.backSrc)
          weui.toast('正在切换', {
            callback: () => {
              this.isIndex = 1
            }
          })
        }
      }
    }
  }
}
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

.tab-wrap {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  font-size: 34px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}

.tab {
  flex: 0 0 120px;
  text-align: center;
}

.tab.isActive {
  padding: 15px 0;
  // border-radius: 4px;
  color: #0081dc;
  border-bottom: 2px solid #0081dc;
}
</style>
