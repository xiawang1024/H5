import axios from 'axios';
import Qs from 'qs';
const wx = require('weixin-js-sdk');

const { DEFAULT_TITLE, DEFAULT_LINK, DEFAULT_IMGURL, DEFAULT_DESC } = require('./config');

const title = DEFAULT_TITLE;
const link = DEFAULT_LINK;
const imgUrl = DEFAULT_IMGURL;
const desc = DEFAULT_DESC;

let configData = {
	url: window.location.href.split('#')[0],
	jsApiList: [
		'onMenuShareTimeline',
		'onMenuShareAppMessage',
		'chooseImage',
		'previewImage',
		'startRecord',
		'playVoice',
		'stopRecord',
		'downloadVoice',
		'uploadVoice',
		'stopVoice',
		'openLocation'
	]
};

axios.post('https://a.weixin.hndt.com/at/sign', Qs.stringify({ url: configData.url })).then((res) => {
	let data = res.data;
	wx.config({
		debug: false,
		appId: data.appId,
		timestamp: data.timestamp,
		nonceStr: data.nonceStr,
		signature: data.signature,
		jsApiList: configData.jsApiList
	});
});

wx.ready(function() {
	wx.onMenuShareTimeline({
		title: title,
		link: link,
		imgUrl: imgUrl,
		success: function() {},
		cancel: function() {}
	});
	wx.onMenuShareAppMessage({
		title: title,
		link: link,
		imgUrl: imgUrl,
		desc: desc,
		type: '',
		dataUrl: '',
		success: function() {},
		cancel: function() {}
	});
});
