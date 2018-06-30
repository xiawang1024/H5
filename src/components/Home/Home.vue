<template>
	<div class="home">
		<swiper :options="swiperOption">
			<swiper-slide>
				<one></one>
			</swiper-slide>
      <swiper-slide>
				<page-1></page-1>
			</swiper-slide>
      <swiper-slide>
				<page-2></page-2>
			</swiper-slide>
      <swiper-slide>
				<end></end>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
const { swiperAnimateCache, swiperAnimate } = require('base/js/animate.min.js')

import One from '../One/One.vue'

import Page1 from '../Page1/Page1'
import Page2 from '../Page2/Page2'

import End from '../End/End'



export default {
	name: 'Home',
	components:{
    One,
    Page1,
    Page2,
    End
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

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
.home, .swiper-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
