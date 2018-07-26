// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from 'router'
import 'base/stylus/index.styl';

import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

/* 微信自定义分享 */
import 'wechat/index.js';

/* swiper插件 */

import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'animate.css';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

/* fastclick修复移动端点击延迟300ms */
import fastclick from 'fastclick';
fastclick.attach(document.body);

function screen() {
	if (window.orientation == 90 || window.orientation == -90) {
		setTimeout(() => {
			alert('为了更好的体验效果，请把屏幕竖过来');
		}, 800);
	}
}
window.addEventListener('onorientationchange' in window ? 'orientationchange' : 'resize', screen, false);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	// router,
	components: { App },
	template: '<App/>'
});
