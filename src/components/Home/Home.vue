<template>
	<div class="home">
		<swiper :options="swiperOption">
			<swiper-slide>
				<one></one>
			</swiper-slide>
      <swiper-slide>
				<host-1></host-1>
			</swiper-slide>
      <swiper-slide>
				<host-2></host-2>
			</swiper-slide>
      <swiper-slide>
				<page-1></page-1>
			</swiper-slide>
      <swiper-slide>
				<page-2></page-2>
			</swiper-slide>
      <swiper-slide>
				<page-3></page-3>
			</swiper-slide>
      <swiper-slide>
				<page-4></page-4>
			</swiper-slide>
      <swiper-slide>
				<page-5></page-5>
			</swiper-slide>
      <swiper-slide>
				<page-6></page-6>
			</swiper-slide>
      <swiper-slide>
				<page-7></page-7>
			</swiper-slide>
      <swiper-slide>
				<page-8></page-8>
			</swiper-slide>
      <swiper-slide>
				<page-9></page-9>
			</swiper-slide>
      <swiper-slide>
				<page-10></page-10>
			</swiper-slide>
      <swiper-slide>
				<people-1></people-1>
			</swiper-slide>
      <swiper-slide>
				<people-2></people-2>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
const { swiperAnimateCache, swiperAnimate } = require('base/js/animate.min.js')

import One from '../One/One.vue'
import Host1 from '../Host1/Host1'
import Host2 from '../Host2/Host2'
import Page1 from '../Page1/Page1'
import Page2 from '../Page2/Page2'
import Page3 from '../Page3/Page3'
import Page4 from '../Page4/Page4'
import Page5 from '../Page5/Page5'
import Page6 from '../Page6/Page6'
import Page7 from '../Page7/Page7'
import Page8 from '../Page8/Page8'
import Page9 from '../Page9/Page9'
import Page10 from '../Page10/Page10'
import People1 from '../People1/People1'
import People2 from '../People2/People2'


export default {
	name: 'Home',
	components:{
    One,
    Host1,
    Host2,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    Page9,
    Page10,
    People1,
    People2
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
