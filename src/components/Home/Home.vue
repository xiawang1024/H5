<template>
	<div class="home">	
		<swiper :options="swiperOption">
			<swiper-slide>				
				<one></one>
			</swiper-slide>
			<swiper-slide>				
				<three></three>
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

import One from '../One/One.vue'
import Three from '../Three/Three.vue'
import Two from '../Two/Two.vue'
import SignUp from '../SignUp/SignUp'

export default {
	name: 'Home',	
	components:{
		One,
		Three,
		Two,
		SignUp
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
</style>
