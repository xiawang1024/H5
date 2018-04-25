<template>
	<div class="home">	
		<swiper :options="swiperOption">
			<swiper-slide>				
				<one></one>
			</swiper-slide>
			<swiper-slide>				
				<two0></two0>
			</swiper-slide>
			<swiper-slide>				
				<end></end>
			</swiper-slide>	
			<swiper-slide>				
				<two></two>
			</swiper-slide>
			<swiper-slide>				
				<two1></two1>
			</swiper-slide>
			<swiper-slide>				
				<two2></two2>
			</swiper-slide>
			<swiper-slide>				
				<three></three>
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
import Two0 from '../Two0/Two0.vue'
import Two from '../Two/Two.vue'
import Two1 from '../Two1/Two1.vue'
import Two2 from '../Two2/Two2.vue'
import Three from '../Three/Three.vue'
import SignUp from '../SignUp/SignUp'
import End from '../End/End'

export default {
	name: 'Home',	
	components:{
		One,
		Three,
		Two0,
		Two,
		Two1,
		Two2,
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
</style>
