<template>
	<div class="home">		
		<player v-show="!isShow"></player>
		<div class="tab-wrap">
			<div class="tab" @click="slide(0)" :class="isIndex == 0 ? 'isActive' : ''">活动简介</div>
			<div class="tab" @click="slide(1)" :class="isIndex == 1 ? 'isActive' : ''">节目单</div>
			<!-- <div class="tab" @click="slide(2)" :class="isIndex == 2 ? 'isActive' : ''">直播互动</div> -->
		</div>
		<component :is="componentId"></component>
		<pay v-show="isShow"></pay>
	</div>
</template>

<script>

import Player from 'components/Player/Player'
import Comment from 'components/Comment/Comment'
import Info from 'components/Info/Info'
import Program from 'components/Program/Program'
import Pay from 'components/Pay/Pay'

export default {
	name: 'Home',	
	components:{
		Player,
		Comment,
		Info,
		Program,
		Pay
	},
	data () {
		return {
			isShow:false,
			isIndex:0,
			componentId:Info,
			openId:''
		}
	},
	created() {
		this.openId = this._getQueryString('openId')
	},
	mounted() {
		setTimeout(() => {
			this.startTime()
		}, 6000)

		setTimeout(() => {
			this.isShow = false
					let video = document.querySelector('video')
					video.pause()
		},10000)
	},
	methods:{
		_getQueryString(name) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
		startTime() {
			this.timerId = setTimeout(() => {
				this.$nextTick(() => {
					this.isShow = true
					let video = document.querySelector('video')
					video.pause()				
				})
			}, 1000)
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
<style scoped>
.tab-wrap{
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding:0 5px;
	border-bottom:1px solid #e5e5e5;
	box-sizing: border-box;
}
.tab{
	flex:1;
	text-align: center;
}
.tab.isActive{
	padding:6px 0;
	border-radius:4px;
	color:#fff;
	background: #0081dc;
}
</style>
