<template>
	<div class="home">
		<h1>Hello Wx</h1>
		<swiper :options="swiperOption">
			<swiper-slide>				
				<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="height:60px">I'm Slide</p>
			</swiper-slide>
			
		</swiper>
	</div>
</template>

<script>
const { swiperAnimateCache, swiperAnimate } = require('base/js/animate.min.js')

export default {
	name: 'Home',	
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
