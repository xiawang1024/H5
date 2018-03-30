<template>
	<div class="home">
		<h1>Hello Wx</h1>
		<swiper :options="swiperOption">
			<swiper-slide v-for="slide in swiperSlides" :key="slide">				
				<p class="ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s" style="height:60px">I'm Slide {{ slide }}</p>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
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
<style scoped>

</style>
