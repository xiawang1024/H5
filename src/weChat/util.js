import wx from 'weixin-js-sdk';
import axios from 'axios';
import Qs from 'qs';

const LINK = 'https://a.weixin.hndt.com/h5/20180719/index.html';

class WeChat {
	constructor() {
		this.baseUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?';
		this.appId = 'wx5f789dea59c6c2c5';
		this.redirect_uri = LINK;
		this.response_type = 'code';
		this.scope = 'snsapi_userinfo'; //snsapi_base 只获取openId ， snsapi_userinfo 获取用户信息;
		this.state = Date.parse(new Date());
		this.weChat_Redirect = '#wechat_redirect';
	}
	getQueryString(name) {
		var url = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var newUrl = window.location.search.substr(1).match(url);
		if (newUrl != null) {
			return unescape(newUrl[2]);
		} else {
			return false;
		}
	}
	redirectUrl() {
		let url =
			this.baseUrl +
			'appid=' +
			this.appId +
			'&redirect_uri=' +
			encodeURIComponent(this.redirect_uri) +
			'&response_type=' +
			this.response_type +
			'&scope=' +
			this.scope +
			'&state=' +
			this.state +
			this.weChat_Redirect;
		window.location = url;
	}
	hasCode() {
		if (!this.getQueryString('code')) {
			this.redirectUrl();
		} else {
			this.getOpenId();
		}
	}
	getOpenId() {
		axios({
			method: 'post',
			url: 'https://a.weixin.hndt.com/boom/api/token/access/redirect2',
			data: Qs.stringify({ code: this.getQueryString('code'), cate: this.appId })
		})
			.then((res) => {
				let data = res.data;
				if (data.status == 'ok') {
					this.setStorage('WXHNDTOPENID', JSON.stringify(data.data));
				} else {
					this.redirectUrl();
				}
			})
			.catch(() => {
				this.redirectUrl();
			});
	}
	getStorage(name) {
		return localStorage.getItem(name);
	}
	setStorage(name, value) {
		return localStorage.setItem(name, value);
	}
}

class WeChatConf extends WeChat {
	constructor(props) {
		super(props);
		this.title = '第6届中国创业者大会--正在直播';
		this.link = LINK; //分享链接
		this.img_url = 'http://www.hndt.com/zt/entre/res/wap/img/dahui.jpg';
		this.desc = '第6届中国创业者大会';
	}
	init() {
		this.hasCode();
		axios.post('https://a.weixin.hndt.com/at/sign', Qs.stringify({ url: window.location.href })).then((res) => {
			let data = res.data;
			wx.config({
				debug: false,
				appId: data.appId,
				timestamp: data.timestamp,
				nonceStr: data.nonceStr,
				signature: data.signature,
				jsApiList: [
					'onMenuShareTimeline',
					'onMenuShareAppMessage',
					'chooseImage',
					'uploadImage',
					'previewImage',
					'startRecord',
					'playVoice',
					'stopRecord',
					'downloadVoice',
					'uploadVoice',
					'stopVoice',
					'openLocation'
				]
			});
		});
	}
}

export { WeChat, WeChatConf };
