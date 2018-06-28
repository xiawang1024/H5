import wx from 'weixin-js-sdk';
import axios from 'axios';
import weui from 'weui.js';
import Qs from 'qs';
import { WeChatConf } from './util';
import HU_DONG_ID from '@/config.js';
import { getUser, postMsg } from 'api/index';

const weChatConf = new WeChatConf();

function isWeixinBrowser() {
	var agent = navigator.userAgent.toLowerCase();
	if (agent.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}

if (isWeixinBrowser()) {
	// weChatConf.init();
}

wx.ready(function() {
	wx.onMenuShareTimeline({
		title: weChatConf.title,
		link: weChatConf.link,
		imgUrl: weChatConf.img_url,
		success: function() {},
		cancel: function() {}
	});
	wx.onMenuShareAppMessage({
		title: weChatConf.title,
		link: weChatConf.link,
		imgUrl: weChatConf.img_url,
		desc: weChatConf.desc,
		type: '',
		dataUrl: '',
		success: function() {},
		cancel: function() {}
	});

	wx.onVoiceRecordEnd({
		// 录音时间超过一分钟没有停止的时候会执行 complete 回调
		complete: (res) => {
			const localId = res.localId;
			wx.playVoice({
				localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
			});
			weui.confirm('确定发送', {
				buttons: [
					{
						label: '返回',
						type: 'default',
						onClick: () => {
							console.log('no');
						}
					},
					{
						label: '确定',
						type: 'primary',
						onClick: () => {
							uploadVoice(localId);
						}
					}
				]
			});
		}
	});
});
function uploadVoice(voiceLocalId) {
	//调用微信的上传录音接口把本地录音先上传到微信的服务器
	//不过，微信只保留3天，而我们需要长期保存，我们需要把资源从微信服务器下载到自己的服务器
	wx.uploadVoice({
		localId: voiceLocalId, // 需要上传的音频的本地ID，由stopRecord接口获得
		isShowProgressTips: 1, // 默认为1，显示进度提示
		success: (res) => {
			let serverId = res.serverId;
			let userInfo = JSON.parse(weChat.getStorage('WXHNDTOPENID'));
			setTimeout(() => {
				let openid = userInfo.openid;
				getUser(openid)
					.then((response) => {
						let data = response.data;
						if (data.status === 1) {
							let creater = data.data.name;
							let fromUid = data.data.id;

							postMsg(-2, HU_DONG_ID, creater, fromUid, serverId).then(() => {
								weui.toast('发送成功，等待审核！');
							});
						} else {
							console.log('获取用户信息失败');
						}
					})
					.catch((err) => {
						console.log(err);
					});
			}, 20);
		}
	});
}
