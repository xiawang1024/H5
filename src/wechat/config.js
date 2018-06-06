/**
 * DEFAULT_TITLE String 分享标题
 * DEFAULT_LINK String 分享链接
 * DEFAULT_IMGURL String 分享图标链接
 * DEFAULT_DESC String 分享描述
 */
let title = '';
let link = '';
let imgUrl = '';
let desc = '';

import { getChannelItem } from 'api/index';
import channelInfo from '../config';

document.title = channelInfo.title;

getChannelItem(channelInfo.cid).then((res) => {
	let data = res.data;
	title = data.name;
	link = channelInfo.url;
	imgUrl = `http://program.hndt.com${data.image}`;
	desc = data.description;
});

export { title, link, imgUrl, desc };
