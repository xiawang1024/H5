<template>
	<div class="home">
		<swiper :options="swiperOption">
			<swiper-slide>
				<start></start>
			</swiper-slide>
			<swiper-slide>
				<hfive :showData="showData1"></hfive>
			</swiper-slide>
      <swiper-slide>
				<hfive :showData="showData2"></hfive>
			</swiper-slide>
      <swiper-slide>
				<hfive :showData="showData3"></hfive>
			</swiper-slide>
      <swiper-slide>
				<hfive :showData="showData4"></hfive>
			</swiper-slide>
      <swiper-slide>
				<hfive :showData="showData5"></hfive>
			</swiper-slide>
      <swiper-slide>
				<topic :showData="showData6"></topic>
			</swiper-slide>
      <swiper-slide>
				<topic :showData="showData7"></topic>
			</swiper-slide>
      <swiper-slide>
				<topic :showData="showData8"></topic>
			</swiper-slide>
      <swiper-slide>
				<topic :showData="showData9"></topic>
			</swiper-slide>
      <swiper-slide>
				<end></end>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
const { swiperAnimateCache, swiperAnimate } = require('base/js/animate.min.js')

import Hfive from '../Hfive/Hfive.vue'
import Topic from '../Topic/Topic.vue'
import Start from '../Start/Start.vue'
import End from '../End/End.vue'

const showData1 = require('./data1.js')
const showData2 = require('./data2.js')
const showData3 = require('./data3.js')
const showData4 = require('./data4.js')
const showData5 = require('./data5.js')
const showData6 = require('./data6.js')
const showData7 = require('./data7.js')
const showData8 = require('./data8.js')
const showData9 = require('./data9.js')



export default {
	name: 'Home',
	components:{
    Hfive,
    Topic,
    Start,
    End
	},
	data () {
		return {
      showData1,
      showData2,
      showData3,
      showData4,
      showData5,
      showData6,
      showData7,
      showData8,
      showData9,
			swiperOption: {
				// direction : 'vertical',
        // loop : true,
        speed:800,
        autoplay:{
          delay:15000,
          disableOnInteraction:false
        },
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
