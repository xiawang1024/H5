<template>
	<div class="home">		
		<swiper :options="swiperOption">
			<swiper-slide>				
				<one></one>
			</swiper-slide>
			<swiper-slide>				
				<two></two>
			</swiper-slide>
			<swiper-slide>				
				<three></three>
			</swiper-slide>
			<swiper-slide>				
				<sign-up></sign-up>
			</swiper-slide>
			<swiper-slide>				
				<end></end>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
const { swiperAnimateCache, swiperAnimate } = require('base/js/animate.min.js')

import One from '../One/One'
import Two from '../Two/Two'
import Three from '../Three/Three'
import End from '../End/End'

import SignUp from '../SignUp/SignUp'

export default {
	name: 'Home',	
	components:{
		One,
		Two,
		Three,
		SignUp,
		End
	},
	data () {
		return {
			swiperOption: {
				direction : 'vertical',
				// loop : true,
				pagination: {
					el: '.swiper-pagination'
				},
				on:{
					init(){
						swiperAnimateCache(this); //隐藏动画元素 
						swiperAnimate(this); //初始化完成开始动画
					}, 
					slideChangeTransitionEnd(){ 
						swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
					} 
				}
			},
			swiperSlides: [1, 2, 3, 4, 5]
		}
	},
	mounted() {
		
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.home,.swiper-container
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    width 100%
    height 100%
.logo
	position absolute
	top 22px
	left 0
	width 100%
	height 75px
	background url('../common/logo.png') right 30px center no-repeat
	background-size contain 
.left
	position absolute
	top 324px
	left 0
	width 131px
	height 204px
	background url('../common/left.png') center center no-repeat
	background-size cover
.right
	position absolute
	bottom 0
	right 0
	width 192px
	height 301px
	background url('../common/right.png') center center no-repeat
	background-size cover
.title
	position absolute
	top 520px
	left 0
	width 100%
	height 168px
	background url('../common/title.png') center center no-repeat
	background-size contain
</style>
