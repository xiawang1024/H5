/**
 * api
 */
import axios from 'axios';
import Qs from 'qs';
import HU_DONG_ID from '@/config.js';

// axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'http://www.softzztiedu.top/test/upRadio.do';

// ?openid=ofiRq0VYx1ccPYzqlffbh_kwMPaQ&appid=wx9760b6876d5e339f&content=1234567&page=0

const postUserInfo = (name, mobile, origin, openId) =>
	axios.post('https://a.weixin.hndt.com/user/add/hn', {
		name,
		mobile,
		origin,
		openId
	});

const checkOpenId = (openId, origin) =>
	axios.get('https://a.weixin.hndt.com/user/check/?openid=' + openId + '&origin=' + origin);

const getUser = (openid) => axios.get('https://a.weixin.hndt.com/user/find/openid?openid=' + openid);

const postMsg = (page, cid = HU_DONG_ID, content = '', creater = '游客', fromUid = '0') =>
	axios.post(
		'https://talk.hndt.com/test/upRadio.do',
		Qs.stringify({
			page,
			cid,
			creater,
			fromUid,
			content
		})
	);

const pay = (openId, name = '1066', phone = '1066', source = 100) =>
	axios.post(
		'https://a.weixin.hndt.com/passport/order/create.do',
		JSON.stringify({
			openId,
			name,
			phone,
			source,
			orderDetailList: [
				{
					productId: 3,
					productQuantity: 1
				}
			]
		}),
		{
			headers: {
				'Content-Type': 'application/json;charset=UTF-8'
			}
		}
	);

const visit = (openId) =>
	axios.get('https://a.weixin.hndt.com/passport/pay_to_live/pay_and_time_auth.do?openId=' + openId);

export { postUserInfo, checkOpenId, getUser, postMsg, pay, visit };
