<template>
	<div class="home">
    <down-tips></down-tips>
		<player v-show="!isShow"></player>
		<div class="tab-wrap">
			<div class="tab" @click="slide(0)" :class="isIndex == 0 ? 'isActive' : ''">活动简介</div>
			<!-- <div class="tab" @click="slide(1)" :class="isIndex == 1 ? 'isActive' : ''">节目单</div> -->
			<div class="tab" @click="slide(2)" :class="isIndex == 2 ? 'isActive' : ''">直播互动</div>
		</div>
    <keep-alive>
		  <component :is="componentId"></component>
    </keep-alive>
		<!-- <pay v-show="isShow"></pay> -->
	</div>
</template>

<script>
const TIMER_ID = 5 * 60 * 1000

import { visit } from 'api/index'

import DownTips from 'components/DownTips/DownTips'
import Player from 'components/Player/Player'
import Comment from 'components/Comment/Comment'
import Info from 'components/Info/Info'
import Program from 'components/Program/Program'
// import Pay from 'components/Pay/Pay'



export default {
	name: 'Home',
	components:{
		Player,
		Comment,
		Info,
    Program,
    DownTips,
		// Pay
	},
	data () {
		return {
			isShow:false,
			isIndex:0,
			componentId:Info,
			openid:''
		}
	},
	methods:{
		_isStart() {
			let startTime = Date.parse(new Date('2018-04-28 18:0:0')) || Date.parse(new Date('2018/04/28 18:0:0'))
			let endTime = Date.parse(new Date('2018-04-28 21:30:0')) || Date.parse(new Date('2018/04/28 21:30:0'))
			let nowTime = (new Date()).getTime()
			// alert(endTime)
			if(nowTime >= startTime && nowTime <= endTime) {
				this._visit()
			}else{
				if(nowTime <= startTime) {
					console.log('直播未开始')
					return false
				}
				if(nowTime >= endTime) {
					console.log('直播已结束')
					Toast.info({
                        message:'直播已结束，谢谢您的支持！',
                        duration:10000
                    })
					return false
				}
			}
		},
		_visit() {
			visit(this.openid).then((res) => {
				let data = res.data
				if(data.code == 0) {
					if(data.data == 0) {
						this.startTime()
					}else{
						if(data.data.isPay) {
							return
						}else{
							this._pay()
						}
					}
				}else{
					Toast.error({
              message:'好像哪里出现问题了！',
              duration:2000
          })
				}
			})
		},
		startTime() {
			this.timerId = setTimeout(() => {
				this.$nextTick(() => {
					this.isShow = true
					let video = document.querySelector('video')
					video.pause()
				})
			}, TIMER_ID)
		},
		_pay() {
			this.$nextTick(() => {
				this.isShow = true
				let video = document.querySelector('video')
				video.pause()
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
	destroyed() {
		clearTimeout(this.timerId)
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
