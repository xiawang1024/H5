<template>
	<div class="home">		
		<swiper :options="swiperOption">
			<swiper-slide>				
				<sign-up></sign-up>
			</swiper-slide>			
		</swiper>
	</div>
</template>

<script>
const { swiperAnimateCache, swiperAnimate } = require('base/js/animate.min.js')

import SignUp from 'components/SignUp/SignUp'

export default {
	name: 'Home',	
	components:{
		SignUp
	},
	data () {
		return {
			swiperOption: {				
				on:{
					init(){
						swiperAnimateCache(this); //隐藏动画元素 
						swiperAnimate(this); //初始化完成开始动画
					}, 
					slideChangeTransitionEnd(){ 
						swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
					} 
				}
			}
		}
	},
	mounted() {
		
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
