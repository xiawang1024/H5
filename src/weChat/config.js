/**
 * DEFAULT_TITLE String 分享标题
 * DEFAULT_LINK String 分享链接
 * DEFAULT_IMGURL String 分享图标链接
 * DEFAULT_DESC String 分享描述
 */

// import { getChannelItem } from 'api/index';
import { channelInfo } from '../config';

document.title = channelInfo.title;

// getChannelItem(channelInfo.cid).then((res) => {
// 	let data = res.data;
// 	title = channelInfo.title;
// 	link = channelInfo.url;
// 	imgUrl = `http://program.hndt.com${data.image}`;
// 	desc = data.description;
// 	console.log(imgUrl);
// });
let title = channelInfo.title;
let link = channelInfo.url;

export { title, link };
