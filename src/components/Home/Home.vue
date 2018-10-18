<template>
  <div class="home">
    <down-tips></down-tips>
    <player></player>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import DownTips from 'components/DownTips/DownTips'
import Player from 'components/nativePlayer/index'
import Comment from 'components/Comment/Comment'



export default {
  name: 'Home',
  components: {
    Player,
    Comment,
    DownTips
  },
  data() {
    return {
      componentId: Comment,
      
    }
  },
  created() {},
  mounted() {
    
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
  font-size: 28px;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
}

.tab {
  flex: 1;
  text-align: center;
}

.tab.isActive {
  padding: 15px 0;
  border-radius: 4px;
  color: #fff;
  background: #0081dc;
}
</style>
