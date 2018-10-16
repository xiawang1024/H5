<template>
  <div class="home">
    <down-tips></down-tips>
    <player :src='liveStream' :poster='poster'></player>
    <div class="tab-wrap">
      <!-- <div class="tab" @click="slide(0)" :class="isIndex == 0 ? 'isActive' : ''">活动简介</div> -->
      <!-- <div class="tab" @click="slide(1)" :class="isIndex == 1 ? 'isActive' : ''">节目单</div> -->
      <!-- <div class="tab" @click="slide(2)" :class="isIndex == 2 ? 'isActive' : ''">直播互动</div> -->
    </div>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
    <!-- <pay v-show="isShow"></pay> -->
  </div>
</template>

<script>


import { getChannelItem } from 'api/index'
import {HU_DONG_ID} from '@/config.js'

import DownTips from 'components/DownTips/DownTips'
import Player from 'components/nativePlayer/index'
import Comment from 'components/Comment/Comment'



export default {
	name: 'Home',
	components:{
		Player,
		Comment,
    DownTips
	},
	data () {
		return {

			isIndex:0,
			componentId:Comment,
      openid:'',
      liveStream:'',
      poster:''
		}
  },
  mounted() {
    this._getStream()
  },
	methods:{

    _getStream() {
        getChannelItem(HU_DONG_ID).then((res) => {
            let data = res.data
            console.log(data)
            this.liveStream = data.video_streams[0]
            this.poster = `http://program.hndt.com${data.image}`
            this.$nextTick(() => {

            })
        })
    },
		slide(type) {
			this.isIndex = type
			if(type == 0) {
				this.componentId = Info
			}else if(type == 1) {
				this.componentId = Program
			}else {
				this.componentId = Comment
			}
		}
	},

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
