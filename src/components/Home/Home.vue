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
				<sign-up></sign-up>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
const { swiperAnimateCache, swiperAnimate } = require('base/js/animate.min.js')

import One from '../One/One'
import Two from '../Two/Two'

import SignUp from '../SignUp/SignUp'

export default {
	name: 'Home',	
	components:{
		One,
		Two,
		SignUp
	},
	data () {
		return {
			swiperOption: {
				direction : 'vertical',
				loop : true,
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
		setInterval(() => {
			console.log('simulate async data')
			if (this.swiperSlides.length < 10) {
				this.swiperSlides.push(this.swiperSlides.length + 1)
			}
		}, 3000)
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
</style>
