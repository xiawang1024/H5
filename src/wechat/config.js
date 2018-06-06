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
	imgUrl = `http://www.hndt.com/h5/partysday/PartysDay.jpg`;
	desc = '给党唱支歌--庆祝中国共产党建党97周年大型系列文化活动！';
});

export { title, link, imgUrl, desc };
