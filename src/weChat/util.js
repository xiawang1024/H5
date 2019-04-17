import wx from 'weixin-js-sdk'
import axios from 'axios'
import Qs from 'qs'
import store from 'store'
import STORE_NAME from 'config/store_config.js'

import { getLiveData } from 'api/index'
import Bus from 'base/js/bus'

const LINK = window.location.href

class WeChat {
	constructor() {
		this.baseUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?'
		this.appId = 'wx5f789dea59c6c2c5'
		this.redirect_uri = LINK
		this.response_type = 'code'
		this.scope = 'snsapi_userinfo' //snsapi_base 只获取openId ， snsapi_userinfo 获取用户信息;
		this.state = Date.parse(new Date())
		this.weChat_Redirect = '#wechat_redirect'
	}
	getQueryString(name) {
		let reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i')
		let res = window.location.href.match(reg)

		if (res && res.length > 1) {
			return decodeURIComponent(res[1])
		}
		return ''
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
			this.weChat_Redirect
		window.location = url
	}
	hasCode() {
		if (!this.getQueryString('code')) {
			this.redirectUrl()
		} else {
			this.getOpenId()
		}
	}
	getOpenId() {
		axios({
			method: 'post',
			url: 'https://a.weixin.hndt.com/boom/wx/access/subscribe',
			data: Qs.stringify({
				code: this.getQueryString('code'),
				state: this.appId,
				subscribe: false
			})
		})
			.then((res) => {
				let { data, status } = res.data
				if (status === 'ok') {
					store.set(STORE_NAME, data)
				} else {
					this.redirectUrl()
				}
			})
			.catch(() => {
				this.redirectUrl()
			})
	}
	getStorage(name) {
		return localStorage.getItem(name)
	}
	setStorage(name, value) {
		return localStorage.setItem(name, value)
	}
}

class WeChatConf extends WeChat {
	constructor(props) {
		super(props)
		this.title = ''
		this.link = LINK //分享链接
		this.img_url = ''
		this.desc = ''
	}
	init() {
		/**微信授权 */
		// if (this.isWeixinBrowser()) {
		// 	if (!store.get(STORE_NAME)) {
		// 		super.hasCode()
		// 	}
		// }

		this.initData()
	}
	initData() {
		getLiveData().then((res) => {
			let data = res.data
			this.title = data.title
			document.title = data.title || '直播间'
			this.img_url = data.icon
			this.desc = data.desc
			let src = data.video
			let poster = data.icon
			let content = data.body

			Bus.$emit('initPlayer', data)
			axios
				.post('https://a.weixin.hndt.com/boom/at/sign', Qs.stringify({ url: window.location.href }))
				.then((res) => {
					let data = res.data
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
					})
				})
		})
	}
	isWeixinBrowser() {
		let agent = navigator.userAgent.toLowerCase()
		if (agent.match(/MicroMessenger/i) == 'micromessenger') {
			return true
		} else {
			return false
		}
	}
}

export { WeChat, WeChatConf }
