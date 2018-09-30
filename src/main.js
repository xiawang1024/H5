// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
// import router from 'router'
import 'base/stylus/index.styl';

/* 微信自定义分享 */

import './weChat/index';

/* swiper插件 */

// import VueAwesomeSwiper　from 'vue-awesome-swiper'
// import 'animate.css'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)

/* fastclick修复移动端点击延迟300ms */
import fastclick from 'fastclick';
fastclick.attach(document.body);

/**
 * 视频直播
 */
import VueVideoPlayer from 'vue-video-player';
// import 'video.js/dist/video-js.css';
Vue.use(VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */);

/**
 * 过滤器
 */
require('./filter');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	// router,
	components: { App },
	template: '<App/>'
});
